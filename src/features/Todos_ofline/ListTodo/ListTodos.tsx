import React, { useState, useEffect } from 'react';
import {useUnit } from 'effector-react'
import { itemsStore, fetchItems, removeItem, setFilter, toggleItem } from '../../../stores/Effector.store'
import styles from '../../../styles/offlineTodo/styles.module.scss';

const ListTodos: React.FC = () => {
	const todos = useUnit(itemsStore);
	const [filter, setLocalFilter] = useState<'all' | 'completed' | 'noCompleted'>('all');
	
	useEffect(() => {
		fetchItems();
	}, []);
	
	const handleFilterChange = (filterType: 'all' | 'completed' | 'noCompleted') => {
		setLocalFilter(filterType);
		setFilter(filterType === 'all' ? 'all' : filterType);
	};
	
	const filteredTodos = todos.filter((todo) => {
		if (filter === 'completed') return todo.completed;
		if (filter === 'noCompleted') return !todo.completed;
		return true;
	});
	
	return (
		<section>
			<ul>
				{filteredTodos.length === 0 ? (
					<p>Пока этот список пустой, внесите ваше первое задание</p>
				) : (
					filteredTodos.map((todo) => (
						<li className={styles.li} key={todo.id}>
							<span className={styles.title}>{todo.title}</span>
							<input
								className={styles.input}
								type="checkbox"
								checked={todo.completed}
								onChange={() => toggleItem(todo.id)} // Обработка изменения состояния задачи
							/>
							<button
								className={styles.button}
								onClick={() => removeItem(todo.id)} // Удаление задачи
							>
								Delete
							</button>
						</li>
					))
				)}
			</ul>
			<div className={styles.wrapperFilter}>
				<p>Filter</p>
				<button onClick={() => handleFilterChange('completed')}>Completed</button>
				<button onClick={() => handleFilterChange('noCompleted')}>No Completed</button>
				<button onClick={() => handleFilterChange('all')}>All</button>
			</div>
		</section>
	);
};

export default ListTodos;
