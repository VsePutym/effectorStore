import AsyncInput from '../Input/AsyncInput'
import AsyncList from '../List/AsyncList'
import styled from '../../../styles/Async/styles.module.scss'

const AsyncTodo = () => {

	return (
		<section className={styled.sectionAsync}>
			<h1>Todos Async</h1>
			<AsyncInput  />
			<AsyncList />
		</section>
	)
}

export default AsyncTodo