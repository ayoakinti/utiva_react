const initState = {
  dashboard: [],
  message: "",
};

const dashboardReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_DASHBOARD_STATS_SUCCESS":
      return {
        ...state,
        dashboard: payload.stats,
      };

    case "FETCH_DASHBOARD_STATS_FAIL":
      return {
        ...state,
        message: payload.message,
      };

    default:
      return state;
  }
};

export default dashboardReducer;