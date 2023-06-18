import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Habit({id, name, repeat, goal, date, time}) {
  const timeUnit=time>12?"PM":"AM";
  const [showHabitInfo, setShowHabitInfo]=useState(false);
  return (
    <div className="habit">
      <div className="habit-header">

      <h3 onClick={()=>setShowHabitInfo((prev)=>!prev)}>{name}</h3>
      <div className="action-btns">
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faPenToSquare} />
        <span>Archive</span>

      </div>
      
      </div>
     {showHabitInfo &&  <div className="habit-info">
        <p><span>Repeat-</span> <span>{repeat}</span></p>
        <p><span>Goal-</span> <span>{goal} times/day</span></p>
        <p><span>Start Date-</span> <span>{date}</span></p>
        <p><span>When-</span> <span>{time} {timeUnit}</span></p>
      </div>}

    </div>
  )
}
