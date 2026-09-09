import { useMemo } from 'react';
import { BOOKS } from './books';
import { filterBooksBySearch } from './filter-books-by-search';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from './sort-types';
import { sortBooks } from './sort-books';

const filterBooksByReadStatus = (books: typeof BOOKS, readFilter: ReadFilter): typeof BOOKS => {
    if (readFilter === 'read') {
        return books.filter((book) => book.read);
    }

    if (readFilter === 'unread') {
        return books.filter((book) => !book.read);
    }

    return books;
};

export const useVisibleBooks = ({
    direction,
    field,
    readFilter,
    searchQuery,
    titleLanguage,
}: {
    direction: SortDirection;
    field: SortField;
    readFilter: ReadFilter;
    searchQuery: string;
    titleLanguage: TitleLanguage;
}): typeof BOOKS =>
    useMemo(
        () =>
            sortBooks({
                books: filterBooksBySearch(filterBooksByReadStatus(BOOKS, readFilter), searchQuery),
                direction,
                field,
                titleLanguage,
            }),
        [direction, field, readFilter, searchQuery, titleLanguage],
    );
