import Form from "../../components/Form"
import Header from "../../components/Header"
import { StyledSignuppage } from "./style"

function Signuppage() {
  return (
    <>
      <Header links={[
        {
          title: "Homepage",
          href: "/"
        },
        {
          title: "Login",
          href: "/login"
        }
      ]} />
      <StyledSignuppage>
        <Form 
          title="Welcome!"
          action="/signup"
          button="Signup"
          confirmPassword
        />
      </StyledSignuppage>
    </>
  )
}

export default Signuppage
