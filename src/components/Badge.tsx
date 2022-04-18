import React from 'react';
import styles from '../styles/app.scss';

import Profile from '../public/profile.png';

const Badge = () => {
	return (
		<div className={styles.badge}>
			<img src={Profile} className={styles.avatar} alt={'profile'} />
			<div className={styles.divider} />
			<a
				href={'https://github.com/sofshant/react-boilerplate'}
				target={'_blank'}
				className={styles.github}
			>
				check me out on github!
			</a>
		</div>
	);
};

export default Badge;
