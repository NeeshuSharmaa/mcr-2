
import "./components.css";
import { useHabitContext } from "../context/HabitContextProvider";

export default function AddHabitModal({ showModal, setShowModal }) {
  const { dispatch } = useHabitContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, repeat, goal, time, date } = e.target.elements;

    dispatch({
      type: "add",
      payload: {
        name: name.value,
        repeat: repeat.value,
        goal: goal.value,
        time: time.value,
        date: date.value,
      },
    });
    setShowModal(false);
  };
  if (!showModal) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-inner-container">
          <h2>Add New Habit</h2>
          <form className="add-habit-form" onSubmit={handleSubmit}>
            <div className="column-flex">
              <label htmlFor="name">Habit Name</label>
              <input
                type="text"
                placeholder="Habit Name"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="row-flex">
              <div className="column-flex">
                <label htmlFor="repeat">Repeat</label>
                <select id="repeat" name="repeat">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="column-flex">
                <label htmlFor="goal">Goal </label>

                <input
                  type="number"
                  id="goal"
                  name="goal"
                  placeholder="repitition/day"
                />
              </div>
            </div>
            <div className="row-flex">
              <div className="column-flex">
                <label htmlFor="time">Time of Day</label>
                <input type="time" id="time" name="time" />
              </div>
              <div className="column-flex">
                <label htmlFor="date">Start Date</label>
                <input type="date" id="date" name="date" />
              </div>
            </div>
            <div className="btns">
              <span onClick={() => setShowModal(false)}>Discard</span>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
