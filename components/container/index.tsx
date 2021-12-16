import React from 'react';
import styles from './index.scss';

interface IContainerProps {
    children: React.ReactChild[] | React.ReactChild
}

const Container = (props: IContainerProps) => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
export default Container