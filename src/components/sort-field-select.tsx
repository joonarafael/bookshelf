import type { ReactElement } from 'react';
import type { SortField } from '../sort-types';

interface SortFieldSelectProps {
    field: SortField;
    onFieldChange: (field: SortField) => void;
}

const SORT_FIELDS: SortField[] = ['title', 'author', 'published'];

const SORT_FIELD_LABELS: Record<SortField, string> = {
    author: 'Author',
    published: 'Published',
    title: 'Title',
};

const isSortField = (value: string): value is SortField =>
    value === 'title' || value === 'author' || value === 'published';

export const SortFieldSelect = ({ field, onFieldChange }: SortFieldSelectProps): ReactElement => (
    <select
        aria-label='Sort by'
        className='sort-controls__field-select'
        value={field}
        onChange={(event) => {
            const { value } = event.target;

            if (isSortField(value)) {
                onFieldChange(value);
            }
        }}
    >
        {SORT_FIELDS.map((sortField) => (
            <option
                key={sortField}
                value={sortField}
            >
                {SORT_FIELD_LABELS[sortField]}
            </option>
        ))}
    </select>
);
