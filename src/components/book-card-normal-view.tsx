import { Calendar, User } from 'lucide-react';
import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { TitleLanguage } from '../sort-types';
import { hasBookAdditionalInfo } from '../has-book-additional-info';
import { BookCardHeaderActions } from './book-card-header-actions';
import { BookCardMetaRow } from './book-card-meta-row';

interface BookCardNormalViewProps {
    book: Book;
    onShowAdditionalInfo: () => void;
    title: string;
    titleLanguage: TitleLanguage;
}

export const BookCardNormalView = ({
    book,
    onShowAdditionalInfo,
    title,
    titleLanguage,
}: BookCardNormalViewProps): ReactElement => {
    const published = book.published === '-' ? '—' : String(book.published);
    const additionalInfo = book.additional_info?.[titleLanguage];
    const hasAdditionalInfo = hasBookAdditionalInfo(additionalInfo);

    return (
        <article className={`book-card${book.read ? ' book-card--read' : ''}`}>
            <header className='book-card__header'>
                <div
                    className='book-card__title-container'
                    title={title}
                >
                    <h2 className='book-card__title'>{title}</h2>
                </div>
                <BookCardHeaderActions
                    hasAdditionalInfo={hasAdditionalInfo}
                    read={book.read}
                    titleLanguage={titleLanguage}
                    onShowAdditionalInfo={onShowAdditionalInfo}
                />
            </header>

            <dl className='book-card__meta'>
                <BookCardMetaRow
                    icon={User}
                    titleLanguage={titleLanguage}
                    type='author'
                    value={book.author}
                />
                <BookCardMetaRow
                    icon={Calendar}
                    titleLanguage={titleLanguage}
                    type='published'
                    value={published}
                />
            </dl>
        </article>
    );
};
