import { FieldValues, useForm } from "react-hook-form"
import Header from "../../components/Header"
import { StyledAddTaskpage } from "./style"
import { useNavigate } from "react-router-dom"

function AddTaskpage() {

  const { register, handleSubmit } = useForm() 
  const navigate = useNavigate()

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const sendForm = async (data: FieldValues) => {
    await fetch(`${backendUrl}/tasks/create`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    navigate('/manager')
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
            <input type="text" id="title" {...register('title',  { required: true })} />
          </div>
          <div>
            <label htmlFor="compleationDeadline">Description: </label>
            <input type="text" id="description" {...register('description',  { required: true })} />
          </div>
          <div>
            <label htmlFor="compleationDeadline">Compleation Deadline: </label>
            <input type="datetime-local" id="compleationDeadline" {...register('compleationDeadline',  { required: true })} />
          </div>
          <button type="button" onClick={() => handleSubmit(sendForm)()}>Add Task</button>
        </form>
        
      </StyledAddTaskpage>
    </>
  )
}

export default AddTaskpage

