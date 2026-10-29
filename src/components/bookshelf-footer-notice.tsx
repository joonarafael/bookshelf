import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';

const COOKIE_NOTICE: Record<TitleLanguage, string> = {
    en: 'This website uses no cookies whatsoever.',
    fi: 'Tämä sivusto ei käytä evästeitä lainkaan.',
};

const NOTICE_LANGUAGES: TitleLanguage[] = ['en', 'fi'];

export const BookshelfFooterNotice = (): ReactElement => (
    <p
        className='bookshelf__footer-notice'
        role='note'
    >
        {NOTICE_LANGUAGES.map((language) => (
            <span
                key={language}
                className='bookshelf__footer-notice-line'
                lang={language}
            >
                {COOKIE_NOTICE[language]}
            </span>
        ))}
    </p>
);
