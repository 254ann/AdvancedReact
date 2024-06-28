/**
a useReducer is a hook that accepts a reduer function
const [state, dispathFunction] = useReducer(reducerFunc, initalArgs, inits)

reducer: The reducer function that specifies how the state gets updated.
 It must be pure, should take the state and action as arguments,
 function reducer(state, action) {}

  and should return the next state. 
  State and action can be of any types.

initialArg: The value from which the initial state is calculated. 
It can be a value of any type.
 How the initial state is calculated from it depends on the next init argument.

optional init: The initializer function that should return the initial state.
 If it’s not specified, the initial state is set to initialArg.
  Otherwise, the initial state is set to the result of calling init(initialArg).

  A useReducer returns an array of exactly two values

  userReducer => [currentState, dispatchFunction - updates current state and causes re-renders]

  The dispatch function returned by useReducer lets you update the state
   to a different value and trigger a re-render. 
  You need to pass the action as the only argument to the dispatch function:
  - do not contain return values

  function handleClick() {
  dispatch({ type: 'incremented_age' });

  action:  an action is usually an object with a type property identifying it and, 
  optionally, other properties with additional information.

  function reducer(state, action ) {
    if(action.type === 'sum') {
        return {
            number : state.number + 1
        }
    }
  }

  //the whole point of a useReducer is to remove state logic outiside event handlers
  //useState is is similar to useReducer but needs tonbe binded with event handler
  onChange = {() => setInputVals(event.target.value)}


  function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

 */