import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from './Icon';

export type SortField = 'title' | 'author' | 'published';
export type SortDirection = 'asc' | 'desc';

interface SortControlsProps {
    field: SortField;
    direction: SortDirection;
    onFieldChange: (field: SortField) => void;
    onDirectionChange: (direction: SortDirection) => void;
}

const SORT_FIELDS: { value: SortField; icon: string }[] = [
    { value: 'title', icon: 'book-icon' },
    { value: 'author', icon: 'author-icon' },
    { value: 'published', icon: 'calendar-icon' },
];

export function SortControls({
    field,
    direction,
    onFieldChange,
    onDirectionChange,
}: SortControlsProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const listId = useId();
    const selected = SORT_FIELDS.find((option) => option.value === field) ?? SORT_FIELDS[0];

    useEffect(() => {
        if (!open) {
            return;
        }

        const handlePointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    return (
        <div
            className='sort-controls'
            ref={rootRef}
        >
            <div className='sort-controls__field'>
                <button
                    type='button'
                    className='sort-controls__trigger'
                    aria-haspopup='listbox'
                    aria-expanded={open}
                    aria-controls={listId}
                    onClick={() => {
                        setOpen((current) => !current);
                    }}
                >
                    <Icon
                        id={selected.icon}
                        className='sort-controls__icon'
                    />
                    <Icon
                        id='chevron-down-icon'
                        className='sort-controls__chevron'
                    />
                </button>

                {open && (
                    <ul
                        id={listId}
                        className='sort-controls__menu'
                        role='listbox'
                    >
                        {SORT_FIELDS.map((option) => (
                            <li key={option.value}>
                                <button
                                    type='button'
                                    role='option'
                                    aria-selected={field === option.value}
                                    className='sort-controls__option'
                                    onClick={() => {
                                        onFieldChange(option.value);
                                        setOpen(false);
                                    }}
                                >
                                    <Icon
                                        id={option.icon}
                                        className='sort-controls__icon'
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                type='button'
                className='sort-controls__direction'
                aria-pressed={direction === 'desc'}
                onClick={() => {
                    onDirectionChange(direction === 'asc' ? 'desc' : 'asc');
                }}
            >
                <Icon
                    id={direction === 'asc' ? 'sort-asc-icon' : 'sort-desc-icon'}
                    className='sort-controls__icon'
                />
            </button>
        </div>
    );
}
