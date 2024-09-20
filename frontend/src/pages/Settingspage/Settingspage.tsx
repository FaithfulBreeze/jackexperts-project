import Header from "../../components/Header"
import { StyledSettingspage } from "./style"

function Settingspage() {
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
        
      </StyledSettingspage>
    </>
  )
}

export default Settingspage

  