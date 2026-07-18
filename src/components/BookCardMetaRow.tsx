import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';
import { BookCardMetaTerm } from './BookCardMetaTerm';

interface BookCardMetaRowProps {
    icon: LucideIcon;
    value: string;
}

export const BookCardMetaRow = ({ icon, value }: BookCardMetaRowProps): ReactElement => (
    <div className='book-card__meta-row'>
        <BookCardMetaTerm icon={icon} />
        <dd>{value}</dd>
    </div>
);
