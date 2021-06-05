import Head from './components/Head';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './GlobalStyle.css'
import './Css/Screen.css'
import './Css/NavScreen.css'
import './Css/Screen.css'

import NumericKeypad from './components/NumericKeypad';
import DefaulScreen from './pages/DefaulScreen';
import BtnFuncs from './components/BtnFuncs';
import MenuScreen from './pages/MenuScreen';
import NavScreen from './pages/NavScreen';
import TRKScreen from './pages/TRKScreen';
import InfoScreen from './pages/InfoScreen';
import SetupScreen from './pages/SetupScreen';
import Beacon from './pages/Beacon';
import PKIInfo from './pages/PKIInfo';
import GNSS from './pages/GNSS';
import CurrentRoute from './pages/CurrentRoute';
import RouteList from './pages/RouteList';
import Parametest from './pages/Parametest';
import Basicinfo from './pages/Basicinfo';
import Channel from './pages/Channel';
import PKIALM from './pages/PKIALM';
import NewWPT from './pages/NewWPT';
import Units from './pages/Units';
import Apriori from './pages/Apriori';
import Limitation from './pages/Limitation';
import parameterEll from './pages/parameterEll';
import GNSSinfo from './pages/GNSSinfo';
import NavControl from './pages/NavControl';
import Sound from './pages/Sound';
import LinkControl from './pages/LinkControl';
import Real from './pages/Real';
import WTPList from './pages/WPTList';
import RTCM_port from './pages/RTCM_port';
import GPS_GN from './pages/GPS_GN';
import ICE from './pages/ICE';
import Routes from './pages/Routes';

function App() {
  return (
		<Router>
			<div className="main"> 
				<div className='main-wrapper'>
					<Head/>
					<div className='main-box'>
						<div className='block-screen'>
							<div className='screen'>
								<div className='screen-wrapper'>
									<Switch>
										<Route path='/' exact component={DefaulScreen} />

										<Route path='/menu' exact component={MenuScreen} />
										<Route path='/menu/nav' exact component={NavScreen} />
										
										<Route path='/menu/trk' exact component={TRKScreen} />
										<Route path='/trk/currentroute' exact component={CurrentRoute} />
										<Route path='/trk/routelist' exact component={RouteList} />
										<Route path='/trk/parametest' exact component={Parametest} />
										<Route path='/trk/newwtp' exact component={NewWPT} />
										<Route path='/trk/real' exact component={Real} />
										<Route path='/trk/wtplist' exact component={WTPList} />
										<Route path='/trk/wtplist/routes' exact component={Routes} />

										<Route path='/menu/info' exact component={InfoScreen} />
										<Route path='/menu/info/gnssinfo' exact component={GNSSinfo} />
										<Route path='/info/pkiinfo' exact component={PKIInfo} />
										<Route path='/info/gnss' exact component={GNSS} />
										<Route path='/info/gnssinfo/basic' exact component={Basicinfo} />
										<Route path='/info/pkiinfo/channel' exact component={Channel} />
										<Route path='/info/pkialm' exact component={PKIALM} />
										
										<Route path='/menu/setup' exact component={SetupScreen} />
										<Route path='/menu/setup/linkcontrol' exact component={LinkControl} />
										<Route path='/setup/linkcontrol/rtmc' exact component={RTCM_port} />
										<Route path='/setup/linkcontrol/ice' exact component={ICE} />
										<Route path='/menu/setup/control' exact component={NavControl} />
										<Route path='/menu/setup/control/sound' exact component={Sound} />
										<Route path='/setup/beacon' exact component={Beacon} />
										<Route path='/setup/gps' exact component={GPS_GN} />
										<Route path='/setup/control/units' exact component={Units} />
										<Route path='/setup/control/apriori' exact component={Apriori} />
										<Route path='/setup/control/limitation' exact component={Limitation} />
										<Route path='/setup/control/paramell' exact component={parameterEll} />

										<Route path='/test' exact component={parameterEll} />


									</Switch>
								</div>
							</div>
						</div>
						<div className='block-numb_key'>
							<NumericKeypad/>
						</div>
					</div>
					<div className=''>
						<BtnFuncs/>
					</div>
				</div>
			</div>
		</Router>
  );
}

export default App;
