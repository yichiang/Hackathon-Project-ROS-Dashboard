import React, { PropTypes as T } from 'react'
import { Panel, FormGroup } from 'react-bootstrap'
import styles from './styles.module.css'

export class ReviewDetail extends React.Component {

  render() {
    return (
        <div className={styles.panelCard}>
          <Panel bsStyle="primary">
            {this.props.customer.last_name}
           </Panel>
        </div>
    )
  }
}

export default ReviewDetail;
