import { createStore } from "redux";

function reducer(state = { counter: 0, max: Infinity, step: 1 }, action) {
  switch (action.type) {
    case "increment":
      state.counter = state.counter + state.step;
      state.counter =
        state.counter > state.max ? state.counter - state.step : state.counter;
      return { ...state };
    case "decrement":
      state.counter = state.counter - state.step;
      return { ...state };
    case "reset":
      state.counter = 0;
      state.step = 1;
      state.max = Infinity;
      return { ...state };
    case "step5":
      state.step = 5;
      return { ...state };
    case "step10":
      state.step = 10;
      return { ...state };
    case "step15":
      state.step = 15;
      return { ...state };
    case "15":
      state.max = 15;
      return { ...state };
    case "100":
      state.max = 100;
      return { ...state };
    case "200":
      state.max = 200;
      return { ...state };

    default:
      return { ...state };
  }
}
let store = createStore(reducer);

export default store;
