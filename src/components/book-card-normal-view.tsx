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
        <article className='book-card'>
            <header className='book-card__header'>
                <h2 className='book-card__title'>{title}</h2>
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
