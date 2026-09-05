import { ArrowRight } from 'lucide-react';
import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';

const BOOKS_YAML_HREF = `${import.meta.env.BASE_URL}books.yaml`;

const RAW_LINK_LABELS: Record<TitleLanguage, string> = {
    en: 'View raw',
    fi: 'Näytä alkuperäinen',
};

export const BookshelfFooter = (): ReactElement => (
    <footer className='bookshelf__footer'>
        <a
            className='bookshelf__raw-link'
            href={BOOKS_YAML_HREF}
            rel='noreferrer'
            target='_blank'
        >
            <span
                className='bookshelf__raw-link-label'
                lang='en'
            >
                {RAW_LINK_LABELS.en}
            </span>
            <span
                className='bookshelf__raw-link-label'
                lang='fi'
            >
                {RAW_LINK_LABELS.fi}
            </span>
            <ArrowRight
                className='bookshelf__raw-link-icon'
                aria-hidden='true'
            />
        </a>
    </footer>
);
