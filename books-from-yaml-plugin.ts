import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';

const UNKNOWN_VALUE = '-' as const;
const BOOKS_DATA_MODULE_PATTERN = /(?:^|\/)books-data(?:\.ts)?$/u;
const BOOKS_YAML_RELATIVE_PATH = 'public/books.yaml';

const BookAdditionalInfoSchema = z.strictObject({
    en: z.string().nonempty(),
    fi: z.string().nonempty(),
});

const BookSchema = z.strictObject({
    additional_info: BookAdditionalInfoSchema.optional(),
    author: z.string().nonempty(),
    published: z.union([z.int(), z.literal(UNKNOWN_VALUE)]),
    read: z.boolean(),
    title_en: z.string().nonempty(),
    title_fi: z.string().nonempty(),
});

const BooksSchema = z.array(BookSchema);

const loadValidatedBooks = async (yamlPath: string): Promise<z.infer<typeof BooksSchema>> => {
    const parsed: unknown = parseYaml(await readFile(yamlPath, 'utf8'));
    const result = BooksSchema.safeParse(parsed);

    if (result.success) {
        return result.data;
    }

    throw new Error(`Invalid ${BOOKS_YAML_RELATIVE_PATH}:\n${z.prettifyError(result.error)}`);
};

export const booksFromYamlPlugin = (): Plugin => ({
    enforce: 'pre',
    name: 'books-from-yaml',
    transform: {
        filter: {
            id: BOOKS_DATA_MODULE_PATTERN,
        },
        async handler(): Promise<string> {
            const yamlPath = resolve(import.meta.dirname, BOOKS_YAML_RELATIVE_PATH);
            this.addWatchFile(yamlPath);

            return `export const BOOKS = ${JSON.stringify(await loadValidatedBooks(yamlPath))};`;
        },
    },
});
