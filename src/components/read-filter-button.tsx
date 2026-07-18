import { BookOpen, BookOpenCheck, Library } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';
import type { ReadFilter } from '../sort-types';

interface ReadFilterButtonProps {
    readFilter: ReadFilter;
    onReadFilterChange: (filter: ReadFilter) => void;
}

const READ_FILTERS: ReadFilter[] = ['all', 'unread', 'read'];

const READ_FILTER_ICONS: Record<ReadFilter, LucideIcon> = {
    all: Library,
    read: BookOpenCheck,
    unread: BookOpen,
};

const READ_FILTER_LABELS: Record<ReadFilter, string> = {
    all: 'Show all books',
    read: 'Show read books only',
    unread: 'Show unread books only',
};

const cycleReadFilter = (filter: ReadFilter): ReadFilter => {
    const index = READ_FILTERS.indexOf(filter);

    return READ_FILTERS[(index + 1) % READ_FILTERS.length] ?? 'all';
};

export const ReadFilterButton = ({
    readFilter,
    onReadFilterChange,
}: ReadFilterButtonProps): ReactElement => {
    const ReadFilterIcon = READ_FILTER_ICONS[readFilter];

    return (
        <button
            type='button'
            className='sort-controls__read-filter'
            data-filter={readFilter}
            aria-label={READ_FILTER_LABELS[readFilter]}
            onClick={() => {
                onReadFilterChange(cycleReadFilter(readFilter));
            }}
        >
            <ReadFilterIcon
                className='sort-controls__icon'
                aria-hidden='true'
            />
        </button>
    );
};
