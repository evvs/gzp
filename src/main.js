/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line no-unused-vars
import * as Coreui from "@coreui/coreui";
// import "@coreui/icons";
// eslint-disable-next-line no-unused-vars
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";
// eslint-disable-next-line no-unused-vars
import * as Utils from "@coreui/utils/src";
import "./styles/style.scss";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

if (module.hot) {
  module.hot.accept();
}
window.coreui = { ...Coreui, Utils };
