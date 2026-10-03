const UNKNOWN_VALUE = '-';
const AUTHOR_SEPARATOR_PATTERN = /\s+(?:&|and|ja)\s+/u;

export const splitAuthors = (author: string): string[] => {
    if (author === UNKNOWN_VALUE) {
        return [];
    }

    return author
        .split(AUTHOR_SEPARATOR_PATTERN)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);
};
