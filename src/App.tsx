import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { BOOKS } from './books';
import { BookCard } from './components/BookCard';
import { SortControls } from './components/SortControls';
import type { SortDirection, SortField, TitleLanguage } from './sortTypes';
import { sortBooks } from './sortBooks';
import './App.css';

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

            <ul className='bookshelf__list'>
                {books.map((book) => (
                    <li key={`${book.title_en}-${book.author}-${book.published}`}>
                        <BookCard
                            book={book}
                            titleLanguage={titleLanguage}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
};
