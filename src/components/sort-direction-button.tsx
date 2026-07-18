import { ArrowDown, ArrowUp } from 'lucide-react';
import type { ReactElement } from 'react';
import type { SortDirection } from '../sort-types';

interface SortDirectionButtonProps {
    direction: SortDirection;
    onDirectionChange: (direction: SortDirection) => void;
}

export const SortDirectionButton = ({
    direction,
    onDirectionChange,
}: SortDirectionButtonProps): ReactElement => {
    const DirectionIcon = direction === 'asc' ? ArrowUp : ArrowDown;

    return (
        <button
            type='button'
            className='sort-controls__direction'
            aria-pressed={direction === 'desc'}
            aria-label={direction === 'asc' ? 'Sort ascending' : 'Sort descending'}
            onClick={() => {
                onDirectionChange(direction === 'asc' ? 'desc' : 'asc');
            }}
        >
            <DirectionIcon
                className='sort-controls__icon'
                aria-hidden='true'
            />
        </button>
    );
};
