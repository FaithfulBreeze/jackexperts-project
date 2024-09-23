import Header from "../../components/Header"
import { StyledManagerpage } from "./style"
import TaskCardListing from "../../components/TaskCardListing"

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
        <TaskCardListing />
      </StyledManagerpage>
    </>
  )
}

export default Managerpage

  