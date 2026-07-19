export const hasBookAdditionalInfo = (info: string | undefined): info is string =>
    typeof info === 'string' && info.length > 0;
