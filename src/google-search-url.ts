import type { Book } from './books';
import type { TitleLanguage } from './sort-types';

const GOOGLE_SEARCH_HREF = 'https://www.google.com/search';
const UNKNOWN_VALUE = '-';

const BOOK_SEARCH_QUALIFIERS: Record<TitleLanguage, string> = {
    en: 'book',
    fi: 'kirja',
};

const quoteSearchTerm = (term: string): string => `"${term}"`;

const getDefaultBookSearchQuery = (book: Book, titleLanguage: TitleLanguage): string => {
    const title = titleLanguage === 'en' ? book.title_en : book.title_fi;
    const quotedTitle = quoteSearchTerm(title);

    if (book.author === UNKNOWN_VALUE) {
        return quotedTitle;
    }

    return `${quoteSearchTerm(book.author)} ${quotedTitle}`;
};

const getBookSearchQuery = (book: Book, titleLanguage: TitleLanguage): string => {
    const override = titleLanguage === 'en' ? book.google_search_en : book.google_search_fi;
    const qualifier = BOOK_SEARCH_QUALIFIERS[titleLanguage];

    if (typeof override === 'string') {
        return `${override} ${qualifier}`;
    }

    return `${getDefaultBookSearchQuery(book, titleLanguage)} ${qualifier}`;
};

const buildGoogleSearchUrl = (query: string): string => {
    const searchParams = new URLSearchParams();
    searchParams.set('q', query.trim());

    return `${GOOGLE_SEARCH_HREF}?${searchParams.toString()}`;
};

const buildBookGoogleSearchUrl = (book: Book, titleLanguage: TitleLanguage): string =>
    buildGoogleSearchUrl(getBookSearchQuery(book, titleLanguage));

const buildAuthorGoogleSearchUrl = (author: string): string =>
    buildGoogleSearchUrl(quoteSearchTerm(author));

export { buildAuthorGoogleSearchUrl, buildBookGoogleSearchUrl };
