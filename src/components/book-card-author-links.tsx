import { Fragment } from 'react';
import type { ReactElement } from 'react';
import { buildAuthorGoogleSearchUrl } from '../google-search-url';
import { BookCardSearchLink } from './book-card-search-link';

interface BookCardAuthorLinksProps {
    authors: string[];
}

export const BookCardAuthorLinks = ({ authors }: BookCardAuthorLinksProps): ReactElement => (
    <>
        {authors.map((author, index) => (
            <Fragment key={author}>
                {index > 0 ? ' & ' : ''}
                <BookCardSearchLink href={buildAuthorGoogleSearchUrl(author)}>
                    {author}
                </BookCardSearchLink>
            </Fragment>
        ))}
    </>
);
