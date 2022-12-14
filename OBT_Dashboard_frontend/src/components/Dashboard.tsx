import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import '../App.css';
import DashboardBlock from './DashboardBlock';
import CastRulesTable from './CastRulesTable';
import KeyFigures from './KeyFigures';
import { FetchC02EmissionData, DataPoint } from '../api/FetchData';
import Detail from './Detail';


const labels: string[] = [
  'feb. 2021',
  'march 2021',
  'april 2021',
  'may 2021',
  'june 2021',
  'jul. 2021',
  'aug. 2021'
];


export interface Measurements {
  label: string,
  dataPoints: number[],
  color: string,
}

export const dataColors = { blue: '#3B82F6', green: '#10B981' }


// CAST rules data
let castRulesColNames: string[] = ["#", "Advice", "Urgent"];
let castRulesLines: string[][] = [
  ["1", "Advice 1", "Yes"],
  ["2", "Advice 2", "No"],
  ["3", "Advice 3", "No"],
  ["4", "Advice 4", "Yes"],
  ["5", "Advice 5", "No"],
  ["6", "Advice 6", "No"],
  ["7", "Advice 7", "No"],
  ["8", "Advice 8", "Yes"],
  ["9", "Advice 9", "No"],
  ["10", "Advice 10", "No"],
  ["11", "Advice 11", "No"],
];

// Key figures data

let figData = [
  { figure: 2, unit: "Managers", description: "Hire 2 manager" },
  { figure: 6, unit: "Technicians", description: "Hire 1 technician" },
  { figure: 7, unit: "HR", description: "Fire 3 HR" },
  { figure: 1, unit: "CTO", description: "No problem" },
  { figure: 1, unit: "CEO", description: "No problem" },
  { figure: 2, unit: "trader", description: "No problem" },
]

interface DashboardProps { }

