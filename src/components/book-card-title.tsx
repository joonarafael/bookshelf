import type { ReactElement } from 'react';
import { BookCardSearchLink } from './book-card-search-link';

interface BookCardTitleProps {
    href: string;
    title: string;
}

export const BookCardTitle = ({ href, title }: BookCardTitleProps): ReactElement => (
    <div
        className='book-card__title-container'
        title={title}
    >
        <h2 className='book-card__title'>
            <BookCardSearchLink href={href}>{title}</BookCardSearchLink>
        </h2>
    </div>
);
