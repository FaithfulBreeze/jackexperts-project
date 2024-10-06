import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import { StyledSettingspage } from "./style"

function Settingspage() {

  const navigate = useNavigate()
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const deleteUser = async () => {
    await fetch(`${backendUrl}/user/delete`, { method: "DELETE", credentials: 'include' })
    navigate('/')
  }

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
        <div>
          <button>Change password</button>
          <button onClick={() => navigate('/')}>Logout</button>
          <button onClick={() => deleteUser()}>Delete user</button>
        </div>
      </StyledSettingspage>
    </>
  )
}

export default Settingspage

  