import type { LucideIcon } from 'lucide-react';
import type { ReactElement } from 'react';

interface BookCardMetaTermProps {
    icon: LucideIcon;
}

export const BookCardMetaTerm = ({ icon: Icon }: BookCardMetaTermProps): ReactElement => (
    <dt>
        <Icon aria-hidden='true' />
    </dt>
);
