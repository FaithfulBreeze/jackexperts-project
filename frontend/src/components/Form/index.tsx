import { PropsWithChildren, useState } from "react"
import { StyledDiv } from "./style"
import { useForm, FieldValues } from "react-hook-form"

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

    const onSubmit = async (data: FieldValues) => {
        if(data.confirm_password){
            if(data.password != data.confirm_password){
                setPasswordAlert(true)
                return setTimeout(() => setPasswordAlert(false), 3000)
            }
        }
        await fetch(`http://localhost:3030${props.action}`, { method: "POST", body: JSON.stringify(data), headers:{'Content-Type': 'application/json'} })
        if(data.confirm_password){
            userData.email = data.email
            userData.password = data.password
            setKeyInputWindow(true)
        }
    }

    const confirmKey = async (data: FieldValues) => {
        await fetch(`http://localhost:3030${props.action}/${data.key || ''}`, { method: "POST", body: JSON.stringify(userData), headers:{'Content-Type': 'application/json'} })
        document.location.href = '/login'
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