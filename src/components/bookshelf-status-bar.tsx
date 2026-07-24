import type { ReactElement } from 'react';
import type { ReadFilter, SortDirection, SortField, TitleLanguage } from '../sort-types';

interface BookshelfStatusBarProps {
    direction: SortDirection;
    field: SortField;
    readFilter: ReadFilter;
    titleLanguage: TitleLanguage;
}

const SORT_FIELD_LABELS: Record<TitleLanguage, Record<SortField, string>> = {
    en: {
        author: 'author',
        published: 'publish year',
        title: 'title',
    },
    fi: {
        author: 'tekijän',
        published: 'julkaisuvuoden',
        title: 'otsikon',
    },
};

const DIRECTION_LABELS: Record<TitleLanguage, Record<SortDirection, string>> = {
    en: {
        asc: 'ascending',
        desc: 'descending',
    },
    fi: {
        asc: 'nouseva',
        desc: 'laskeva',
    },
};

const TITLE_LANGUAGE_LABELS: Record<TitleLanguage, Record<TitleLanguage, string>> = {
    en: {
        en: 'English',
        fi: 'Finnish',
    },
    fi: {
        en: 'englanniksi',
        fi: 'suomeksi',
    },
};

const READ_FILTER_LABELS: Record<TitleLanguage, Record<ReadFilter, string>> = {
    en: {
        all: 'both read and unread',
        read: 'read only',
        unread: 'unread only',
    },
    fi: {
        all: 'sekä luetut että lukemattomat',
        read: 'vain luetut',
        unread: 'vain lukemattomat',
    },
};

const STATUS_TEMPLATES: Record<TitleLanguage, string> = {
    en: 'Books ordered by {sortField} ({direction}); titles shown in {titleLanguage}; listing {readFilter} books.',
    fi: 'Kirjat järjestetty {sortField} mukaan ({direction}); otsikot näytetään {titleLanguage}; listataan {readFilter} kirjat.',
};

const buildStatusText = ({
    direction,
    field,
    language,
    readFilter,
    titleLanguage,
}: BookshelfStatusBarProps & { language: TitleLanguage }): string =>
    STATUS_TEMPLATES[language]
        .replace('{sortField}', SORT_FIELD_LABELS[language][field])
        .replace('{direction}', DIRECTION_LABELS[language][direction])
        .replace('{titleLanguage}', TITLE_LANGUAGE_LABELS[language][titleLanguage])
        .replace('{readFilter}', READ_FILTER_LABELS[language][readFilter]);

export const BookshelfStatusBar = ({
    direction,
    field,
    readFilter,
    titleLanguage,
}: BookshelfStatusBarProps): ReactElement => {
    const englishStatus = buildStatusText({
        direction,
        field,
        language: 'en',
        readFilter,
        titleLanguage,
    });
    const finnishStatus = buildStatusText({
        direction,
        field,
        language: 'fi',
        readFilter,
        titleLanguage,
    });

    return (
        <output
            className='bookshelf__status-bar'
            aria-live='polite'
        >
            <span className='bookshelf__status-bar-line'>{englishStatus}</span>
            <span className='bookshelf__status-bar-line'>{finnishStatus}</span>
        </output>
    );
};
