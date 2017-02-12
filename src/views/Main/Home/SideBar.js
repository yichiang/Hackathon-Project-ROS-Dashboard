import React, { PropTypes as T } from 'react'

import styles from './styles.module.css'

export class SideBar extends React.Component {

  // state ={
  //   hideSideBar: true,
  // }
  //
  //
  // taggoleSideBar(){
  //   this.setState({hideSideBar: !this.state.hideSideBar});
  // }

  render() {
    return (
          <div className={this.props.hideSideBar? styles.closeSideBar: styles.sideBar}>
            <div className={ [styles.tab, styles.welcomeText].join(' ')}>
              <img className={styles.avatar} src="https://avatars1.githubusercontent.com/u/17328624?v=3&s=460" />
              Welcome {this.props.name}
            </div>
            <div className={[styles.tab, styles.activeTab].join(' ')} onClick ={() => this.props.onClickTab('dashboard')}>
              <span className={"glyphicon glyphicon-home"}></span>
              Dashboard
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('reviews')}>
              <span className={"glyphicon glyphicon-file"}></span>
              All Reviews
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('customers')}>
              <span className={"glyphicon glyphicon-lock"}></span>
              All Customers
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('reward')}>
              <span className={"glyphicon glyphicon-bookmark"}></span>
              Send Reward
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('menu')}>
              <span className={"glyphicon glyphicon-plus"}></span>
              Add Menu
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('feedback')}>
              <span className={"glyphicon glyphicon-ok-sign"}></span>
              Add FeedBack
            </div>
            <div className={styles.tab} onClick ={() => this.props.onClickTab('customers')}>
              <span className={"glyphicon glyphicon-envelope"}></span>
              InBox
            </div>
          </div>
    )
  }
}

export default SideBar;
