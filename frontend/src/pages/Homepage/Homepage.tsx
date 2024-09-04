import { StyledHomepage } from "./style"
import main_page_image from '../../assets/main-page-image.jpg'
import main_page_shape_svg from '../../assets/shape-01.svg'
import Header from "../../components/Header"

function Homepage() {
  return (
    <>
      <Header links={[
        {
          title: "Login",
          href: "/login"
        },
        {
          title: "Signup",
          href: "/signup"
        }
      ]} />
      <StyledHomepage>
        <div id="main-container">
          <div id="image-container">
            <img src={main_page_image} alt="Main image" />
          </div>
          <div id="content-container">
            <img src={main_page_shape_svg} alt="Background" />
            <div>
              <h1>To Do <br /> Manager</h1>
              <p>The easiest way to manage your daily tasks!</p>
              <a href="/login"><button>Login page</button></a>
            </div>
          </div>
        </div>
      </StyledHomepage>
    </>
  )
}

export default Homepage
