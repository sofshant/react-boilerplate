import React from 'react';
import styles from '../../styles/notFound.scss';

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<div className={styles.status}>404</div>
			<div className={styles.text}>We couldn't find that page!</div>
		</div>
	);
};

export default NotFound;