interface DashboardState {
  loadingGcp: boolean,
  loadingGreespector: boolean,
  gcpData: Measurements,
  usersData: Measurements,
  dates: string[],
  showDetails: boolean,
  blockDetailShortName: string,
}

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      loadingGcp: true,
      loadingGreespector: true,
      gcpData: { label: 'GCP', dataPoints: [], color: '#3B82F6' },
      usersData: { label: 'user devices', dataPoints: [], color: '#10B981' },
      dates: [],
      showDetails: false,
      blockDetailShortName: ''
    };

    this.showDetailFunction = this.showDetailFunction.bind(this);
  }

  // async componentDidMount() {
  //   console.log("fetch data")

  //   // get gcp data
  //   await FetchC02EmissionData('GCP').then(
  //     (gcpData: DataPoint[]) => {
  //       console.log(gcpData);
  //       // get dates lists and co2 measures
  //       const dates = gcpData.map(point => point.date);
  //       const dataPoints = gcpData.map(point => point.gCO2eq);
  //       // save this data to the state
  //       this.setState(prevState => ({ gcpData: { ...prevState.gcpData, dataPoints: dataPoints }, dates: dates, loadingGcp: false }))
  //     });

  //   // get greenspector
  //   await FetchC02EmissionData('greenspector').then(
  //     (usersData: DataPoint[]) => {
  //       console.log(usersData);
  //       // get dates lists and co2 measures
  //       const dates = usersData.map(point => point.date);
  //       const dataPoints = usersData.map(point => point.gCO2eq);
  //       // save this data to the state
  //       this.setState(prevState => ({ usersData: { ...prevState.usersData, dataPoints: dataPoints }, loadingGreespector: false }))
  //     });
  // }

  showDetailFunction(show: boolean, blockShortName: string) {
    if (show == false) {
      this.setState({ showDetails: show, blockDetailShortName: '' });
    } else {
      this.setState({ showDetails: show, blockDetailShortName: blockShortName });
    }
  }

  render() {
    if (this.state.showDetails) {
      // get details of the block to show
      let shortName = this.state.blockDetailShortName;
      // put switch statement here
      switch (shortName) {

        case "Performance Analytics":
          // show this block
          return (
            <Detail showDetail={this.showDetailFunction} title="Performance Analytics">
              {/* <BarChart dates={this.state.dates} emissions={[this.state.gcpData, this.state.usersData]} /> */}
              {/* <img src="legal_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Synergy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Synergy">
              {/* <Container style={{ width: "70%" }}>
                <KeyFigures data={figData.slice(0, 100)} />
              </Container> */}
            </Detail>
          );

        case "Business Plan Reviewer":
          return (
            <Detail showDetail={this.showDetailFunction} title="Business Plan Reviewer">
              {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Human Ressources":
          return (
            <Detail showDetail={this.showDetailFunction} title="Human Ressources">
              {/* <CastRulesTable colNames={castRulesColNames} lines={castRulesLines} /> */}
            </Detail>
          );

        case "Customer Acquisition Strategy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Customer Acquisition Strategy">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Organizational Structure":
          return (
            <Detail showDetail={this.showDetailFunction} title="Organizational Structure">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Operations Optimization":
          return (
            <Detail showDetail={this.showDetailFunction} title="Operations Optimization">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Accounting Compliance":
          return (
            <Detail showDetail={this.showDetailFunction} title="Accounting Compliance">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Legal":
          return (
            <Detail showDetail={this.showDetailFunction} title="Legal">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

      }
    }

    return (
      <Row>

        <Col sm={12} md={5} className="p-2">

          <DashboardBlock title="Performance Analytics" shortName="Performance Analytics" helpText="Details about Performance Analytics" showDetail={this.showDetailFunction}>
            {/* <KeyFigures data={figData.slice(0, 3)} /> */}
            <img src="Performance_Analytics_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Synergy" shortName="Synergy" helpText="Details about Synergy" showDetail={this.showDetailFunction}>
            {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            <img src="Synergy_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Business Plan Reviewer" shortName="Business Plan Reviewer" helpText="Details about Business Plan Reviewer" showDetail={this.showDetailFunction}>
            {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            <img src="Business_Plan_Reviewer_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Human Ressources" shortName="Human Ressources" helpText="Details about Human Ressources" showDetail={this.showDetailFunction}>
            {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            <img src="Human_Ressources_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Customer Acquisition Strategy" shortName="Customer Acquisition Strategy" helpText="Details about Customer Acquisition Strategy" showDetail={this.showDetailFunction}>
            {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            <img src="Customer_Acquisition_Strategy_img.png" className="img-fluid m-1" />
          </DashboardBlock>

        </Col>

        <Col sm={12} md={7} className="p-2">

          <DashboardBlock title="Organizational Structure" shortName="Organizational Structure" helpText="Details about Organizational Structure" showDetail={this.showDetailFunction}>
            {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            <img src="Organizational_Structure_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Operations Optimization" shortName="Operations Optimization" helpText="Details about Operations Optimization" showDetail={this.showDetailFunction}>
            {/* {this.state.loadingGcp || this.state.loadingGreespector ?
              <Container className="text-center">
                <Spinner animation="border" variant="primary" className="my-3" />
              </Container> :
              <BarChart dates={this.state.dates} emissions={[this.state.gcpData, this.state.usersData]} />} */}
            {/* <img src="legal_picture.png" className="img-fluid m-1" /> */}
            <img src="Operations_Optimization_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Accounting Compliance" shortName="Accounting Compliance" helpText="Details about Accounting Compliance" showDetail={this.showDetailFunction}>
            {/* <h3 className="mb-3 text-center"><b>3.47 / 5</b></h3> */}
            {/* <CastRulesTable colNames={castRulesColNames} lines={castRulesLines.slice(0, 6)} /> */}
            <img src="Accounting_Compliance_img.png" className="img-fluid m-1" />
          </DashboardBlock>

          <DashboardBlock title="Legal" shortName="Legal" helpText="Details about Legal" showDetail={this.showDetailFunction}>
            {/* <h3 className="mb-3 text-center"><b>3.47 / 5</b></h3> */}
            {/* <CastRulesTable colNames={castRulesColNames} lines={castRulesLines.slice(0, 6)} /> */}
            {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            <img src="Legal_img.png" className="img-fluid m-1" />
          </DashboardBlock>

        </Col>

      </Row>
    );
  }
}