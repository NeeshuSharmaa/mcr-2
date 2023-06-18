import React, { useState } from "react";
import AddHabitModal from "../components/AddHabitModal";
import { useHabitContext } from "../context/HabitContextProvider";
import Habit from "../components/Habit";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { habitsState } = useHabitContext();
  const { pathname } = useLocation();
  return (
    <div className="home">
      {pathname === "/" && (
        <div className="hero">
          <h1>Welcome to Habit Trackio</h1>
          <p>
            Build Better Habits, Build a Better You Start Tracking your habits
            today!
          </p>
          <div className="hero-action-btns">
            <button onClick={() => setShowModal(true)}>Add Habits</button>
            <Link to="/archive">Visit Archive Habits</Link>
          </div>
        </div>
      )}

      {habitsState.habits.length ? (
        <div className="habits-list">
          {habitsState?.habits?.map((habit) => (
            <Habit key={habit.id} {...habit} />
          ))}
        </div>
      ) : (
        <div className="empty-habits-list">
          You don't have any habits that you added here yet! ( ˘︹˘ )
        </div>
      )}

      <AddHabitModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
