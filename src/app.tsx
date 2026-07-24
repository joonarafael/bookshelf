import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { BOOKS } from './books';
import { BookList } from './components/book-list';
import { BookshelfStatusBar } from './components/bookshelf-status-bar';
import { SearchBar } from './components/search-bar';
import { SortControls } from './components/sort-controls';
import { filterBooksBySearch } from './filter-books-by-search';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from './sort-types';
import { sortBooks } from './sort-books';
import './app.css';

const filterBooksByReadStatus = (books: typeof BOOKS, readFilter: ReadFilter): typeof BOOKS => {
    if (readFilter === 'read') {
        return books.filter((book) => book.read);
    }

    if (readFilter === 'unread') {
        return books.filter((book) => !book.read);
    }

    return books;
};

const useVisibleBooks = ({
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

export const App = (): ReactElement => {
    const [sortField, setSortField] = useState<SortField>('title');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [titleLanguage, setTitleLanguage] = useState<TitleLanguage>('en');
    const [readFilter, setReadFilter] = useState<ReadFilter>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const books = useVisibleBooks({
        direction: sortDirection,
        field: sortField,
        readFilter,
        searchQuery,
        titleLanguage,
    });

    return (
        <main className='bookshelf'>
            <header className='bookshelf__header'>
                <SortControls
                    direction={sortDirection}
                    field={sortField}
                    readFilter={readFilter}
                    titleLanguage={titleLanguage}
                    onDirectionChange={setSortDirection}
                    onFieldChange={setSortField}
                    onReadFilterChange={setReadFilter}
                    onTitleLanguageChange={setTitleLanguage}
                />

                <SearchBar
                    query={searchQuery}
                    onQueryChange={setSearchQuery}
                />
            </header>

            <BookshelfStatusBar
                direction={sortDirection}
                field={sortField}
                readFilter={readFilter}
                titleLanguage={titleLanguage}
            />

            <BookList
                books={books}
                titleLanguage={titleLanguage}
            />
        </main>
    );
};
