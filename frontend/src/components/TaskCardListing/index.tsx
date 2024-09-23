import { StyledTaskCardListing } from "./style"
import TaskCard, { TaskCardProps } from "../TaskCard"
import { useEffect, useState } from "react"

function TaskCardListing(){

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {

    const response = await fetch(`${backendUrl}/tasks`, { credentials: 'include' })
    let userTasks = await response.json()

    userTasks = userTasks.map((task: TaskCardProps, key: number) => {
      return <TaskCard
        key={key}
        setTaskCardListing={loadTasks} 
        title={task.title} 
        description={task.description} 
        compleationDeadline={task.compleationDeadline} 
        done={task.done} 
        id={task.id} 
      />
    })
    setTasks(userTasks)
  }
  
  useEffect(() => {loadTasks()}, [])

    return (
        <StyledTaskCardListing>
          {tasks.length > 0 ? tasks : <h2>No tasks yet!</h2>}
        </StyledTaskCardListing>
    )
}

export default TaskCardListing