import { StyledTaskCard } from "./style"
import { PropsWithChildren, useState } from "react"


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
    
    const [showMoreInfo, setShowMoreInfo] = useState(false)

    const deleteTask = async () => {
        await fetch(`${backendUrl}/tasks/delete?id=${props.id}`, { method: 'DELETE', credentials: 'include' })
        props.setTaskCardListing()
    }
    
    const updateTask = async () => {
        await fetch(`${backendUrl}/tasks/update?id=${props.id}`, { method: 'PUT', credentials: 'include' })
        props.setTaskCardListing()
    }

    const actualDate = Date.parse(String(new Date()).split('GMT-')[0].concat('GMT-0000'))
    const deadLineDate = Date.parse(props.compleationDeadline)

    const secondsLeft = (deadLineDate - actualDate)/1000
    const daysLeft = secondsLeft/86400
    const hoursLeft = (daysLeft - Math.trunc(daysLeft))*24
    const minutesLeft = (hoursLeft - Math.trunc(hoursLeft))*60

    const fullDate = `
        ${Math.trunc(daysLeft)} days,
        ${Math.trunc(hoursLeft)} hours,
        ${Math.trunc(minutesLeft)} minutes,
        ${Math.trunc((minutesLeft - Math.trunc(minutesLeft))*60)} seconds
    `
    const [timeLeft, setTimeLeft] = useState(fullDate)

    const interval = setInterval(() => {
        if(showMoreInfo){
            clearInterval(interval)
            if(!props.done) setTimeLeft(fullDate)
        }
    }, 2000)

    return (
        <StyledTaskCard 
            style={{
                borderColor: secondsLeft <= 0 && !props.done ? 'red' : 'orange', 
                filter: props.done ? 'grayscale(1)' : 'none',
                textDecoration: props.done ? 'line-through' : 'none'
            }}>
            <div>
                <div>
                    <input className="checkbox" type="checkbox" checked={props.done} />
                </div>
                <div>
                    <div>
                        <h2>
                            {props.title}
                        </h2>
                        {showMoreInfo && <div>
                            <p>Description: {props.description}</p>
                            <p id="timeout">Timeout: {timeLeft}</p>
                        </div>}
                        <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{!showMoreInfo ? 'More' : 'Less'} info</button>
                        <button onClick={() => updateTask()}>Update task</button>
                        <button onClick={() => deleteTask()}>Delete task</button>
                    </div>
                </div>
            </div>
        </StyledTaskCard>
    )
}

export default TaskCard