import TodoListStyle from './TodoList.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import img from './img/Complited.svg';

export default function TodoList({ tasks }) {
    const [isDone, setIsDone] = useState(Array(tasks.length).fill(false));
    const [taskList, setTaskList] = useState(tasks);

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    function markAsDone(index) {
        const newIsDone = [...isDone];
        newIsDone[index] = true;
        setIsDone(newIsDone);
    }

    function addTask(incomingTask) {
        setTaskList(prevTasks => [incomingTask,...prevTasks ]);
        setIsDone(prevIsDone => [false,...prevIsDone]);
    }

    function updateFormdat(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    function verifyAndSendNewTask(e) {
        e.preventDefault();

        if (formData.title.trim() === "" || formData.description.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
     
        addTask(formData);
        setFormData({ title: "", description: "" });
    }

    return (
        <div className={TodoListStyle.SuperContainer}>
            <div className={TodoListStyle.FormContainer}>
                <form className={TodoListStyle.FormItem} onSubmit={verifyAndSendNewTask}>
                    <div className={TodoListStyle.InputItem}>
                    <label htmlFor="title">Adicione o Titulo da sua tarefa</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Título da tarefa"
                        value={formData.title}
                        onChange={updateFormdat}
                        />
                    </div>
                    <div className={TodoListStyle.InputItem}>
                        <label htmlFor="title">Adicione a descrção da sua tarefa</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Descreva sua tarefa aqui"
                        value={formData.description}
                        onChange={updateFormdat}
                        />
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </div>

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
        </div>
    );
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
};
