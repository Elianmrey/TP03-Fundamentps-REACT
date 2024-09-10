import TodoListStyle from './TodoList.module.css'
import PropTypes from 'prop-types'

export default function TodoList({ tasks })
{ 
    return (
        <div className={TodoListStyle.Container}>
            {tasks.map((task, index) => (
            
                <div key={index} className={TodoListStyle.Todoitem}>
                    <h1 className={TodoListStyle.Title}>{task.title}</h1>
                    <div className={TodoListStyle.ContainerDescription}>
                        <p className={TodoListStyle.Description}>{task.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}