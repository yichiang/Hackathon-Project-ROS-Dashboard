import React, { PropTypes as T } from 'react'
import {Button,ProgressBar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import {AreaChart, BarChart,Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from 'Recharts';

// const data = [
//       {name: 'Page A', uv: 4000, past: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, past: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, past: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, past: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, past: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, past: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, past: 4300, amt: 2100},
// ];

const dataAreaChart = [
      {name: '05', now: 4000, past: 2400, amt: 2400},
      {name: '06', now: 3000, past: 1398, amt: 2210},
      {name: '07', now: 2000, past: 9800, amt: 2290},
      {name: '08', now: 2780, past: 3908, amt: 2000},
      {name: '09', now: 1890, past: 4800, amt: 2181},
      {name: '10', now: 2390, past: 3800, amt: 2500},
      {name: '11', now: 3490, past: 4300, amt: 2100},
];

const data = [{name: 'A', value: 400}, {name: 'B', value: 300},
                  {name: 'C', value: 300}, {name: 'D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
  console.log(cx,cy, midAngle, innerRadius, outerRadius, percent, index );
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  state ={
    showDefaultChart: true,
    showDefaultDishChart: true,
    hideSideBar: true,
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout() {
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  taggoleChioce(){
    this.setState({showDefaultChart: !this.state.showDefaultChart});
  }

  taggoleDishChioce(){
    this.setState({showDefaultDishChart: !this.state.showDefaultDishChart});
  }


  taggoleSideBar(){
    this.setState({hideSideBar: !this.state.hideSideBar});
  }

  render() {
    const { profile } = this.state
    return (
      <div className={styles.root}>
        {/* <h2>Home</h2> */}
        {/* <p>Welcome {profile.name}!</p> */}
        <div className={styles.nav}>
          <img className={this.state.hideSideBar? styles.hideLoginIcon : styles.loginIcon} src={require('../rosLogo_Fotor.png')}/>
          <Button onClick={this.logout.bind(this)}>Logout</Button>
        </div>
        <div className={styles.dashboard}>
          <div className={this.state.hideSideBar? styles.closeSideBar: styles.sideBar}>
            <div className={ [styles.tab, styles.welcomeText].join(' ')}>
              <img className={styles.avatar} src="https://avatars1.githubusercontent.com/u/17328624?v=3&s=460" />
              Welcome Yi
            </div>
            <div className={styles.tab}>
              <span className={"glyphicon glyphicon-home"}></span>
              Dashboard
            </div>
            <div className={styles.tab}>
              <span className={"glyphicon glyphicon-file"}></span>
              All Reviews
            </div>
            <div className={styles.tab}>
              <span className={"glyphicon glyphicon-lock"}></span>
              All Customers
            </div>
            <div className={styles.tab}>
              <span className={"glyphicon glyphicon-bookmark"}></span>
              Send Reward
            </div>
            <div className={styles.tab}>
              <span className={"glyphicon glyphicon-search"}></span>
              InBox
            </div>
          </div>
          <div className={this.state.hideSideBar? styles.closeBoard : styles.board}>

          {/* <div className={this.state.hideSideBar? styles.board: styles.pullRightBoard}> */}
            <span
              className={['glyphicon glyphicon-th-list', styles.toggleIcon].join(' ')}
              onClick={this.taggoleSideBar.bind(this)}
            ></span>
            <div className={styles.mainPanel}>
              {/* <div className={styles.panelCard}>
                <p>Total Received Feedback V.S Avage</p>
                <div className={styles.barAndText}>
                  <div className={styles.barsTitle}>
                    <p>Barbecue Chicken Sandwiches</p>

                    <p>Chicken Tostadas</p>

                    <p>Fried-Chicken Salad</p>

                    <p>Mediterranean Chicken</p>
                  </div>
                  <div className={styles.bars}>
                    <div className={styles.bar}>
                      <ProgressBar now={33} label={'33%'} />
                    </div>
                    <div className={styles.bar}>
                      <ProgressBar now={17} label={'17%'} />
                    </div>
                    <div className={styles.bar}>
                      <ProgressBar now={25} label={'25%'} />
                    </div>
                    <div className={styles.bar}>
                      <ProgressBar now={25} label={'25%'} />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className={styles.panelCard}>
                <div className={styles.cardTitle}>
                <p>Receive 5 Stars by dishes</p>
                <FormGroup controlId="formControlsSelect">
                 <FormControl componentClass="select" placeholder="select" onChange = {this.taggoleDishChioce.bind(this)}>
                   <option value="select"> Pie Chart </option>
                   <option value="other"> Progree Bar </option>
                 </FormControl>
               </FormGroup>
              </div>
               {this.state.showDefaultDishChart ?
                 <div className={styles.barAndText}>
                  <div className={styles.barsTitle}>
                     <p>Barbecue Chicken Sandwiches</p>

                     <p>Chicken Tostadas</p>

                     <p>Fried-Chicken Salad</p>

                     <p>Mediterranean Chicken</p>
                   </div>
                   <div className={styles.bars}>
                     <div className={styles.bar}>
                       <ProgressBar bsClass={styles.colorA} now={33} label={'33%'} />
                     </div>
                     <div className={styles.bar}>
                       <ProgressBar bsClass={styles.colorB} now={17} label={'17%'} />
                     </div>
                     <div className={styles.bar}>
                       <ProgressBar bsClass={styles.colorC} now={25} label={'25%'} />
                     </div>
                     <div className={styles.bar}>
                       <ProgressBar bsClass={styles.colorD} now={25} label={'25%'} />
                     </div>
                   </div>
               </div>
               :
               <div className={styles.pieAndLabel}>
                 <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
                 <Pie
                   data={data}
                   cx={100}
                   cy={100}
                   labelLine={false}
                   label={renderCustomizedLabel}
                   outerRadius={80}
                   fill="#8884d8"
                 >
                   {
                     data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                   }
                 </Pie>
                 </PieChart>
               <div>
                 <div className ={ styles.colorAndText}>
                   <div className={styles.colorBlock} style={{backgroundColor: COLORS[0]}}></div>
                   <p>Barbecue Chicken Sandwiches</p>
                 </div>
                 <div className ={ styles.colorAndText}>
                   <div className={styles.colorBlock} style={{backgroundColor: COLORS[1]}}></div>
                   <p>Chicken Tostadas</p>
                 </div>
                 <div className ={ styles.colorAndText}>
                   <div className={styles.colorBlock} style={{backgroundColor: COLORS[2]}}></div>
                   <p>Fried-Chicken Salad</p>
                 </div>
                 <div className ={ styles.colorAndText}>
                   <div className={styles.colorBlock} style={{backgroundColor: COLORS[3]}}></div>
                   <p>Mediterranean Chicken</p>
                 </div>
                </div>
              </div>
              }
              </div>
              <div className={styles.panelCard}>
                <div className={styles.cardTitle}>
                <p>Last Week Feedback vs This Week Feedback</p>
                <FormGroup controlId="formControlsSelect">
                 {/* <ControlLabel>Select</ControlLabel> */}
                 <FormControl componentClass="select" placeholder="select" onChange = {this.taggoleChioce.bind(this)}>
                   <option value="select">Bar Chart </option>
                   <option value="other"> Area Chart </option>
                 </FormControl>
                </FormGroup>
                </div>
                {this.state.showDefaultChart?
                  <BarChart width={500} height={250} data={dataAreaChart}>
                     <XAxis dataKey="name" stroke="#8884d8" />
                     <YAxis />
                     <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                     <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                     <Bar type="monotone" dataKey="now" fill="#8884d8" barSize={30} />
                   </BarChart>:
                  <AreaChart width={500} height={250} data={dataAreaChart}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="now" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="past" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                }
                <p>Feburary</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
