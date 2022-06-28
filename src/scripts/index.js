/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line no-unused-vars

// import "@coreui/icons";
// eslint-disable-next-line no-unused-vars
import * as ChartJS from "@coreui/chartjs";

// eslint-disable-next-line no-unused-vars
import * as Utils from "@coreui/utils/src";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const coreui = {
  ChartJS,
  Utils,
};

Chart.defaults.pointHitDetectionRadius = 1;
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = "index";
Chart.defaults.plugins.tooltip.position = "nearest";
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips;
Chart.defaults.defaultFontColor = "#646470";

const random = (min, max) =>
  // eslint-disable-next-line no-mixed-operators
  Math.floor(Math.random() * (max - min + 1) + min);

const indexCardChart1 = document.getElementById("card-chart1");
if (indexCardChart1) {
  // eslint-disable-next-line no-unused-vars
  const cardChart1 = new Chart(indexCardChart1, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,.55)",
          pointBackgroundColor: coreui.Utils.getStyle("--cui-primary"),
          data: [65, 59, 84, 84, 51, 55, 40],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          min: 30,
          max: 89,
          display: false,
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 1,
          tension: 0.4,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    },
  });
}

const indexCardChart2 = document.getElementById("card-chart2");
if (indexCardChart2) {
  // eslint-disable-next-line no-unused-vars
  const cardChart2 = new Chart(indexCardChart2, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,.55)",
          pointBackgroundColor: coreui.Utils.getStyle("--cui-info"),
          data: [1, 18, 9, 17, 34, 22, 11],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          min: -9,
          max: 39,
          display: false,
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    },
  });
}

const indexCardChart3 = document.getElementById("card-chart3");
if (indexCardChart3) {
  // eslint-disable-next-line no-unused-vars
  const cardChart3 = new Chart(indexCardChart3, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,255,255,.2)",
          borderColor: "rgba(255,255,255,.55)",
          data: [78, 81, 80, 45, 34, 12, 40],
          fill: true,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 2,
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    },
  });
}

const indexCardChart4 = document.getElementById("card-chart4");
if (indexCardChart4) {
  // eslint-disable-next-line no-unused-vars
  const cardChart4 = new Chart(indexCardChart4, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,255,255,.2)",
          borderColor: "rgba(255,255,255,.55)",
          data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
          barPercentage: 0.6,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
}

const indexMainChart = document.getElementById("main-chart");
if (indexMainChart) {
  // eslint-disable-next-line no-unused-vars
  const mainChart = new Chart(indexMainChart, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(51, 153, 255, .1)",
          borderColor: "rgb(51, 153, 255)",
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: [
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
          ],
          fill: true,
        },
        {
          label: "My Second dataset",
          borderColor: coreui.Utils.getStyle("--cui-success"),
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: [
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
          ],
        },
        {
          label: "My Third dataset",
          borderColor: coreui.Utils.getStyle("--cui-danger"),
          pointHoverBackgroundColor: "#fff",
          borderWidth: 1,
          borderDash: [8, 5],
          data: [65, 65, 65, 65, 65, 65, 65],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250,
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    },
  });
}
