import type { ReactElement } from 'react';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from '../sort-types';
import { ReadFilterButton } from './read-filter-button';
import { SortDirectionButton } from './sort-direction-button';
import { SortFieldSelect } from './sort-field-select';

interface SortControlsProps {
    direction: SortDirection;
    field: SortField;
    onDirectionChange: (direction: SortDirection) => void;
    onFieldChange: (field: SortField) => void;
    onReadFilterChange: (filter: ReadFilter) => void;
    onTitleLanguageChange: (language: TitleLanguage) => void;
    readFilter: ReadFilter;
    titleLanguage: TitleLanguage;
}

export const SortControls = ({
    direction,
    field,
    onDirectionChange,
    onFieldChange,
    onReadFilterChange,
    onTitleLanguageChange,
    readFilter,
    titleLanguage,
}: SortControlsProps): ReactElement => (
    <div className='sort-controls'>
        <SortFieldSelect
            field={field}
            onFieldChange={onFieldChange}
        />

        <SortDirectionButton
            direction={direction}
            onDirectionChange={onDirectionChange}
        />

        <ReadFilterButton
            readFilter={readFilter}
            onReadFilterChange={onReadFilterChange}
        />

        <button
            type='button'
            className='sort-controls__language'
            aria-label={titleLanguage === 'en' ? 'Show Finnish titles' : 'Show English titles'}
            onClick={() => {
                onTitleLanguageChange(titleLanguage === 'en' ? 'fi' : 'en');
            }}
        >
            {titleLanguage.toUpperCase()}
        </button>
    </div>
);

export type { ReadFilter, SortDirection, SortField, TitleLanguage } from '../sort-types';
