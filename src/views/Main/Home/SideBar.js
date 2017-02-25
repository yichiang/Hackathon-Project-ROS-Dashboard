import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class SideBar extends React.Component {
  render() {
    const allTabs = ['dashboard','reviews','customers', 'reward', 'menu', 'feedback', 'inbox'];
    const generateTab = allTabs.map(x => {
      return (
        <div className={[styles.tab, this.props.currentTabs === x ? styles.activeTab : null].join(' ')} onClick ={() => this.props.onClickTab(x)}>
          <span className={"glyphicon glyphicon-home"}></span>
          {x}
        </div>
      )
    })
    return (
          <div className={this.props.hideSideBar? styles.closeSideBar: styles.sideBar}>
            <div className={ [styles.tab, styles.welcomeText].join(' ')}>
              <img className={styles.avatar} src="https://avatars1.githubusercontent.com/u/17328624?v=3&s=460" />
                Welcome {this.props.name}
            </div>
              {generateTab}
          </div>
    )
  }
}

export default SideBar;
