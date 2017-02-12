import React, { PropTypes as T } from 'react'
import {Button, Panel, ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
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
          <Panel bsStyle="primary">
           <div className={styles.listReview}>
             <p>Name: Yi</p>
             <p>Rating: 5/5</p>
             <p>Date: </p>
             <Button>
               Details
               <span className={"glyphicon glyphicon-chevron-right"}></span>
             </Button>
          </div>
           </Panel>
           <Panel bsStyle="primary">
            <div className={styles.listReview}>
              <p>Name: Yi</p>
              <p>Rating: 5/5</p>
              <p>Date: </p>
              <Button>
                Details
                <span className={"glyphicon glyphicon-chevron-right"}></span>
              </Button>
           </div>
          </Panel>
          <Panel bsStyle="primary">
             <div className={styles.listReview}>
               <p>Name: Yi</p>
               <p>Rating: 5/5</p>
               <p>Date: </p>
               <Button>
                 Details
                 <span className={"glyphicon glyphicon-chevron-right"}></span>
               </Button>
            </div>
           </Panel>
           <Panel bsStyle="primary">
            <div className={styles.listReview}>
              <p>Name: Yi</p>
              <p>Rating: 5/5</p>
              <p>Date: </p>
              <Button>
                Details
                <span className={"glyphicon glyphicon-chevron-right"}></span>
              </Button>
           </div>
          </Panel>
          <Panel bsStyle="primary">
             <div className={styles.listReview}>
               <p>Name: Yi</p>
               <p>Rating: 5/5</p>
               <p>Date: </p>
               <Button>
                 Details
                 <span className={"glyphicon glyphicon-chevron-right"}></span>
               </Button>
            </div>
           </Panel>
           <Panel bsStyle="primary">
            <div className={styles.listReview}>
              <p>Name: Yi</p>
              <p>Rating: 5/5</p>
              <p>Date: </p>
              <Button>
                Details
                <span className={"glyphicon glyphicon-chevron-right"}></span>
              </Button>
           </div>
          </Panel>
          <Panel bsStyle="primary">
           <div className={styles.listReview}>
             <p>Name: Yi</p>
             <p>Rating: 5/5</p>
             <p>Date: </p>
             <Button>Details</Button>
          </div>
         </Panel>
        </div>
      </div>

    )
  }
}

export default ReviewLog;
