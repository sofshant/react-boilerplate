import React from 'react';
import styles from '../styles/app.scss';

const Home = () => {
	return (
		<div className={styles.index}>
			<div className={styles.hey}>👋</div>
			<div className={styles.text}>
				Start your awesome new project by editing{' '}
				<span className={styles.code}>src/pages/Home.tsx</span>
			</div>
		</div>
	);
};

export default Home;
