import TodoListStyle from './TodoList.module.css'
import PropTypes from 'prop-types'
import {useState } from  'react'
import img from './img/Complited.svg'

export default function TodoList({ tasks })
{ 
    const [isDone, setIsDone] = useState(Array(tasks.length).fill(false));

    function markAsDone(index)
    {
        const newIsDone = [...isDone]
        newIsDone[index] = true
        setIsDone(newIsDone)
     }

    return (
        <div className={TodoListStyle.Container}>
            {tasks.map((task, index) => (
            
                <div key={index} className={TodoListStyle.Todoitem}>
                    
                    <h1 className={TodoListStyle.Title}>{task.title}</h1>
                    <div className={TodoListStyle.ContainerDescription}>
                        <p className={TodoListStyle.Description}>{task.description}</p>
                    </div>

                    {isDone[index] === true ? (
                        <div className={TodoListStyle.IsDoneContainer}>
                        
                            <p key={index} className={TodoListStyle.IsDone}> Tarefa concluida </p>
                            <img className={TodoListStyle.ImgVerified} src={img} alt='Foto Tarefa Completada' title='Foto Tarefa Completada' />
                        
                        </div>
                    ) : (<button className={TodoListStyle.IsntDone} onClick={() => (markAsDone(index))}>Concluir</button>)}
                </div>
            ))}
        </div>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}