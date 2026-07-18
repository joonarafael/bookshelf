import type { Book } from './books';
import type { SortDirection, SortField, TitleLanguage } from './sortTypes';

interface SortBooksOptions {
    books: Book[];
    direction: SortDirection;
    field: SortField;
    titleLanguage: TitleLanguage;
}

interface CompareByFieldOptions {
    field: SortField;
    left: Book;
    right: Book;
    titleLanguage: TitleLanguage;
}

const SORT_EQUAL = 0;

const normalizePublished = (value: Book['published']): number =>
    value === '-' ? Number.POSITIVE_INFINITY : value;

const comparePublished = (left: Book['published'], right: Book['published']): number =>
    normalizePublished(left) - normalizePublished(right);

const getTitle = (book: Book, language: TitleLanguage): string =>
    language === 'en' ? book.title_en : book.title_fi;

const compareByField = ({ field, left, right, titleLanguage }: CompareByFieldOptions): number => {
    switch (field) {
        case 'title': {
            return getTitle(left, titleLanguage).localeCompare(getTitle(right, titleLanguage));
        }
        case 'author': {
            return left.author.localeCompare(right.author);
        }
        case 'published': {
            return comparePublished(left.published, right.published);
        }
        default: {
            return SORT_EQUAL;
        }
    }
};

export const sortBooks = ({ books, direction, field, titleLanguage }: SortBooksOptions): Book[] =>
    books.toSorted((left, right) => {
        const result = compareByField({ field, left, right, titleLanguage });

        return direction === 'asc' ? result : -result;
    });
