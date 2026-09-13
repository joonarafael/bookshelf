import { useState } from 'react';
import type { ReactElement } from 'react';
import { BookList } from './components/book-list';
import { BookshelfFooter } from './components/bookshelf-footer';
import { BookshelfStatusBar } from './components/bookshelf-status-bar';
import { BookshelfTitle } from './components/bookshelf-title';
import { SearchBar } from './components/search-bar';
import { SortControls } from './components/sort-controls';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from './sort-types';
import { useVisibleBooks } from './use-visible-books';
import './app.css';

export const App = (): ReactElement => {
    const [sortField, setSortField] = useState<SortField>('author');
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
            <BookshelfTitle titleLanguage={titleLanguage} />
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

            <BookshelfFooter />
        </main>
    );
};
