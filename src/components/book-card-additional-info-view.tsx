import { ArrowLeft } from 'lucide-react';
import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';
import { BookCardActionButton } from './book-card-action-button';

interface BookCardAdditionalInfoViewProps {
    additionalInfo: string;
    onBack: () => void;
    titleLanguage: TitleLanguage;
}

const BACK_LABELS: Record<TitleLanguage, string> = {
    en: 'Back to book details',
    fi: 'Takaisin kirjan tietoihin',
};

export const BookCardAdditionalInfoView = ({
    additionalInfo,
    onBack,
    titleLanguage,
}: BookCardAdditionalInfoViewProps): ReactElement => (
    <article className='book-card'>
        <header className='book-card__header'>
            <BookCardActionButton
                ariaLabel={BACK_LABELS[titleLanguage]}
                icon={ArrowLeft}
                onClick={onBack}
            />
        </header>

        <p className='book-card__additional-info'>{additionalInfo}</p>
    </article>
);
