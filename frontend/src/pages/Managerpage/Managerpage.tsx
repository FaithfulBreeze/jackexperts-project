import Header from "../../components/Header"
import { StyledManagerpage } from "./style"

function Managerpage() {
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
          
        </StyledManagerpage>
      </>
    )
  }
  
  export default Managerpage

  