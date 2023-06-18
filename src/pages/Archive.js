import React from "react";
import { useHabitContext } from "../context/HabitContextProvider";
import Habit from "../components/Habit";
import { Link } from "react-router-dom";

export default function Archive() {
  const { habitsState } = useHabitContext();
  return (
    <div className="archive">
      {habitsState.archivedHabits.length ? (
        habitsState.archivedHabits.map((habit) => (
          <Habit key={habit.id} {...habit} />
        ))
      ) : (
        <div className="empty-habits-list">
          You don't have any archived habits yet! ( ˘︹˘ )
          <Link to="/">
            <button>Go back to Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
