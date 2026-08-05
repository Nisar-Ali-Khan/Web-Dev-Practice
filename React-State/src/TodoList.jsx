import { useState } from 'react'

export default function TodoList() {
    const [tasks, setTasks] = useState(['Sample Task'])
    const [newTask, setNewTask] = useState('')

    const addNewTask = () => {
        if (newTask.trim() === '') return
        setTasks([...tasks, newTask.trim()])
        setNewTask('')
    }

    const removeTask = (taskIndex) => {
        setTasks(tasks.filter((_, index) => index !== taskIndex))
    }

    return (
        <div className="todo-list">
            <input
                placeholder="Add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addNewTask}>Add</button>

            <hr />
            <h4>Tasks Today</h4>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button type="button" onClick={() => removeTask(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
