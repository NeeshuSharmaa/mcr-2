import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useHabitContext } from "../context/HabitContextProvider";
import { useLocation } from "react-router";

export default function Habit({id, name, repeat, goal, date, time, setShowModal}) {
  const timeUnit=time>12?"PM":"AM";
  const [showHabitInfo, setShowHabitInfo]=useState(false);

  const {dispatch}=useHabitContext();
  const {pathname}=useLocation();

  return (
    <div className="habit">
      <div className="habit-header">

      <h3 onClick={()=>setShowHabitInfo((prev)=>!prev)}>{name}</h3>
      <div className="action-btns">
        <FontAwesomeIcon icon={faTrash} onClick={()=>dispatch({type:"delete", payload:id})}/>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{dispatch({type:"edit", payload:id}); setShowModal(true)}}/>
       {pathname ==="/" ? <span onClick={()=>dispatch({type:"archive", payload:id})}>Archive</span>:<span onClick={()=>dispatch({type:"unarchive", payload:id})}>Unarchive</span>}

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
