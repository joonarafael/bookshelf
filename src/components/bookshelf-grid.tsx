import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from '../sort-types';
import { BookList } from './book-list';
import { BookshelfHeader } from './bookshelf-header';
import { BookshelfStatusBar } from './bookshelf-status-bar';

interface BookshelfGridProps {
    books: Book[];
    direction: SortDirection;
    field: SortField;
    onDirectionChange: (direction: SortDirection) => void;
    onFieldChange: (field: SortField) => void;
    onQueryChange: (query: string) => void;
    onReadFilterChange: (filter: ReadFilter) => void;
    onTitleLanguageChange: (language: TitleLanguage) => void;
    query: string;
    readFilter: ReadFilter;
    titleLanguage: TitleLanguage;
}

export const BookshelfGrid = ({
    books,
    direction,
    field,
    onDirectionChange,
    onFieldChange,
    onQueryChange,
    onReadFilterChange,
    onTitleLanguageChange,
    query,
    readFilter,
    titleLanguage,
}: BookshelfGridProps): ReactElement => (
    <div className='bookshelf__grid'>
        <BookshelfHeader
            direction={direction}
            field={field}
            query={query}
            readFilter={readFilter}
            titleLanguage={titleLanguage}
            onDirectionChange={onDirectionChange}
            onFieldChange={onFieldChange}
            onQueryChange={onQueryChange}
            onReadFilterChange={onReadFilterChange}
            onTitleLanguageChange={onTitleLanguageChange}
        />

        <BookshelfStatusBar
            direction={direction}
            field={field}
            readFilter={readFilter}
            titleLanguage={titleLanguage}
        />

        <BookList
            books={books}
            titleLanguage={titleLanguage}
        />
    </div>
);
