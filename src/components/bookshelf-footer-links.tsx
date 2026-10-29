import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';
import { BookshelfFooterExternalLink } from './bookshelf-footer-external-link';

const BOOKS_YAML_HREF = `${import.meta.env.BASE_URL}books.yaml`;
const GITHUB_HREF = 'https://github.com/joonarafael/bookshelf';
const GITHUB_LINK_LABEL = 'GitHub';

const RAW_LINK_LABELS: Record<TitleLanguage, string> = {
    en: 'View raw',
    fi: 'Näytä alkuperäinen',
};

const RAW_LINK_LANGUAGES: TitleLanguage[] = ['en', 'fi'];

export const BookshelfFooterLinks = (): ReactElement => (
    <div className='bookshelf__footer-links'>
        <BookshelfFooterExternalLink href={BOOKS_YAML_HREF}>
            {RAW_LINK_LANGUAGES.map((language) => (
                <span
                    key={language}
                    className='bookshelf__raw-link-label'
                    lang={language}
                >
                    {RAW_LINK_LABELS[language]}
                </span>
            ))}
        </BookshelfFooterExternalLink>
        <BookshelfFooterExternalLink href={GITHUB_HREF}>
            <span className='bookshelf__raw-link-label'>{GITHUB_LINK_LABEL}</span>
        </BookshelfFooterExternalLink>
    </div>
);
