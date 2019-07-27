const ChangeTabStatus = (currState) => {
  return (dispatch) => {
    const routeLenght = currState.routes.length;
    const currentRouteName = currState.routes[routeLenght - 1].routeName;
    let prevRoute;
    if (routeLenght < 2) {
      prevRoute = '';
    } else {
      prevRoute = currState.routes[routeLenght - 2].routeName;
    }

    dispatch({
      type: 'tab',
      currentRouteName,
      prevRoute,
    });
  };
};

export default ChangeTabStatus;
