import React, { PropTypes as T } from 'react'
import {Button,ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import styles from './styles.module.css'

export class AddFeedbackQuestion extends React.Component {

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

export default AddFeedbackQuestion;
