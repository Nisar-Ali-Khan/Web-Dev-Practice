import { useState } from 'react'

function createTask(text) {
    return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        text,
        done: false,
    }
}

export default function TodoList() {
    const [tasks, setTasks] = useState([createTask('Sample Task')])
    const [newTask, setNewTask] = useState('')
    const [editingTaskId, setEditingTaskId] = useState(null)
    const [editingText, setEditingText] = useState('')

    const updateTask = (taskId, updates) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, ...updates } : task,
            ),
        )
    }

    const updateAllTasks = (updates) => {
        setTasks((currentTasks) => currentTasks.map((task) => ({ ...task, ...updates })))
    }

    const addNewTask = () => {
        if (newTask.trim() === '') return
        setTasks((currentTasks) => [...currentTasks, createTask(newTask.trim())])
        setNewTask('')
    }

    const removeTask = (taskId) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
    }

    const startEditing = (task) => {
        setEditingTaskId(task.id)
        setEditingText(task.text)
    }

    const saveEdit = () => {
        if (!editingTaskId) return
        const trimmedText = editingText.trim()
        if (trimmedText === '') return
        updateTask(editingTaskId, { text: trimmedText })
        setEditingTaskId(null)
        setEditingText('')
    }

    const cancelEdit = () => {
        setEditingTaskId(null)
        setEditingText('')
    }

    const doneCount = tasks.filter((task) => task.done).length

    return (
        <div className="todo-list app-container">
            <div className="todo-input-group">
                <input
                    className="todo-input"
                    placeholder="Add a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn" onClick={addNewTask}>Add</button>
            </div>

            <div className="todo-controls">
                <button type="button" className="btn secondary" onClick={() => updateAllTasks({ done: true })}>
                    Mark All Done
                </button>
                <button type="button" className="btn" onClick={() => updateAllTasks({ done: false })}>
                    Reset All
                </button>
            </div>

            <hr />
            <h4>Tasks Today</h4>
            <p>
                Done Tasks: {doneCount} / {tasks.length}
            </p>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
                        <label className="task-row">
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => updateTask(task.id, { done: !task.done })}
                            />

                            {editingTaskId === task.id ? (
                                <>
                                    <input
                                        className="task-edit-input"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                    />
                                    <div className="actions">
                                        <button type="button" className="btn" onClick={saveEdit}>
                                            Save
                                        </button>
                                        <button type="button" className="btn secondary" onClick={cancelEdit}>
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <span className="task-text">{task.text}</span>
                                    <div className="actions">
                                        <button type="button" className="btn" onClick={() => startEditing(task)}>
                                            Edit
                                        </button>
                                        <button type="button" className="btn secondary" onClick={() => removeTask(task.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </>
                            )}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
