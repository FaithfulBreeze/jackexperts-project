import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { StyledManagerpage } from "./style"

interface TaskInterface{
  title: string,
  description: string,
  done: boolean,
  compleationDeadline: Date,
  userId: string
}

function Managerpage() {

  const backendUrl = 'https://ideal-space-dollop-gvxxq6pqjq5h95jj-3030.app.github.dev'
  const [tasks, setTasks] = useState([])
  const loadTasks = async () => {
    const response = await fetch(`${backendUrl}/tasks`, { credentials: 'include' })
    let userTasks = await response.json()
    userTasks = userTasks.map((task: TaskInterface, key: number) => {
      return (
        <li key={key}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.done ? 'Completed!' : 'Not done yet!'}</p>
          <p>{String(task.compleationDeadline)}</p>
        </li>
      )
    })
    setTasks(userTasks)
  }
  useEffect(() => {loadTasks()}, [])

  return (
    <>
      <Header links={[
        {
          title: "Add Task",
          href: "/create"
        },
        {
          title: "Settings",
          href: "/settings"
        }
      ]} />
      <StyledManagerpage>
        <main>
          <ul>
            {tasks.length > 0 ? tasks : <h2>No tasks yet!</h2>}
          </ul>
        </main>
      </StyledManagerpage>
    </>
  )
}

export default Managerpage

  