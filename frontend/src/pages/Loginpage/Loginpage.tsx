import Form from "../../components/Form"
import Header from "../../components/Header"

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
            href: "Signup"
          }
        ]} />
        <Form 
          title="Welcome back!"
          action="localhost:3030/logUser"
        />
      </>
    )
  }
  
  export default Loginpage
  