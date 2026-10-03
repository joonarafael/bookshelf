import type { ReactElement, ReactNode } from 'react';

interface BookCardSearchLinkProps {
    children: ReactNode;
    href: string;
}

export const BookCardSearchLink = ({ children, href }: BookCardSearchLinkProps): ReactElement => (
    <a
        className='book-card__search-link'
        href={href}
        rel='noreferrer'
        target='_blank'
    >
        {children}
    </a>
);
