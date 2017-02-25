import React, { PropTypes as T } from 'react'
import {Button,ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import {SideBar} from './SideBar'
import {Dashboard} from './Dashboard'
import {ReviewLog} from './ReviewLog'


export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile(),
      showDefaultChart: true,
      showDefaultDishChart: true,
      hideSideBar: false,
      currentTabs: 'dashboard',
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout() {
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  toggleChioce(){
    this.setState({showDefaultChart: !this.state.showDefaultChart});
  }

  toggleDishChioce(){
    this.setState({showDefaultDishChart: !this.state.showDefaultDishChart});
  }

  toggleSideBar(){
    this.setState({hideSideBar: !this.state.hideSideBar});
  }

  changeTab(tabName: string){
    this.setState({currentTabs: tabName});
  }

  render() {
    const { profile } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.nav}>
          <img className={this.state.hideSideBar? styles.hideLoginIcon : styles.loginIcon} src={require('../rosLogo_Fotor.png')}/>
          <Button onClick={this.logout.bind(this)}>Logout</Button>
        </div>
        <div className={styles.dashboard}>
          <SideBar
            hideSideBar={this.state.hideSideBar}
            name={profile.name}
            currentTabs ={this.state.currentTabs}
            onClickTab ={this.changeTab.bind(this)}
          />
          <div className={this.state.hideSideBar? styles.closeBoard : styles.board}>
            <p
              className={styles.toggleIcon}>
              <span
              className={['glyphicon glyphicon-th-list'].join(' ')}
              onClick={this.toggleSideBar.bind(this)}
              >
              </span>
            </p>
            {this.state.currentTabs == 'dashboard' &&  <Dashboard
                showDefaultDishChart={this.state.showDefaultDishChart}
                showDefaultChart={this.state.showDefaultChart}
                toggleChioce={this.toggleChioce.bind(this)}
                toggleDishChioce={this.toggleDishChioce.bind(this)}
              />
            }

            {this.state.currentTabs == 'reviews' &&  <ReviewLog

              />
            }
            {this.state.currentTabs == 'customers' &&  <Dashboard
                showDefaultDishChart={this.state.showDefaultDishChart}
                showDefaultChart={this.state.showDefaultChart}
                toggleChioce={this.toggleChioce.bind(this)}
                toggleDishChioce={this.toggleDishChioce.bind(this)}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
