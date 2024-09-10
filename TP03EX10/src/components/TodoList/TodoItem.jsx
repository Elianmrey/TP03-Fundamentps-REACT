import TodoListStyle from './TodoList.module.css';
import PropTypes from 'prop-types';
import img from './img/Complited.svg';

export default function TodoList({ taskList, isDone, markAsDone, onTaskDelete }) {
    return (
        <div className={TodoListStyle.ItemContainer}>
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
                                <img className={TodoListStyle.ImgbutonIcon} src={img} alt="Tarefa Completada" title="Tarefa Completada" /> Concluir
                            </button>
                        )}

                        <div className={TodoListStyle.DeleteTask}>
                            <button onClick={() => onTaskDelete(task)}>
                                <svg className={TodoListStyle.DeleteTaskIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                </svg> Apagar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
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
    onTaskDelete: PropTypes.func.isRequired,
};
