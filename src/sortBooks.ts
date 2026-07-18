import type { Book } from './books';
import type { SortDirection, SortField, TitleLanguage } from './components/SortControls';

const comparePublished = (left: Book['published'], right: Book['published']) => {
    const normalize = (value: Book['published']) =>
        value === '-' ? Number.POSITIVE_INFINITY : value;

    return normalize(left) - normalize(right);
};

const getTitle = (book: Book, language: TitleLanguage) =>
    language === 'en' ? book.title_en : book.title_fi;

export const sortBooks = (
    books: Book[],
    field: SortField,
    direction: SortDirection,
    titleLanguage: TitleLanguage,
): Book[] => {
    const sorted = [...books].sort((left, right) => {
        let result = 0;

        switch (field) {
            case 'title':
                result = getTitle(left, titleLanguage).localeCompare(
                    getTitle(right, titleLanguage),
                );
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
