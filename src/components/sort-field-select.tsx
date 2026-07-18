import { BookText, Calendar, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';
import type { SortField } from '../sort-types';

interface SortFieldSelectProps {
    field: SortField;
    onFieldChange: (field: SortField) => void;
}

const SORT_FIELDS: SortField[] = ['title', 'author', 'published'];

const SORT_FIELD_ICONS: Record<SortField, LucideIcon> = {
    author: User,
    published: Calendar,
    title: BookText,
};

const SORT_FIELD_LABELS: Record<SortField, string> = {
    author: 'Sort by author',
    published: 'Sort by published year',
    title: 'Sort by title',
};

const cycleSortField = (field: SortField): SortField => {
    const index = SORT_FIELDS.indexOf(field);

    return SORT_FIELDS[(index + 1) % SORT_FIELDS.length] ?? 'title';
};

export const SortFieldSelect = ({ field, onFieldChange }: SortFieldSelectProps): ReactElement => {
    const FieldIcon = SORT_FIELD_ICONS[field];

    return (
        <button
            type='button'
            className='sort-controls__field'
            aria-label={SORT_FIELD_LABELS[field]}
            onClick={() => {
                onFieldChange(cycleSortField(field));
            }}
        >
            <FieldIcon
                className='sort-controls__icon'
                aria-hidden='true'
            />
        </button>
    );
};
