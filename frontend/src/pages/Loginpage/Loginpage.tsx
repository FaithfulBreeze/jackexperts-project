import Form from "../../components/Form"
import Header from "../../components/Header"
import { StyledLoginpage } from "./style"

function Loginpage() {
  return (
    <>
      <Header links={[
        {
          title: "Homepage",
          href: "/"
        },
        {
          title: "Signup",
          href: "/signup"
        }
      ]} />
      <StyledLoginpage>
        <Form 
          title="Welcome back!"
          action="/login"
          button="Login"
        />
      </StyledLoginpage>
    </>
  )
}

export default Loginpage
