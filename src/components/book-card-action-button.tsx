import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';

interface BookCardActionButtonProps {
    ariaLabel: string;
    icon: LucideIcon;
    onClick: () => void;
}

export const BookCardActionButton = ({
    ariaLabel,
    icon: Icon,
    onClick,
}: BookCardActionButtonProps): ReactElement => (
    <button
        type='button'
        className='book-card__action'
        aria-label={ariaLabel}
        onClick={onClick}
    >
        <Icon
            className='book-card__action-icon'
            aria-hidden='true'
        />
    </button>
);
