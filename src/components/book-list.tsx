import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { TitleLanguage } from '../sort-types';
import { BookListItem } from './book-list-item';

interface BookListProps {
    books: Book[];
    titleLanguage: TitleLanguage;
}

export const BookList = ({ books, titleLanguage }: BookListProps): ReactElement => (
    <ul className='bookshelf__list'>
        {books.map((book) => (
            <BookListItem
                key={`${book.title_en}-${book.author}-${book.published}`}
                book={book}
                titleLanguage={titleLanguage}
            />
        ))}
    </ul>
);
