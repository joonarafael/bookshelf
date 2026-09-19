import { BookOpen, BookOpenCheck, Info } from 'lucide-react';
import type { ReactElement } from 'react';
import type { TitleLanguage } from '../sort-types';
import { BookCardActionButton } from './book-card-action-button';

interface BookCardHeaderActionsProps {
    hasAdditionalInfo: boolean;
    onShowAdditionalInfo: () => void;
    read: boolean;
    titleLanguage: TitleLanguage;
}

const INFO_LABELS: Record<TitleLanguage, string> = {
    en: 'Show additional information',
    fi: 'Näytä lisätiedot',
};

const STATUS_READ_LABELS: Record<TitleLanguage, string> = {
    en: 'Read',
    fi: 'Luettu',
};

const STATUS_UNREAD_LABELS: Record<TitleLanguage, string> = {
    en: 'Unread',
    fi: 'Lukematon',
};

export const BookCardHeaderActions = ({
    hasAdditionalInfo,
    onShowAdditionalInfo,
    read,
    titleLanguage,
}: BookCardHeaderActionsProps): ReactElement => {
    const StatusIcon = read ? BookOpenCheck : BookOpen;

    return (
        <div className='book-card__actions'>
            {hasAdditionalInfo && (
                <BookCardActionButton
                    ariaLabel={INFO_LABELS[titleLanguage]}
                    icon={Info}
                    onClick={onShowAdditionalInfo}
                />
            )}
            <div
                className='book-card__status-container'
                title={
                    read ? STATUS_READ_LABELS[titleLanguage] : STATUS_UNREAD_LABELS[titleLanguage]
                }
            >
                <StatusIcon
                    className={`book-card__status ${read ? 'book-card__status--read' : 'book-card__status--unread'}`}
                    aria-hidden='true'
                />
            </div>
        </div>
    );
};
