import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { TitleLanguage } from '../sortTypes';
import { BookCard } from './BookCard';

interface BookListItemProps {
    book: Book;
    titleLanguage: TitleLanguage;
}

export const BookListItem = ({ book, titleLanguage }: BookListItemProps): ReactElement => (
    <li>
        <BookCard
            book={book}
            titleLanguage={titleLanguage}
        />
    </li>
);
