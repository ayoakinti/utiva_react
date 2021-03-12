import Chart from "chart.js";
import { useEffect } from "react";
// import classes from "./LineGraph.module.css";

function LineGraph(props) {
  //   console.log(props.states, "line graph props");
  useEffect(() => {
    var ctx = document.getElementById(`${props.id}`).getContext("2d");

    let datasets = [];
    for (let i = 0; i < props.stats.length; i++) {
      datasets.push({
        label: props.stats[i].name,
        data: props.stats[i].data,
        // borderColor: props.stats[i].color,
        backgroundColor: props.stats[i].color,

        fill: false,
      });
    }
    // console.log(labels, confirmedCases, "labels and confrimed cases");

    new Chart(ctx, {
      type: "bar",
      data: {
        //Bring in data
        labels: props.labels,
        datasets,
      },
      options: {
        // Customize chart options
        title: {
          display: true,
          text: props.title,
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            fullWidth: true
            // labels: {
            //     fontColor: 'rgb(255, 99, 132)'
            // }
        },
        scales: {
          xAxes: [
              
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
              },
              scaleLabel: {
                display: true,
                labelString: 'States'
              }
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: props.yname
              }
            },
          ],
        },
      },
    });
  }, [props]);

  return (
    <div>
      <canvas id={props.id} width="400" height="600" />
    </div>
  );
}

export default LineGraph;
