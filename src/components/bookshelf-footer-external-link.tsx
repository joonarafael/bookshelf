import { ArrowRight } from 'lucide-react';
import type { ReactElement, ReactNode } from 'react';

interface BookshelfFooterExternalLinkProps {
    children: ReactNode;
    href: string;
}

export const BookshelfFooterExternalLink = ({
    children,
    href,
}: BookshelfFooterExternalLinkProps): ReactElement => (
    <a
        className='bookshelf__raw-link'
        href={href}
        rel='noreferrer'
        target='_blank'
    >
        {children}
        <ArrowRight
            className='bookshelf__raw-link-icon'
            aria-hidden='true'
        />
    </a>
);
