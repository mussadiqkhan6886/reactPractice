import { useEffect } from "react"
import { useState } from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return(() => {
            clearInterval(intervalId)
        })
    })

    function formatTime(){
        const hour = time.getHours()
        const min = time.getMinutes()
        const sec = time.getSeconds()
        const amPm = hour > 12 ? 'PM' : "AM"

        let perfectHour = hour % 12 || 12

        return `${padZero(perfectHour)} : ${padZero(min)} : ${padZero(sec)} ${amPm}`
    }

    function padZero(number){
       return number > 10 ? '' + number : '0' + number
    }

    return (
        <>
            <h1>Time in React</h1>
            <h2>{formatTime()}</h2>
        </>
    )

    
}
export default DigitalClock