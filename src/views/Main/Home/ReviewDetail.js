import React, { PropTypes as T } from 'react'
import {Button, Panel, ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
// import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
// import {AreaChart, BarChart,Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from 'Recharts';
//
// import {logs} from '../reviewsData'

export class ReviewDetail extends React.Component {

  render() {
    return (
        <div className={styles.panelCard}>

        <Panel bsStyle="primary">
          {this.props.customer.name}

         </Panel>
        </div>

    )
  }
}

export default ReviewDetail;
