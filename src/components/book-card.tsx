import { BookOpen, BookOpenCheck, Calendar, User } from 'lucide-react';
import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { TitleLanguage } from '../sort-types';
import { BookCardMetaRow } from './book-card-meta-row';

interface BookCardProps {
    book: Book;
    titleLanguage: TitleLanguage;
}

export const BookCard = ({ book, titleLanguage }: BookCardProps): ReactElement => {
    const StatusIcon = book.read ? BookOpenCheck : BookOpen;
    const title = titleLanguage === 'en' ? book.title_en : book.title_fi;
    const published = book.published === '-' ? '—' : String(book.published);

    return (
        <article className='book-card'>
            <header className='book-card__header'>
                <h2 className='book-card__title'>{title}</h2>
                <StatusIcon
                    className={`book-card__status ${book.read ? 'book-card__status--read' : 'book-card__status--unread'}`}
                    aria-hidden='true'
                />
            </header>

            <dl className='book-card__meta'>
                <BookCardMetaRow
                    icon={User}
                    value={book.author}
                />
                <BookCardMetaRow
                    icon={Calendar}
                    value={published}
                />
            </dl>
        </article>
    );
};
