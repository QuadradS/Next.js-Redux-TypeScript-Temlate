import React from 'react';
import styles from './index.scss';

interface IHeaderProps {
    title: string
}

const Header = (props: IHeaderProps) => {
    return (
        <div className={styles.header}>
            {props.title}
        </div>
    )
}

export default Header