import React from 'react'
import { useState } from "react"
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctor apoitment',
        day: 'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text: 'University',
        day: 'Feb 8th at 4:30pm',
        reminder:false
    },
    {
        id:3,
        text: 'Sport',
        day: 'Feb 15th at 7:30am',
        reminder:true
    },
    {
        id:4,
        text: 'Food Shopping',
        day: 'Feb 22th at 2:30pm',
        reminder:false
    },
  ])

  //add task 
  const addTask = ( task ) => {
    const id = Math.floor(Math.random() * 15) + 1;
    console.log(id)
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task 
  const deleteTask = (id) => {
    setTasks((tasks.filter((task) => task.id !== id)))
  }

  //toggle delete 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {
        ...task, reminder : !task.reminder
      } : task
    ))
  }

  return (
    <div className="container">
        <Header
        onAdd={() => setShowAddTask(!showAddTask) }
        showAdd={showAddTask}/>
        {showAddTask && <AddTask
        onAdd={addTask} />}
        {tasks.length > 0 ? 
        (<Tasks 
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder} />
        ) : (
        'No tasks to show'
        )}
    </div>
  );
}

export default App;
