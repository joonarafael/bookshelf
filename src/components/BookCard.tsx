import type { Book } from '../books';
import { Icon } from './Icon';

interface BookCardProps {
    book: Book;
}

export function BookCard({ book }: BookCardProps) {
    return (
        <article className='book-card'>
            <header className='book-card__header'>
                <h2 className='book-card__title'>{book.title_en}</h2>
                <Icon
                    id={book.read ? 'read-icon' : 'unread-icon'}
                    className='book-card__status'
                />
            </header>

            <dl className='book-card__meta'>
                <div className='book-card__meta-row'>
                    <dt>
                        <Icon id='author-icon' />
                    </dt>
                    <dd>{book.author}</dd>
                </div>

                <div className='book-card__meta-row'>
                    <dt>
                        <Icon id='calendar-icon' />
                    </dt>
                    <dd>{book.published === '-' ? '—' : book.published}</dd>
                </div>
            </dl>
        </article>
    );
}
