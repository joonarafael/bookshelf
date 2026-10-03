export interface Book {
    title_en: string;
    title_fi: string;
    author: string;
    published: number | '-';
    read: boolean;
    additional_info?: {
        en: string;
        fi: string;
    };
    google_search_en?: string;
    google_search_fi?: string;
}
