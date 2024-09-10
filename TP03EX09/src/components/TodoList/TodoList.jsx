import TodoListStyle from './TodoList.module.css';
import PropTypes from 'prop-types';
import img from './img/Complited.svg';

export default function TodoList({ taskList, isDone, markAsDone }) {
    return (
        
            <div className={TodoListStyle.Container}>
                {taskList.map((task, index) => (
                    <div key={index} className={TodoListStyle.Todoitem}>
                        <h1 className={TodoListStyle.Title}>{task.title}</h1>
                        <div className={TodoListStyle.ContainerDescription}>
                            <p className={TodoListStyle.Description}>{task.description}</p>
                        </div>

                        {isDone[index] ? (
                            <div className={TodoListStyle.IsDoneContainer}>
                                <p className={TodoListStyle.IsDone}>Tarefa concluída</p>
                                <img className={TodoListStyle.ImgVerified} src={img} alt="Tarefa Completada" title="Tarefa Completada" />
                            </div>
                        ) : (
                            <button className={TodoListStyle.IsntDone} onClick={() => markAsDone(index)}>
                                Concluir
                            </button>
                        )}
                    </div>
                ))}
            </div>
        
    );
}

TodoList.propTypes = {
    taskList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
    isDone: PropTypes.arrayOf(PropTypes.bool).isRequired,
    markAsDone: PropTypes.func.isRequired,
};
