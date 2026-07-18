import { Search, X } from 'lucide-react';
import type { ChangeEvent, ReactElement } from 'react';

interface SearchBarProps {
    onQueryChange: (query: string) => void;
    query: string;
}

export const SearchBar = ({ onQueryChange, query }: SearchBarProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onQueryChange(event.target.value);
    };

    const handleClear = (): void => {
        onQueryChange('');
    };

    return (
        <div className='search-bar'>
            <Search
                className='search-bar__icon'
                aria-hidden='true'
            />

            <input
                type='search'
                className='search-bar__input'
                value={query}
                placeholder='…'
                aria-label='...'
                onChange={handleChange}
            />

            {query !== '' && (
                <button
                    type='button'
                    className='search-bar__clear'
                    aria-label='Clear search'
                    onClick={handleClear}
                >
                    <X
                        className='search-bar__clear-icon'
                        aria-hidden='true'
                    />
                </button>
            )}
        </div>
    );
};
