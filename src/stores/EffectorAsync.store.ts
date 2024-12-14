import { createStore, createEvent, createEffect } from 'effector';

export const fetchItems = createEffect(async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
	const data = await response.json();
	return data.map((item: any) => ({
		id: item.id,
		title: item.title,
		completed: item.completed,
	}));
});

export const addItem = createEvent<string>();
export const removeItem = createEvent<number>();
export const toggleItem = createEvent<number>();

// Хранилище
export const itemsStore = createStore<{ id: number; title: string; completed: boolean }[]>([])
	.on(addItem, (state, title) => [
		...state,
		{ id: state.length + 1, title, completed: false },
	])
	.on(removeItem, (state, id) => state.filter((item) => item.id !== id))
	.on(toggleItem, (state, id) =>
		state.map((item) =>
			item.id === id ? { ...item, completed: !item.completed } : item
		)
	)
	.on(fetchItems.doneData, (state, data) => data);  // Обновляем состояние после успешного запроса
