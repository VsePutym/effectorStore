import React, { useState } from 'react'
import { addItem } from '../../../stores/EffectorAsync.store'
import style from '../../../styles/Async/styles.module.scss'

const AsyncInput = () => {
	const [textValue, setText] = useState('')
	
	const AddButton = () => {
		if (textValue.trim()) {
			addItem(textValue.trim())
			setText('')
		}
	}
	
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			AddButton()
		}
	}
	
	return (
		<section className={style.section}>
			<input
				type="text"
				value={textValue}
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter new task..."
				onKeyPress={handleKeyPress}
			/>
			<button className={style.buttonInput} onClick={AddButton}>Add</button>
		</section>
	)
}

export default AsyncInput
