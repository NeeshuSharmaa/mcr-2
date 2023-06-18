import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
const HabitContext = createContext();

export function useHabitContext() {
  return useContext(HabitContext);
}

export default function HabitContextProvider({ children }) {
  const initialState = {
    habits: [],
    archivedHabits: [],
  };

  const reducerFxn = (state, { type, payload }) => {
    switch (type) {
      case "add": {
        return {
          ...state,
          habits: [
            ...state.habits,
            {
              id: uuid(),
              name: payload.name,
              repeat: payload.repeat,
              goal: payload.repeat,
              time: payload.time,
              date: payload.date,
            },
          ],
        };
      }
      case "edit": {
        return {};
      }
      case "archive": {
        return {};
      }
      case "delete": {
        return {};
      }
      default: {
        return { habits: [], archivedHabits: [] };
      }
    }
  };

  const [habitsState, dispatch] = useReducer(reducerFxn, initialState);

  const values = { habitsState, dispatch };
  return (
    <HabitContext.Provider value={values}>{children}</HabitContext.Provider>
  );
}
