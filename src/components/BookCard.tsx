import { BookOpen, BookOpenCheck, Calendar, User } from 'lucide-react';
import type { Book } from '../books';
import type { TitleLanguage } from './SortControls';

interface BookCardProps {
    book: Book;
    titleLanguage: TitleLanguage;
}

export function BookCard({ book, titleLanguage }: BookCardProps) {
    const StatusIcon = book.read ? BookOpenCheck : BookOpen;
    const title = titleLanguage === 'en' ? book.title_en : book.title_fi;

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
                <div className='book-card__meta-row'>
                    <dt>
                        <User aria-hidden='true' />
                    </dt>
                    <dd>{book.author}</dd>
                </div>

                <div className='book-card__meta-row'>
                    <dt>
                        <Calendar aria-hidden='true' />
                    </dt>
                    <dd>{book.published === '-' ? '—' : book.published}</dd>
                </div>
            </dl>
        </article>
    );
}
