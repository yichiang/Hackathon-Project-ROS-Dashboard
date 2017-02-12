import React, { PropTypes as T } from 'react'
import {Button,ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
// import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
// import {AreaChart, BarChart,Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from 'Recharts';
//
// // import {SideBar} from './SideBar'

export class ReviewLog extends React.Component {

  render() {
    return (
      <div className={styles.mainPanel}>
        <div className={styles.panelCard}>
          Logs
        </div>
      </div>

    )
  }
}

export default ReviewLog;
