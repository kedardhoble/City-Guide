// import './App.css';
import City from './componenets/City';
import Pune from './componenets/Cities/Pune';
import NavBar from './componenets/Navbar';
import SlideShow from './componenets/SlideShow';
import { Footer } from './componenets/Footer';
import Navtwo from './componenets/Navtwo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Mumbai } from './componenets/Cities/Mumbai';
import { PHistorical } from './componenets/Actiities/PHistorical';
import { Shaniwarwada } from './componenets/Cities/Spots/Shaniwarwada';
import { Sinhagad } from './componenets/Cities/Spots/Sinhagad';
import { Police } from './componenets/Cities/Spots/Police';
import { Hospital } from './componenets/Cities/Spots/Hospital';
import { Restaurants } from './Iconsbars/Restaurants';

const showHome =()=>{
    return(
      <div> <NavBar/>
      <SlideShow/>
      <City/>
      <Footer/>
        </div>
    ) 
}
const showPune =()=>{
  return(
    <div> <Navtwo/>
    <Pune/>
    </div>
  ) 
}
const showMumbai =()=>{
  return(
    <div> <Navtwo/>
    <Mumbai/>
    </div>
  ) 
}

const showPHisto =()=>{
  return(
    <div> <Navtwo/>
    <PHistorical/>
    <Footer/>
    </div>
  )   
}

const showShaniwarwada =()=>{
  return(
    <div> <Navtwo/>
    <Shaniwarwada/>
    <Footer/>
    </div>
  )
}

const showSinhagad =()=>{
  return(
    <div> <Navtwo/>
    <Sinhagad/>
    <Footer/>
    </div>
  )
}

const showRest =()=>{
  return(
    <div> <Navtwo/>
    <Restaurants/>
    <Footer/>
    </div>
  )
}

const showPolice =()=>{
  return(
    <div> <Navtwo/>
    <Police/>
    <Footer/>
    </div>
  )
}

const showHospital =()=>{
  return(
    <div> <Navtwo/>
    <Hospital/>
    <Footer/>
    </div>
  )
}
function App() {
  return (
    <div className="App">

<Router>
        <Switch>
          <Route exact path="/" component={showHome} />
          <Route exact path="/pune" component={showPune} />
          <Route exact path="/mumbai" component={showMumbai} />
          <Route exact path="/pune/police" component={showPolice} />
          <Route exact path="/pune/hospital" component={showHospital} />
          <Route exact path="/pune/historical" component={showPHisto} />
          <Route exact path="/pune/historical/restaurants" component={showRest} />
          <Route exact path="/pune/historical/shnaiwarwada" component={showShaniwarwada} />
          <Route exact path="/pune/historical/sinhagad" component={showSinhagad} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
