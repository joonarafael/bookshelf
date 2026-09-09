import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';

const SITE_TITLE: Record<TitleLanguage, string> = {
    en: 'Joona Kettunen - Reading List',
    fi: 'Joona Kettunen - Lukulista',
};

export const BookshelfTitle = ({
    titleLanguage,
}: {
    titleLanguage: TitleLanguage;
}): ReactElement => <h1 className='bookshelf__title'>{SITE_TITLE[titleLanguage]}</h1>;
