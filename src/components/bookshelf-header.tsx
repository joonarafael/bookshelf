import type { ReactElement } from 'react';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from '../sort-types';
import { SearchBar } from './search-bar';
import { SortControls } from './sort-controls';

interface BookshelfHeaderProps {
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

export const BookshelfHeader = ({
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
}: BookshelfHeaderProps): ReactElement => (
    <header className='bookshelf__header'>
        <SortControls
            direction={direction}
            field={field}
            readFilter={readFilter}
            titleLanguage={titleLanguage}
            onDirectionChange={onDirectionChange}
            onFieldChange={onFieldChange}
            onReadFilterChange={onReadFilterChange}
            onTitleLanguageChange={onTitleLanguageChange}
        />

        <SearchBar
            query={query}
            onQueryChange={onQueryChange}
        />
    </header>
);
