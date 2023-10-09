const redux = require("redux")

const reducer = (state = {counter: 5 }, action) => {

  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return {counter: state.counter - 1}
  }
  return state
};

const store = redux.createStore(reducer);

const reducerSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState.counter);
};

store.subscribe(reducerSubscriber);
store.dispatch({type: 'decrement'})
store.dispatch({type: 'decrement'})



