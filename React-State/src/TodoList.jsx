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
        <div className="todo-list">
            <div>
                <input
                    placeholder="Add a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addNewTask}>Add</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button type="button" onClick={() => updateAllTasks({ done: true })}>
                    Mark All Done
                </button>
                <button type="button" onClick={() => updateAllTasks({ done: false })} style={{ marginLeft: '8px' }}>
                    Reset All
                </button>
            </div>

            <hr />
            <h4>Tasks Today</h4>
            <p>
                Done Tasks: {doneCount} / {tasks.length}
            </p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: '8px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => updateTask(task.id, { done: !task.done })}
                            />
                            {editingTaskId === task.id ? (
                                <>
                                    <input
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                    />
                                    <button type="button" onClick={saveEdit}>
                                        Save
                                    </button>
                                    <button type="button" onClick={cancelEdit}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                                        {task.text}
                                    </span>
                                    <button type="button" onClick={() => startEditing(task)}>
                                        Edit
                                    </button>
                                    <button type="button" onClick={() => removeTask(task.id)}>
                                        Remove
                                    </button>
                                </>
                            )}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
