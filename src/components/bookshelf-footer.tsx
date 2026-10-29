import type { ReactElement } from 'react';
import { BookshelfFooterLinks } from './bookshelf-footer-links';
import { BookshelfFooterNotice } from './bookshelf-footer-notice';

export const BookshelfFooter = (): ReactElement => (
    <footer className='bookshelf__footer'>
        <BookshelfFooterLinks />
        <BookshelfFooterNotice />
    </footer>
);
