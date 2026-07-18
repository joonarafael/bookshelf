import { useMemo, useState } from 'react';
import { BOOKS } from './books';
import { BookCard } from './components/BookCard';
import { SortControls, type SortDirection, type SortField } from './components/SortControls';
import { sortBooks } from './sortBooks';
import './App.css';

function App() {
    const [sortField, setSortField] = useState<SortField>('title');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const books = useMemo(
        () => sortBooks(BOOKS, sortField, sortDirection),
        [sortField, sortDirection],
    );

    return (
        <main className='bookshelf'>
            <header className='bookshelf__header'>
                <SortControls
                    field={sortField}
                    direction={sortDirection}
                    onFieldChange={setSortField}
                    onDirectionChange={setSortDirection}
                />
            </header>

            <ul className='bookshelf__list'>
                {books.map((book) => (
                    <li key={`${book.title_en}-${book.author}-${book.published}`}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;
