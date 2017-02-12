import React, { PropTypes as T } from 'react'
import {Button, Panel, ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
// import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
// import {AreaChart, BarChart,Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from 'Recharts';
//
import {logs} from '../reviewsData'
import {ReviewDetail} from './ReviewDetail'

export class ReviewLog extends React.Component {
  state = {currentCustomer: -1}
  viewCustomerDetail = (customer) =>{
    this.setState({currentCustomer: customer});
  }

  render() {
    return (
      <div className={styles.mainPanel}>
        {this.state.currentCustomer === -1? <div className={styles.panelCard}>
          <p>Recent Feedback</p>
          {logs.map((x, index) => {

            return(
              <Panel bsStyle="primary">

               <div className={styles.listReview}>
                 <img
                   src={x.gender === 'F'? require('../avatar_F.png'): require('../avatar_M.png')}
                   className={styles.customersAvatar}
                />
                 <p>{x.first_name +' '+  x.last_name}</p>
                 <p>Rating: {x.rating}/5</p>
                 <p>Date: {x.date}</p>
                 <Button onClick={() => this.viewCustomerDetail(x)}>
                   Details
                   <span className={"glyphicon glyphicon-chevron-right"}></span>
                 </Button>
              </div>
               </Panel>
            );
          })}
        </div>: <ReviewDetail customer={this.state.currentCustomer}/>}
      </div>

    )
  }
}

export default ReviewLog;
