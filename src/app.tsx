import { useState } from 'react';
import type { ReactElement } from 'react';
import { BookshelfFooter } from './components/bookshelf-footer';
import { BookshelfGrid } from './components/bookshelf-grid';
import { BookshelfTitle } from './components/bookshelf-title';
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
            <BookshelfGrid
                books={books}
                direction={sortDirection}
                field={sortField}
                query={searchQuery}
                readFilter={readFilter}
                titleLanguage={titleLanguage}
                onDirectionChange={setSortDirection}
                onFieldChange={setSortField}
                onQueryChange={setSearchQuery}
                onReadFilterChange={setReadFilter}
                onTitleLanguageChange={setTitleLanguage}
            />
            <BookshelfFooter />
        </main>
    );
};
