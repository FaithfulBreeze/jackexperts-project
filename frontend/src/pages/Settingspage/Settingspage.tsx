import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import { StyledSettingspage } from "./style"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

function Settingspage() {

  const [changePasswordMenu, setChangePasswordMenu] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm()
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const deleteUser = async () => {
    await fetch(`${backendUrl}/user/delete`, { method: "DELETE", credentials: 'include' })
    navigate('/')
  }
  const logoutUser = async () => {
    localStorage.removeItem('logged')
    navigate('/')
  }

  const updatePassword = async (data: FieldValues) => {
    if(data.password != data.confirm_password){
      setPasswordAlert(true)
      setTimeout(() => setPasswordAlert(false), 3000)
    }else{
      await fetch(`${backendUrl}/user/update`, { 
        method: "PUT", 
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include', 
        body: JSON.stringify({ password: data.password }, 
        )})
      navigate('/')
    }
  }

  const settingsMenu = <>
    <div>
      <button onClick={() => setChangePasswordMenu(true)}>Change password</button>
      <button onClick={() => logoutUser()}>Logout</button>
      <button onClick={() => deleteUser()}>Delete user</button>
    </div>
  </>

  const passwordMenu = <>
    <div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" {...register('password', { required: true, minLength: 8 })}/>
        {errors?.password?.type === 'required' && <p>Password is required.</p>}
        {errors?.password?.type === 'minLength' && <p>Password must have at least 8 characters.</p>}
        {passwordAlert && <p>Passwords does not match!</p>}
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm password: </label>
        <input type="password" {...register('confirm_password', { required: true, minLength: 8 })}/>
        {errors?.confirm_password?.type === 'required' && <p>Confirm password is required.</p>}
        {errors?.confirm_password?.type === 'minLength' && <p>Confirm password must have at least 8 characters.</p>}
        {passwordAlert && <p>Passwords does not match!</p>}
      </div>
      <button onClick={() => handleSubmit(updatePassword)()}>Change password</button>
    </div>
  </>

  return (
    <>
      <Header links={[
        {
          title: "Tasks",
          href: "/manager"
        },
        {
          title: "Add Task",
          href: "/create"
        }
      ]} />
      <StyledSettingspage>
        {!changePasswordMenu ? settingsMenu : passwordMenu}
      </StyledSettingspage>
    </>
  )
}

export default Settingspage

  