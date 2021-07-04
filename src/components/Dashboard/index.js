import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import ZingChart from "zingchart-react";
import MoviesList from "../../pages/Movie/MoviesList";
import AddMovie from "../../pages/Movie/AddMovie";
import SingleMovie from "../../pages/Movie/SingleMovie";
import logo1 from "../../assets/logo/olymp.png";
import logo2 from "../../assets/logo/olymp-cinema-logo.png";
import logo3 from "../../assets/logo/cinema.png";
import "./index.css";

const Dashboard = () => {
  const [chart, setChart] = useState({});
  const [chartSecond, setChartSecond] = useState({});
  const [chartThird, setChartThird] = useState({});

  useEffect(() => {
    setChart({
      config: {
        backgroundColor: "#ecf2f6",
        graphset: [
          {
            type: "bar",
            backgroundColor: "#fff",
            borderWidth: "1px",
            borderColor: "#dae5ec",
            width: "96%",
            height: "30%",
            x: "2%",
            y: "3%",
            title: {
              text: "DEPARTMENT PERFORMANCE",
              marginTop: "7px",
              marginLeft: "9px",
              backgroundColor: "none",
              fontColor: "#707d94",
              fontFamily: "Arial",
              fontSize: "11px",
              fontWeight: "bold",
              shadow: false,
              textAlign: "left",
            },
            plot: {
              tooltip: {
                padding: "5px 10px",
                backgroundColor: "#707e94",
                borderRadius: "6px",
                fontColor: "#fff",
                fontFamily: "Arial",
                fontSize: "11px",
                shadow: false,
              },
              animation: {
                delay: 500,
                effect: "ANIMATION_SLIDE_BOTTOM",
              },
              barWidth: "33px",
              hoverState: {
                visible: false,
              },
            },
            plotarea: {
              margin: "45px 20px 38px 45px",
            },
            scaleX: {
              values: [
                "Apparel",
                "Drug",
                "Footwear",
                "Gift Card",
                "Home",
                "Jewelry",
                "Garden",
                "Other",
              ],
              guide: {
                visible: false,
              },
              item: {
                paddingTop: "2px",
                fontColor: "#8391a5",
                fontFamily: "Arial",
                fontSize: "11px",
              },
              itemsOverlap: true,
              lineColor: "#d2dae2",
              maxItems: 9999,
              offsetY: "1px",
              tick: {
                lineColor: "#d2dae2",
                visible: false,
              },
            },
            scaleY: {
              values: "0:300:100",
              guide: {
                rules: [
                  {
                    lineWidth: "0px",
                    rule: "%i == 0",
                  },
                  {
                    alpha: 0.4,
                    lineColor: "#d2dae2",
                    lineStyle: "solid",
                    lineWidth: "1px",
                    rule: "%i > 0",
                  },
                ],
              },
              item: {
                paddingRight: "5px",
                fontColor: "#8391a5",
                fontFamily: "Arial",
                fontSize: "10px",
              },
              lineColor: "none",
              maxItems: 4,
              maxTicks: 4,
              tick: {
                visible: false,
              },
            },
            series: [
              {
                values: [150, 165, 173, 201, 185, 195, 162, 125],
                styles: [
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#25a6f7",
                  },
                  {
                    backgroundColor: "#ad6bae",
                  },
                  {
                    backgroundColor: "#707d94",
                  },
                  {
                    backgroundColor: "#f3950d",
                  },
                  {
                    backgroundColor: "#e62163",
                  },
                  {
                    backgroundColor: "#4e74c0",
                  },
                  {
                    backgroundColor: "#9dc012",
                  },
                ],
              },
            ],
          },
          ///////////////////////////////////////
          {
            type: "hbar",
            backgroundColor: "#fff",
            borderColor: "#dae5ec",
            borderWidth: "1px",
            width: "30%",
            height: "63%",
            x: "2%",
            y: "35.2%",
            title: {
              text: "BRAND PERFORMANCE",
              marginTop: "7px",
              marginLeft: "9px",
              backgroundColor: "none",
              fontColor: "#707d94",
              fontFamily: "Arial",
              fontSize: "11px",
              shadow: false,
              textAlign: "left",
            },
            scaleY: {
              guide: {
                visible: false,
              },
              item: {
                visible: false,
              },
              lineColor: "none",
              tick: {
                visible: false,
              },
            },
            scaleX: {
              values: [
                "Kenmore",
                "Craftsman",
                "DieHard",
                "Land's End",
                "Laclyn Smith",
                "Joe Boxer",
              ],
              guide: {
                visible: false,
              },
              item: {
                paddingBottom: "8px",
                fontColor: "#8391a5",
                fontFamily: "Arial",
                fontSize: "11px",
                offsetX: "206px",
                offsetY: "-12px",
                textAlign: "left",
                width: "200px",
              },
              lineColor: "none",
              tick: {
                visible: false,
              },
            },
            plot: {
              tooltip: {
                padding: "5px 10px",
                backgroundColor: "#707e94",
                borderRadius: "6px",
                fontColor: "#ffffff",
                fontFamily: "Arial",
                fontSize: "11px",
                shadow: false,
              },
              animation: {
                delay: 500,
                effect: "ANIMATION_EXPAND_LEFT",
              },
              barsOverlap: "100%",
              barWidth: "12px",
              hoverState: {
                backgroundColor: "#707e94",
              },
              thousandsSeparator: ",",
            },
            plotarea: {
              margin: "50px 15px 10px 15px",
            },
            series: [
              {
                values: [103902, 112352, 121823, 154092, 182023, 263523],
                styles: [
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#4dbac0",
                  },
                  {
                    backgroundColor: "#4dbac0",
                  },
                ],
                tooltipText: "$%node-value",
                zIndex: 2,
              },
              {
                values: [300000, 300000, 300000, 300000, 300000, 300000],
                valueBox: {
                  text: "$%data-rvalues",
                  paddingBottom: "8px",
                  fontColor: "#8391a5",
                  fontFamily: "Arial",
                  fontSize: "11px",
                  offsetX: "-54px",
                  offsetY: "-12px",
                  textAlign: "right",
                  visible: true,
                },
                backgroundColor: "#d9e4eb",
                dataRvalues: [103902, 112352, 121823, 154092, 182023, 263523],
                maxTrackers: 0,
                zIndex: 1,
              },
            ],
          },

          ////////////////////////////////////////////////
          {
            type: "line",
            backgroundColor: "#fff",
            borderColor: "#dae5ec",
            borderWidth: "1px",
            width: "64%",
            height: "63%",
            x: "34%",
            y: "35.2%",
            title: {
              text: "TODAY'S SALES",
              marginTop: "7px",
              marginLeft: "12px",
              backgroundColor: "none",
              fontColor: "#707d94",
              fontFamily: "Arial",
              fontSize: "11px",
              shadow: false,
              textAlign: "left",
            },
            plot: {
              animation: {
                delay: 500,
                effect: "ANIMATION_SLIDE_LEFT",
              },
            },
            plotarea: {
              margin: "50px 25px 70px 46px",
            },
            scaleY: {
              values: "0:100:25",
              guide: {
                alpha: 0.5,
                lineColor: "#d2dae2",
                lineStyle: "solid",
                lineWidth: "1px",
              },
              item: {
                paddingRight: "5px",
                fontColor: "#8391a5",
                fontFamily: "Arial",
                fontSize: "10px",
              },
              lineColor: "none",
              tick: {
                visible: false,
              },
            },
            scaleX: {
              values: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              guide: {
                visible: false,
              },
              item: {
                paddingTop: "5px",
                fontColor: "#8391a5",
                fontFamily: "Arial",
                fontSize: "10px",
              },
              lineColor: "#d2dae2",
              lineWidth: "2px",
              tick: {
                lineColor: "#d2dae2",
                lineWidth: "1px",
              },
            },
            legend: {
              margin: "auto auto 15 auto",
              backgroundColor: "none",
              borderWidth: "0px",
              item: {
                margin: "0px",
                padding: "0px",
                fontColor: "#707d94",
                fontFamily: "Arial",
                fontSize: "9px",
              },
              layout: "x4",
              marker: {
                type: "match",
                padding: "3px",
                fontFamily: "Arial",
                fontSize: "10px",
                lineWidth: "2px",
                showLine: "true",
                size: 4,
              },
              shadow: false,
            },
            scaleLabel: {
              padding: "5px 10px",
              backgroundColor: "#707d94",
              borderRadius: "5px",
              fontColor: "#ffffff",
              fontFamily: "Arial",
              fontSize: "10px",
            },
            crosshairX: {
              lineColor: "#707d94",
              lineWidth: "1px",
              plotLabel: {
                padding: "5px 10px",
                alpha: 1,
                borderRadius: "5px",
                fontColor: "#000",
                fontFamily: "Arial",
                fontSize: "10px",
                shadow: false,
              },
            },
            tooltip: {
              visible: false,
            },
            series: [
              {
                text: "Kenmore",
                values: [69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69],
                lineColor: "#4dbac0",
                lineWidth: "2px",
                marker: {
                  backgroundColor: "#fff",
                  borderColor: "#36a2a8",
                  borderWidth: "1px",
                  shadow: false,
                  size: 3,
                },
                palette: 0,
                shadow: false,
              },
              {
                text: "Craftsman",
                values: [51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48],
                lineColor: "#25a6f7",
                lineWidth: "2px",
                marker: {
                  backgroundColor: "#fff",
                  borderColor: "#1993e0",
                  borderWidth: "1px",
                  shadow: false,
                  size: 3,
                },
                palette: 1,
                shadow: false,
                visible: true,
              },
              {
                text: "DieHard",
                values: [42, 43, 30, 50, 31, 48, 55, 46, 48, 32, 50, 38],
                lineColor: "#ad6bae",
                lineWidth: "2px",
                marker: {
                  backgroundColor: "#fff",
                  borderColor: "#975098",
                  borderWidth: "1px",
                  shadow: false,
                  size: 3,
                },
                palette: 2,
                shadow: false,
                visible: true,
              },
              {
                text: "Land's End",
                values: [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24],
                lineColor: "#f3950d",
                lineWidth: "2px",
                marker: {
                  backgroundColor: "#fff",
                  borderColor: "#d37e04",
                  borderWidth: "1px",
                  shadow: false,
                  size: 3,
                },
                palette: 3,
                shadow: false,
              },
            ],
          },
        ],
      },
    });
    setChartSecond({
      config: {
        backgroundColor: "#ecf2f6",
        graphset: [
          ///////////////////////////////////////
          {
            type: "pie",
            width: "100%",
            height: "95%",
            plot: {
              borderColor: "#2B313B",
              borderWidth: 5,
              // slice: 90,
              valueBox: {
                placement: "out",
                text: "%t\n%npv%",
                fontFamily: "Open Sans",
              },
              tooltip: {
                fontSize: "18",
                fontFamily: "Open Sans",
                padding: "5 10",
                text: "%npv%",
              },
              animation: {
                effect: 2,
                method: 5,
                speed: 900,
                sequence: 1,
                delay: 3000,
              },
            },

            title: {
              fontColor: "#8e99a9",
              text: "Global Browser Usage",
              align: "left",
              offsetX: 10,
              fontFamily: "Open Sans",
              fontSize: 25,
            },
            subtitle: {
              offsetX: 10,
              offsetY: 10,
              fontColor: "#8e99a9",
              fontFamily: "Open Sans",
              fontSize: "16",
              text: "May 2016",
              align: "left",
            },
            plotarea: {
              margin: "55px ",
            },
            series: [
              {
                values: [11.38],
                text: "Internet Explorer",
                backgroundColor: "#50ADF5",
              },
              {
                values: [56.94],
                text: "Chrome",
                backgroundColor: "#FF7965",
                detached: true,
              },
              {
                values: [14.52],
                text: "Firefox",
                backgroundColor: "#FFCB45",
                detached: true,
              },
              {
                text: "Safari",
                values: [9.69],
                backgroundColor: "#6877e5",
              },
              {
                text: "Other",
                values: [7.48],
                backgroundColor: "#6FB07F",
              },
            ],
          },
        ],
        ////////////////////////////////////////////////
      },
    });

    setChartThird({
      config: {
        globals: {
          "font-family": "Roboto",
        },
        graphset: [
          {
            type: "area",
            "background-color": "#fff",
            utc: true,
            title: {
              y: "15px",
              text: "Website Traffic Metrics",
              "background-color": "none",
              "font-color": "#05636c",
              "font-size": "24px",
              height: "25px",
              "adjust-layout": true,
            },
            plotarea: {
              "margin-top": "10%",
              "margin-right": "dynamic",
              "margin-bottom": "dynamic",
              "margin-left": "dynamic",
              "adjust-layout": true,
            },
            labels: [
              {
                text: "Visitors: %plot-2-value",
                "default-value": "",
                color: "#8da0cb",
                x: "20%",
                y: 50,
                width: 120,
                "text-align": "left",
                bold: 0,
                "font-size": "14px",
                "font-weight": "bold",
              },
              {
                text: "Clicks: %plot-1-value",
                "default-value": "",
                color: "#66c2a5",
                x: "45%",
                y: 50,
                width: 120,
                "text-align": "left",
                bold: 0,
                "font-size": "14px",
                "font-weight": "bold",
              },
              {
                text: "Returns: %plot-0-value",
                "default-value": "",
                color: "#fc8d62",
                x: "70%",
                y: 50,
                width: 120,
                "text-align": "left",
                bold: 0,
                "font-size": "14px",
                "font-weight": "bold",
              },
            ],
            "scale-x": {
              label: {
                text: "Date Range",
                "font-size": "14px",
                "font-weight": "normal",
                "offset-x": "10%",
                "font-angle": 360,
              },
              item: {
                "text-align": "center",
                "font-color": "#05636c",
              },
              zooming: 1,
              "max-labels": 12,
              labels: [
                "Sept<br>19",
                "Sept<br>20",
                "Sept<br>21",
                "Sept<br>22",
                "Sept<br>23",
                "Sept<br>24",
                "Sept<br>25",
                "Sept<br>26",
                "Sept<br>27",
                "Sept<br>28",
                "Sept<br>29",
                "Sept<br>30",
              ],
              "max-items": 12,
              "items-overlap": true,
              guide: {
                "line-width": "0px",
              },
              tick: {
                "line-width": "2px",
              },
            },
            "crosshair-x": {
              "line-color": "#fff",
              "line-width": 1,
              "plot-label": {
                visible: false,
              },
            },
            "scale-y": {
              values: "0:2500:500",
              item: {
                "font-color": "#05636c",
                "font-weight": "normal",
              },
              label: {
                text: "Metrics",
                "font-size": "14px",
              },
              guide: {
                "line-width": "0px",
                alpha: 0.2,
                "line-style": "dashed",
              },
            },
            plot: {
              "line-width": 2,
              marker: {
                size: 1,
                visible: false,
              },
              tooltip: {
                "font-family": "Roboto",
                "font-size": "15px",
                text: "There were %v %t on %data-days",
                "text-align": "left",
                "border-radius": 5,
                padding: 10,
              },
            },
            series: [
              {
                values: [
                  1204, 1179, 1146, 1182, 1058, 1086, 1141, 1105, 1202, 992,
                  373, 466,
                ],
                "data-days": [
                  "Sept 19",
                  "Sept 20",
                  "Sept 21",
                  "Sept 22",
                  "Sept 23",
                  "Sept 24",
                  "Sept 25",
                  "Sept 26",
                  "Sept 27",
                  "Sept 28",
                  "Sept 29",
                  "Sept 30",
                ],
                "line-color": "#fc8d62",
                aspect: "spline",
                "background-color": "#fc8d62",
                "alpha-area": ".5",
                "font-family": "Roboto",
                "font-size": "14px",
                text: "returns",
              },
              {
                values: [
                  1625, 1683, 1659, 1761, 1904, 1819, 1631, 1592, 1498, 1594,
                  1782, 1644,
                ],
                "data-days": [
                  "Sept 19",
                  "Sept 20",
                  "Sept 21",
                  "Sept 22",
                  "Sept 23",
                  "Sept 24",
                  "Sept 25",
                  "Sept 26",
                  "Sept 27",
                  "Sept 28",
                  "Sept 29",
                  "Sept 30",
                ],
                "line-color": "#66c2a5",
                "background-color": "#66c2a5",
                "alpha-area": ".3",
                text: "clicks",
                aspect: "spline",
                "font-family": "Roboto",
                "font-size": "14px",
              },
              {
                values: [
                  314, 1395, 1292, 1259, 1269, 1132, 1012, 1082, 1116, 1039,
                  1132, 1227,
                ],
                "data-days": [
                  "Sept 19",
                  "Sept 20",
                  "Sept 21",
                  "Sept 22",
                  "Sept 23",
                  "Sept 24",
                  "Sept 25",
                  "Sept 26",
                  "Sept 27",
                  "Sept 28",
                  "Sept 29",
                  "Sept 30",
                ],
                "line-color": "#8da0cb",
                "background-color": "#8da0cb",
                aspect: "spline",
                "alpha-area": "0.2",
                text: "visitors",
                "font-family": "Roboto",
                "font-size": "14px",
              },
            ],
          },
        ],
      },
    });
  }, []);

  console.log("chart: ", chart);

  return (
    <div className="main-container">
      <header className="navbar navbar-dark header-style sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 " to="/">
          <div className="logo-wrapp">
            <img src={logo1} className="company-logo" alt="cinema" />
            <img src={logo2} className="company-logo" alt="logo" />
            <img src={logo3} className="company-logo" alt="olymp" />
          </div>
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/logout">
              Sign out
            </a>
          </li>
        </ul>
      </header>
      <div className="container-fluid ">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar  collapse"
          >
            <div className="position-sticky sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active listItem"
                    aria-current="page"
                    href="/admin"
                  >
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/orders">
                    <span data-feather="file"></span>
                    Users
                  </a>
                </li>
                <li className="nav-item ">
                  <NavLink
                    exact
                    to="/admin/movies"
                    className="nav-link listItem"
                  >
                    <span data-feather="shopping-cart"></span>
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/customers">
                    <span data-feather="users"></span>
                    Premieres
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/reports">
                    <span data-feather="bar-chart-2"></span>
                    Reservations
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Tickets
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    News
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Notifications
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Cinemas
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Halls
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Seats
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
                <a
                  className="link-secondary listItem"
                  href="/saved"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link listItem" href="/current">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/lastquarter">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/social">
                    <span data-feather="file-text"></span>
                    Personel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/sales">
                    <span data-feather="file-text"></span>
                    Sales
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div className="main-div">
              <div>
                <ZingChart data={chart.config} />
                <ZingChart data={chartSecond.config} />
                <ZingChart data={chartThird.config} />
              </div>
              <Switch>
                <Route
                  exact
                  path="/admin/movies"
                  render={(props) => <MoviesList {...props} />}
                />
                <Route
                  exact
                  path="/admin/movies/movie-add"
                  render={(props) => <AddMovie {...props} />}
                />
                <Route
                  exact
                  path="/admin/movies/:movie_id"
                  render={(props) => <SingleMovie {...props} />}
                />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div> //main-container
  );
};

export default Dashboard;
