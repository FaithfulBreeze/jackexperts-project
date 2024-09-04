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
                <button type="button" onClick={() => {
                    fetch('https://ideal-space-dollop-gvxxq6pqjq5h95jj-3030.app.github.dev/logUser', { method: "POST"})
                }}>testar</button>
            </form>
        </StyledDiv>
    )
}

export default Form