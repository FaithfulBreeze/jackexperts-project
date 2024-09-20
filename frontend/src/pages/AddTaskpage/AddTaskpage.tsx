import { FieldValues, useForm } from "react-hook-form"
import Header from "../../components/Header"
import { StyledAddTaskpage } from "./style"

function AddTaskpage() {

  const { register, handleSubmit } = useForm() 

  const backendUrl = 'https://ideal-space-dollop-gvxxq6pqjq5h95jj-3030.app.github.dev'

  const sendForm = async (data: FieldValues) => {
    fetch(`${backendUrl}/tasks/create`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  }

  return (
    <>
      <Header links={[
        {
          title: "Tasks",
          href: "/manager"
        },
        {
          title: "Settings",
          href: "/settings"
        }
      ]} />
      <StyledAddTaskpage>

        <form action={`${backendUrl}/tasks/create`}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" {...register('title')} />
          </div>
          <div>
            <label htmlFor="compleationDeadline">Description: </label>
            <input type="text" id="description" {...register('description')} />
          </div>
          <div>
            <label htmlFor="compleationDeadline">Compleation Deadline: </label>
            <input type="datetime-local" id="compleationDeadline" {...register('compleationDeadline')} />
          </div>
          <button type="button" onClick={() => handleSubmit(sendForm)()}>Add Task</button>
        </form>
        
      </StyledAddTaskpage>
    </>
  )
}

export default AddTaskpage

