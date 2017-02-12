import React, { PropTypes as T } from 'react'
import {Button, Panel, ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
// import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
// import {AreaChart, BarChart,Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from 'Recharts';
//
// import {logs} from '../reviewsData'

export class RatingBar extends React.Component {

  render() {
    let stars = [1,1,1,1,1];
    console.log("stars", stars);
    return (
        <p className={this.props.ratingP}>
        {
          stars.map((x,index)=>
          <span className={ (this.props.rating > index)? 'glyphicon glyphicon-star' :'glyphicon glyphicon-star-empty'}></span>
        )}
      </p>

    )
  }
}

export default RatingBar;
