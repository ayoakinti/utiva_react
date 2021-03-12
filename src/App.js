// import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Cards from "./components/Cards";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import "./assets/scss/custom.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getdashboard } from "./actions/dashboard";

function App() {
  const dashboard = useSelector((state) => state.dashboard);
  // console.log(dashboard);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getdashboard())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let loader;
  if (loading) {
    loader = <Loader />;
  }

  let content;
  if (dashboard.dashboard.states) {
    let states = dashboard.dashboard.states;
    let labels = [];
    let confirmedCases = [];
    let activeCases = [];
    let discharged = [];
    let deaths = [];
    let deathrates = [];
    let dischargerates = [];
    // if(props){
    for (let i = 0; i < states.length; i++) {
      labels.push(states[i].state);
      confirmedCases.push(states[i].confirmedCases);
      activeCases.push(states[i].casesOnAdmission);
      discharged.push(states[i].discharged);
      deaths.push(states[i].death);
      deathrates.push(
        ((states[i].death / states[i].confirmedCases) * 100).toFixed(2)
      );
      dischargerates.push(
        ((states[i].discharged / states[i].confirmedCases) * 100).toFixed(2)
      );
    }
    let populationChart = [
      { name: "Confirmed Cases", color: "#17a2b8", data: confirmedCases },
      { name: "Active Cases", color: "#6c757d", data: activeCases },
      { name: "Discharged", color: "#28a745", data: discharged },
      { name: "Deaths", color: "#dc3545", data: deaths },
    ];
    let percentChart = [
      { name: "Death rate", color: "#dc3545", data: deathrates },
      { name: "Discharge rate", color: "#28a745", data: dischargerates },
    ];
    // console.log(populationChart, "population chart");
    // console.log(percentChart, "percent chart");
    content = (
      <div className="container mb-5">
        {" "}
        <div className="mb-4">
          <h4 className="text-center">Total Samples Tested: 1601,396</h4>
          <Cards dashboard={dashboard.dashboard} />
        </div>
        <div>
          <h4 className="text-center mb-3">Confirmed Cases by States</h4>
          <div
            style={{
              maxHeight: "60vh",
              overflowY: "auto",
              marginBottom: "20px",
            }}
          >
            <Table states={dashboard.dashboard.states} />
          </div>
          <div className="mb-4">
            <LineGraph
              labels={labels}
              stats={populationChart}
              title="Chart showing overview of Covid-19 cases in Nigeria"
              id={1}
              yname="Cases"
            />
          </div>
          <div>
            <LineGraph
              labels={labels}
              stats={percentChart}
              title="Death/Discharge rate chart"
              id={2}
              yname="Percentage"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {loader}
      <Header />
      {content}
    </div>
  );
}

export default App;
