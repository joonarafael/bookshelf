import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { BOOKS } from './books';
import { BookList } from './components/book-list';
import { SortControls } from './components/sort-controls';
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

export const App = (): ReactElement => {
    const [sortField, setSortField] = useState<SortField>('title');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [titleLanguage, setTitleLanguage] = useState<TitleLanguage>('en');
    const [readFilter, setReadFilter] = useState<ReadFilter>('all');

    const books = useMemo(
        () =>
            sortBooks({
                books: filterBooksByReadStatus(BOOKS, readFilter),
                direction: sortDirection,
                field: sortField,
                titleLanguage,
            }),
        [readFilter, sortField, sortDirection, titleLanguage],
    );

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
            </header>

            <BookList
                books={books}
                titleLanguage={titleLanguage}
            />
        </main>
    );
};
