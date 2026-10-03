import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';
import { splitAuthors } from '../split-authors';
import { BookCardAuthorLinks } from './book-card-author-links';
import { BookCardMetaTerm } from './book-card-meta-term';

interface BookCardMetaRowProps {
    icon: LucideIcon;
    value: string;
    type: 'author' | 'published';
    titleLanguage: TitleLanguage;
}

const AUTHOR_LABELS: Record<TitleLanguage, string> = {
    en: 'Book written by <author>',
    fi: 'Kirjoittanut <author>',
};

const PUBLISHED_LABELS: Record<TitleLanguage, string> = {
    en: 'Originally published in <year>',
    fi: 'Alkuperäisteos julkaistu vuonna <year>',
};

export const BookCardMetaRow = ({
    icon,
    value,
    type,
    titleLanguage,
}: BookCardMetaRowProps): ReactElement => {
    const authors = type === 'author' ? splitAuthors(value) : [];

    return (
        <div
            className='book-card__meta-row'
            title={
                type === 'author'
                    ? AUTHOR_LABELS[titleLanguage].replace('<author>', value)
                    : PUBLISHED_LABELS[titleLanguage].replace('<year>', value)
            }
        >
            <BookCardMetaTerm icon={icon} />
            <dd>{authors.length > 0 ? <BookCardAuthorLinks authors={authors} /> : value}</dd>
        </div>
    );
};
