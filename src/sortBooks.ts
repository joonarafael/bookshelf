import type { Book } from './books';
import type { SortDirection, SortField } from './components/SortControls';

const comparePublished = (left: Book['published'], right: Book['published']) => {
    const normalize = (value: Book['published']) =>
        value === '-' ? Number.POSITIVE_INFINITY : value;

    return normalize(left) - normalize(right);
};

export const sortBooks = (books: Book[], field: SortField, direction: SortDirection): Book[] => {
    const sorted = [...books].sort((left, right) => {
        let result = 0;

        switch (field) {
            case 'title':
                result = left.title_en.localeCompare(right.title_en);
                break;
            case 'author':
                result = left.author.localeCompare(right.author);
                break;
            case 'published':
                result = comparePublished(left.published, right.published);
                break;
        }

        return direction === 'asc' ? result : -result;
    });

    return sorted;
};
