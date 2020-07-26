function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
      return state;
  }

  function setState(newState: S) {
      state = newState;
  }

  return { getState, setState };
}

const newState = useState<string>();

newState.setState('123');
console.log(newState.getState())