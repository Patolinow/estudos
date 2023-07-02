import { HTMLAttributes, PropsWithChildren } from 'react';
import './Backdrop.css';

const Backdrop = ({children, onClick}:PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
    <div onClick={onClick} className="Backdrop">{children}</div>
);

export default Backdrop;