import { useUnit } from 'effector-react';
import React, { useEffect } from 'react';
import { itemsStore, fetchItems, removeItem, toggleItem } from '../../../stores/EffectorAsync.store';
import styles from '../../../styles/Async/styles.module.scss';

const AsyncList = () => {
	const items = useUnit(itemsStore);
	

	useEffect(() => {
		fetchItems();
	}, []);

	
	return (
		<section>
			<ul>
				{items.length === 0 ? (
					'Пока этот список пустой, внесите ваше первое задание'
				) : (
					items.map((item) => (
						<li className={styles.li} key={item.id}>
							<span className={styles.title}>{item.title}</span>
							<input
								className={styles.input}
								type="checkbox"
								checked={item.completed}
								onChange={() => toggleItem(item.id)}
							/>
							<button
								className={styles.button}
								onClick={() => removeItem(item.id)}
							>
								Delete
							</button>
						</li>
					))
				)}
			</ul>
		</section>
	);
};

export default AsyncList;
