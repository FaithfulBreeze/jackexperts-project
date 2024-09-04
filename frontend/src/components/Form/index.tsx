import { PropsWithChildren } from "react"
import { StyledDiv } from "./style"

interface FormProps{
    title: string,
    action: string,
}

function Form(props: PropsWithChildren<FormProps>){

    return (
        <StyledDiv>
            <form security="true" action={props.action} method="post">
                <h2>{props.title}</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <button type="submit">Login</button>
            </form>
        </StyledDiv>
    )
}

export default Form