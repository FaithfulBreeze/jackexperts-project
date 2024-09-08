import Header from "../../components/Header"

function Managerpage() {
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
      </>
    )
  }
  
  export default Managerpage

  