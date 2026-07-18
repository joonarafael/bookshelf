import type { Book } from './books';

const normalizeSearchQuery = (query: string): string => query.trim().toLowerCase();

const bookMatchesSearch = (book: Book, normalizedQuery: string): boolean => {
    if (book.author.toLowerCase().includes(normalizedQuery)) {
        return true;
    }

    if (book.title_en.toLowerCase().includes(normalizedQuery)) {
        return true;
    }

    if (book.title_fi.toLowerCase().includes(normalizedQuery)) {
        return true;
    }

    if (book.published !== '-' && String(book.published).includes(normalizedQuery)) {
        return true;
    }

    return false;
};

export const filterBooksBySearch = (books: Book[], query: string): Book[] => {
    const normalizedQuery = normalizeSearchQuery(query);

    if (normalizedQuery === '') {
        return books;
    }

    return books.filter((book) => bookMatchesSearch(book, normalizedQuery));
};
