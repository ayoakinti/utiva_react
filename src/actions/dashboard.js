import DashboardService from "../services/dashboard.service";

export const getdashboard = () => (dispatch) => {
    return DashboardService.getdashboard().then(
      (data) => {
        dispatch({
          type: "FETCH_DASHBOARD_STATS_SUCCESS",
          payload: {
            stats: data,
          },
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: "FETCH_DASHBOARD_STATS_FAIL",
          payload: {
            message: "Error!",
          },
        });
  
        return Promise.reject();
      }
    );
  };