function Cards(props) {

  // console.log(props.dashboard, "props")
  return (
    <div className="row">
      <div className="col-md-6 col-lg-3">
        <div className="card bg-info">
          <div className="card-body">
            <div>Total Confirmed Cases</div>
            <div>{ props.dashboard.totalConfirmedCases }</div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card bg-secondary">
          <div className="card-body">
            <div>Total Active Cases</div>
            <div>{ props.dashboard.totalActiveCases }</div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card bg-success">
          <div className="card-body">
            <div>Total Discharged</div>
            <div>{ props.dashboard.discharged }</div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card bg-danger">
          <div className="card-body">
            <div>Total Deaths</div>
            <div>{ props.dashboard.death }</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
