const INITIAL_STATE = {
  currTabIndex: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'screen':
      return {
        ...state,
        currRoute: action.currentRouteName,
        prevRoute: action.prevRoute,
      };
    default:
      return { ...state };
  }
};
