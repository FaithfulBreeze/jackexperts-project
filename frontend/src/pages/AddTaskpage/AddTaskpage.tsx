import Header from "../../components/Header"
import { StyledAddTaskpage } from "./style"

function AddTaskpage() {
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
          
        </StyledAddTaskpage>
      </>
    )
  }
  
  export default AddTaskpage

  