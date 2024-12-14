import ListTodos from '../ListTodo/ListTodos'
import NewTodoInput from '../NewTodoInput/NewTodoInput'

const WrapperTodo = () => {
	
	return (
		<section>
			<h1>Todos local</h1>
			<NewTodoInput />
			<ListTodos />
		</section>
	)
}

export default WrapperTodo