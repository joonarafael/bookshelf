import { ArrowDown, ArrowUp } from 'lucide-react';
import type { ReactElement } from 'react';
import type { SortDirection, SortField, TitleLanguage } from '../sort-types';
import { SortFieldSelect } from './sort-field-select';

interface SortControlsProps {
    direction: SortDirection;
    field: SortField;
    onDirectionChange: (direction: SortDirection) => void;
    onFieldChange: (field: SortField) => void;
    onTitleLanguageChange: (language: TitleLanguage) => void;
    titleLanguage: TitleLanguage;
}

export const SortControls = ({
    direction,
    field,
    onDirectionChange,
    onFieldChange,
    onTitleLanguageChange,
    titleLanguage,
}: SortControlsProps): ReactElement => {
    const DirectionIcon = direction === 'asc' ? ArrowUp : ArrowDown;

    return (
        <div className='sort-controls'>
            <SortFieldSelect
                field={field}
                onFieldChange={onFieldChange}
            />

            <button
                type='button'
                className='sort-controls__direction'
                aria-pressed={direction === 'desc'}
                onClick={() => {
                    onDirectionChange(direction === 'asc' ? 'desc' : 'asc');
                }}
            >
                <DirectionIcon
                    className='sort-controls__icon'
                    aria-hidden='true'
                />
            </button>

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
};

export type { SortDirection, SortField, TitleLanguage } from '../sort-types';
