import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { BOOKS } from './books';
import { BookList } from './components/book-list';
import { SortControls } from './components/sort-controls';
import type { SortDirection, SortField, TitleLanguage } from './sort-types';
import { sortBooks } from './sort-books';
import './app.css';

export const App = (): ReactElement => {
    const [sortField, setSortField] = useState<SortField>('title');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [titleLanguage, setTitleLanguage] = useState<TitleLanguage>('en');

    const books = useMemo(
        () =>
            sortBooks({
                books: BOOKS,
                direction: sortDirection,
                field: sortField,
                titleLanguage,
            }),
        [sortField, sortDirection, titleLanguage],
    );

    return (
        <main className='bookshelf'>
            <header className='bookshelf__header'>
                <SortControls
                    direction={sortDirection}
                    field={sortField}
                    titleLanguage={titleLanguage}
                    onDirectionChange={setSortDirection}
                    onFieldChange={setSortField}
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
