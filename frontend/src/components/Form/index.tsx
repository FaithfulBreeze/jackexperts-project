import { PropsWithChildren, useContext, useState } from "react"
import { StyledDiv } from "./style"
import { useForm, FieldValues } from "react-hook-form"
import { LoggedContext } from "../../App"
import { useNavigate } from "react-router-dom"

interface FormProps{
    title: string,
    action: string,
    button: string
    confirmPassword?: boolean
}

interface UserInterface{
    email?: string,
    password?: string
}

const userData: UserInterface = {
    
}

function Form(props: PropsWithChildren<FormProps>){

    const [passwordAlert, setPasswordAlert] = useState(false)
    const [keyInputWindow, setKeyInputWindow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const loggedContext = useContext(LoggedContext)
    const navigate = useNavigate()
    const { setLoggedUser } = loggedContext as { setLoggedUser: Function }

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const onSubmit = async (data: FieldValues) => {
        userData.email = data.email
        userData.password = data.password
        const response = await fetch(`${backendUrl}${props.action}`, { method: "POST", credentials: 'include', body: JSON.stringify(userData), headers:{'Content-Type': 'application/json'} })
        const parsedResponse = await response.json()
        if(props.action == '/signup'){
            if(data.password != data.confirm_password){
                setPasswordAlert(true)
                return setTimeout(() => setPasswordAlert(false), 3000)
            }
            if(response.status >= 200 && response.status <= 299){
                setKeyInputWindow(true)
            }else{
                alert(parsedResponse.message)
            }
        }else{
            if(response.status >= 200 && response.status <= 299){
                setLoggedUser(true)
                return navigate('/manager')
            }
            alert(parsedResponse.message)
        }
    }

    const confirmKey = async (data: FieldValues) => {
        const response = await fetch(`${backendUrl}${props.action}/${data.key || ''}`, { method: "POST", credentials: 'include', body: JSON.stringify(userData), headers:{'Content-Type': 'application/json'} })
        const parsedResponse = await response.json()
        if(response.status >= 200 && response.status <= 299){
            return navigate('/login')
        }
        alert(parsedResponse.message)
    }

    return (
        <StyledDiv>
            <form security="true" method="post">
                {!keyInputWindow && <><h2>{props.title}</h2>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}/>
                    {errors?.email?.type === 'pattern' && <p>Email pattern not valid.</p>}
                    {errors?.email?.type === 'required' && <p>Email is required.</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" id="password" {...register('password', { required: true, minLength: 8 })}/>
                    {errors?.password?.type === 'required' && <p>Password is required.</p>}
                    {errors?.password?.type === 'minLength' && <p>Password must have at least 8 characters.</p>}
                    {passwordAlert && <p>Passwords does not match.</p>}
                </div>
                {props.confirmPassword && <div>
                    <label htmlFor="confirm_password">Confirm password</label> <br />
                    <input type="password" id="confirm_password" {...register('confirm_password', { required: true, minLength: 8 })}/>
                    {errors?.confirm_password?.type === 'required' && <p>Confirm password is required.</p>}
                    {errors?.confirm_password?.type === 'minLength' && <p>Confirm password must have at least 8 characters.</p>}
                    {passwordAlert && <p>Passwords does not match.</p>}
                </div>}
                <button type="button" onClick={() => handleSubmit(onSubmit)()}>{props.button}</button></>}
                {keyInputWindow && <>
                    <div>
                        <label htmlFor="keyInput">Paste the key here</label> <br />
                        <input type="text" {...register('key')}/>
                    </div>

                <button type="button" onClick={() => handleSubmit(confirmKey)()}>Confirm</button>
                </>}
            </form>
        </StyledDiv>
    )
}

export default Form