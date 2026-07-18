import {
    ArrowDown,
    ArrowUp,
    Book,
    Calendar,
    ChevronDown,
    User,
    type LucideIcon,
} from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

export type SortField = 'title' | 'author' | 'published';
export type SortDirection = 'asc' | 'desc';
export type TitleLanguage = 'en' | 'fi';

interface SortControlsProps {
    field: SortField;
    direction: SortDirection;
    titleLanguage: TitleLanguage;
    onFieldChange: (field: SortField) => void;
    onDirectionChange: (direction: SortDirection) => void;
    onTitleLanguageChange: (language: TitleLanguage) => void;
}

const SORT_FIELDS: { value: SortField; icon: LucideIcon }[] = [
    { value: 'title', icon: Book },
    { value: 'author', icon: User },
    { value: 'published', icon: Calendar },
];

export function SortControls({
    field,
    direction,
    titleLanguage,
    onFieldChange,
    onDirectionChange,
    onTitleLanguageChange,
}: SortControlsProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const listId = useId();
    const selected = SORT_FIELDS.find((option) => option.value === field) ?? SORT_FIELDS[0];
    const SelectedIcon = selected.icon;
    const DirectionIcon = direction === 'asc' ? ArrowUp : ArrowDown;

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
                    <SelectedIcon
                        className='sort-controls__icon'
                        aria-hidden='true'
                    />
                    <ChevronDown
                        className='sort-controls__chevron'
                        aria-hidden='true'
                    />
                </button>

                {open && (
                    <ul
                        id={listId}
                        className='sort-controls__menu'
                        role='listbox'
                    >
                        {SORT_FIELDS.map((option) => {
                            const OptionIcon = option.icon;

                            return (
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
                                        <OptionIcon
                                            className='sort-controls__icon'
                                            aria-hidden='true'
                                        />
                                    </button>
                                </li>
                            );
                        })}
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
}
