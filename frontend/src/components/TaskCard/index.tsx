import { StyledTaskCard } from "./style"
import { PropsWithChildren } from "react"


export interface TaskCardProps{
    setTaskCardListing: Function,
    title: string,
    description: string,
    compleationDeadline: string,
    done: boolean,
    id: string
}

function TaskCard(props: PropsWithChildren<TaskCardProps>){
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const deleteTask = async () => {
        await fetch(`${backendUrl}/tasks/delete?id=${props.id}`, { method: 'DELETE', credentials: 'include' })
        props.setTaskCardListing()
    }
    const updateTask = async () => {
        await fetch(`${backendUrl}/tasks/update?id=${props.id}`, { method: 'PUT', credentials: 'include' })
        props.setTaskCardListing()
    }

    return (
        <StyledTaskCard>
            <div className="desktop" id="headers-container">
                <h2>{props.title}</h2>
                <h3>Compleation Deadline:</h3>
            </div>
            <div className="desktop" id="info-container">
                <div id="left-side">
                    <p id="content">{props.description}</p>
                    <p>Completed: {props.done.toString()}</p>
                </div>
                <div id="right-side">
                    <h4>{
                        props.compleationDeadline
                        .split('T')[0]
                        .split('-')
                        .reverse()
                        .join('/')
                    }</h4>
                    <h4>{
                        props.compleationDeadline
                        .split('T')[1]
                        .split('.')[0]    
                    }</h4>
                </div>
            </div>
            <div className="desktop" id="controls-container">
                <button onClick={updateTask}>Set task status</button>
                <button onClick={deleteTask}>Remove Task</button>
            </div>
            <div className="mobile" id="top-container">
                <h2>{props.title}</h2>
                <p id="content">{props.description}</p>
                <p>Completed: {props.done.toString()}</p>
            </div>
            <div className="mobile" id="bottom-container">
                <h3>Compleation Deadline:</h3>
                <h4>{
                    props.compleationDeadline
                    .split('T')[0]
                    .split('-')
                    .reverse()
                    .join('/')
                }</h4>
                <h4>{
                    props.compleationDeadline
                    .split('T')[1]
                    .split('.')[0]    
                }</h4>
            </div>
            <div className="mobile" id="controls-container">
                <button onClick={updateTask}>Set task status</button>
                <button onClick={deleteTask}>Remove Task</button>
            </div>
        </StyledTaskCard>
    )
}

export default TaskCard