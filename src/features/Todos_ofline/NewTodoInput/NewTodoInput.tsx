import React, { useState } from 'react';
import { addItem } from '../../../stores/Effector.store'

import styles from '../../../styles/offlineTodo/styles.module.scss';

const NewTodoInput: React.FC = () => {
	const [textValue, setText] = useState('');
	
	const onclickInput = () => {
		if (textValue.length > 0) {
			const valueText = textValue.trim();
			addItem(valueText); // Добавление новой задачи
			setText('');
		}
	};
	
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onclickInput();
		}
	};
	
	return (
		<section className={styles.section}>
			<input
				type="text"
				placeholder="Enter new todo"
				value={textValue}
				onChange={(e) => setText(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button onClick={onclickInput} className={styles.buttonInput}>
				Add
			</button>
		</section>
	);
};

export default NewTodoInput;
