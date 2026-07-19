import { useState } from 'react';
import type { ReactElement } from 'react';
import type { Book } from '../books';
import type { TitleLanguage } from '../sort-types';
import { hasBookAdditionalInfo } from '../has-book-additional-info';
import { BookCardAdditionalInfoView } from './book-card-additional-info-view';
import { BookCardNormalView } from './book-card-normal-view';

interface BookCardProps {
    book: Book;
    titleLanguage: TitleLanguage;
}

export const BookCard = ({ book, titleLanguage }: BookCardProps): ReactElement => {
    const [showingAdditionalInfo, setShowingAdditionalInfo] = useState(false);
    const title = titleLanguage === 'en' ? book.title_en : book.title_fi;
    const additionalInfo = book.additional_info?.[titleLanguage];
    const canShowAdditionalInfo = hasBookAdditionalInfo(additionalInfo);

    if (showingAdditionalInfo && canShowAdditionalInfo) {
        return (
            <BookCardAdditionalInfoView
                additionalInfo={additionalInfo}
                titleLanguage={titleLanguage}
                onBack={() => {
                    setShowingAdditionalInfo(false);
                }}
            />
        );
    }

    return (
        <BookCardNormalView
            book={book}
            title={title}
            titleLanguage={titleLanguage}
            onShowAdditionalInfo={() => {
                setShowingAdditionalInfo(true);
            }}
        />
    );
};
