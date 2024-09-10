import TodoListStyle from './TodoList.module.css';
import PropTypes from 'prop-types';
import img from './img/Complited.svg';
import { useState } from 'react';

export default function TodoList({ taskList, isDone, markAsDone, onTaskDelete }) {
    const [editIndex, setEditIndex] = useState(null); // Armazena o índice da tarefa sendo editada
    const [editTask, setEditTask] = useState({ title: "", description: "" }); // Armazena o estado da tarefa em edição

    const handleEditClick = (index, task) => {
        setEditIndex(index);
        setEditTask(task);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSaveEdit = (index) => {
        taskList[index] = editTask;
        setEditIndex(null); // ####b  Fecha o modo de edição após salvar
    };

    const handleDeleteTask = (task, index) => {
        onTaskDelete(task);
        if (editIndex === index) {
            setEditIndex(null); // #####Fecha o modo de edição quando a tarefa sendo editada for deletada
        }
    };

    return (
        <div className={TodoListStyle.ItemContainer}>
            <div className={TodoListStyle.Container}>
                {taskList.map((task, index) => (
                    <div key={index} className={TodoListStyle.Todoitem}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    name="title"
                                    value={editTask.title}
                                    onChange={handleEditChange}
                                    className={TodoListStyle.EditInput}
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={editTask.description}
                                    onChange={handleEditChange}
                                    className={TodoListStyle.EditInput}
                                />
                                <button onClick={() => handleSaveEdit(index)} className={TodoListStyle.SaveButton}>
                                    <svg className={TodoListStyle.SaveButtonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                                    </svg> Salvar
                                </button>
                            </>
                        ) : (
                            <>
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
                                <button onClick={() => handleEditClick(index, task)} className={TodoListStyle.EditButton}>
                                    <svg className={TodoListStyle.EditTaskIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                    </svg> Editar
                                </button>
                            </>
                        )}

                        <div className={TodoListStyle.DeleteTask}>
                            <button onClick={() => handleDeleteTask(task, index)}>
                                <svg className={TodoListStyle.DeleteTaskIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304-288 0z" />
                                </svg> Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

TodoList.propTypes = {
    taskList: PropTypes.array.isRequired,
    isDone: PropTypes.array.isRequired,
    markAsDone: PropTypes.func.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
};
