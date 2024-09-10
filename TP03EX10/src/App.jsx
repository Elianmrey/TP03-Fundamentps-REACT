import TodoList from './components/TodoList/TodoItem.jsx';
import { useState } from 'react';
import TodoListStyle from './App.module.css';

export default function App() {
  const [taskList, setTaskList] = useState([
    { title: "Comprar mantimentos", description: "Comprar frutas, vegetais e pão no supermercado." },
    { title: "Completar relatório do projeto", description: "Finalizar o rascunho final do relatório do projeto até amanhã." }
  ]);

  const [isDone, setIsDone] = useState(Array(taskList.length).fill(false));

  const [formData, setFormData] = useState({ title: "", description: "" });

  function markAsDone(index) {
    const newIsDone = [...isDone];
    newIsDone[index] = true;
    setIsDone(newIsDone);
  }

  function addTask() {
    if (formData.title.trim() === "" || formData.description.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setTaskList(prevTasks => [...prevTasks, formData]);
    setIsDone(prevIsDone => [...prevIsDone, false]);
    setFormData({ title: "", description: "" });
  }

  function updateFormdat(e) {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  function deleteTask(taskToDelete) {
    const newTaskList = taskList.filter(task => task !== taskToDelete);
    const newIsDone = isDone.filter((_, index) => taskList[index] !== taskToDelete);
    
    setTaskList(newTaskList);
    setIsDone(newIsDone);
  }

  return (
    <div className={TodoListStyle.SuperContainer}>
      <div className={TodoListStyle.FormContainer}>
        <form className={TodoListStyle.FormItem} onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}>
          <div className={TodoListStyle.InputItem}>
            <label htmlFor="title">Título da Tarefa</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              value={formData.title}
              onChange={updateFormdat}
            />
          </div>
          <div className={TodoListStyle.InputItem}>
            <label htmlFor="description">Descrição da Tarefa</label>
            <input
              type="text"
              name="description"
              placeholder="Descreva sua tarefa aqui"
              value={formData.description}
              onChange={updateFormdat}
            />
          </div>
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </div>

      <TodoList taskList={taskList} isDone={isDone} markAsDone={markAsDone} onTaskDelete={deleteTask} />
    </div>
  );
}
