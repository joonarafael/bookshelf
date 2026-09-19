import type { ReactElement } from 'react';

interface BookCardTitleProps {
    title: string;
}

export const BookCardTitle = ({ title }: BookCardTitleProps): ReactElement => (
    <div
        className='book-card__title-container'
        title={title}
    >
        <h2 className='book-card__title'>{title}</h2>
    </div>
);
