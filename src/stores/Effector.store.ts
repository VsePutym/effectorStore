import { createStore, createEvent, createEffect } from 'effector';

export const addItem = createEvent<string>();
export const removeItem = createEvent<number>();
export const toggleItem = createEvent<number>();
export const setFilter = createEvent<'all' | 'completed' | 'noCompleted'>();


export const itemsStore = createStore<{ id: number; title: string; completed: boolean }[]>([])
	.on(addItem, (state, title) => [
		...state,
		{ id: state.length + 1, title, completed: false },
	])
	.on(removeItem, (state, id) => state.filter((todo) => todo.id !== id))
	.on(toggleItem, (state, id) =>
		state.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
	);

export const fetchItems = createEffect(async () => {
	// Имитация загрузки данных
	return new Promise<{ id: number; title: string; completed: boolean }[]>((resolve) =>
		setTimeout(() => resolve([{ id: 1, title: 'Test todo', completed: false }]), 1000)
	);
});

export {}; // Пустой экспорт, чтобы файл стал модулем
