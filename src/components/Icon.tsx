interface IconProps {
    id: string;
    className?: string;
}

export function Icon({ id, className }: IconProps) {
    return (
        <svg
            className={className}
            aria-hidden='true'
        >
            <use href={`/icons.svg#${id}`} />
        </svg>
    );
}
