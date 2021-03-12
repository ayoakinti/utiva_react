import api from "../api/index";

const API_URL = "https://covidnigeria.herokuapp.com/api";

const getdashboard = () => {
  return api.get(API_URL).then((res) => {
    return res.data.data;
  });
};

const DashboardService = {
  getdashboard,
};

export default DashboardService;
