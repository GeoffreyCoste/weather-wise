interface ButtonInterface {
    children: React.ReactNode;
    id?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    style: string;
    onClick?: () => void;
}

export default function Button({children, id, type, style, onClick}: ButtonInterface) {
    return (
        <button type={type} id={id} className={style} onClick={onClick}>
            {children}
        </button>
    )
}