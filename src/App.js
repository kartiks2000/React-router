import React,{ useState } from 'react';
import { BrowserRouter , Route , NavLink , Link } from 'react-router-dom';

import './App.css';
import Student from './Student/Student';
import Studentinfo from './Studentinfo/Studentinfo';

function App() {

const [info,setinfo] = useState([
  {name : "Kartik saxena" ,id : "dnfjw894", contactnumber : 8974632974},
  {name : "yash saxena" ,id : "fwefh789tgfeiwy", contactnumber : 5342324},
  {name : "aryan saxena" ,id : "rgver434t", contactnumber :3463452425 },
  {name : "pavni saxena" ,id : "brtge42g", contactnumber : 43636452},
  {name : "oshi pradhan" ,id : "erg423ge4", contactnumber : 53523653},
  {name : "palak pradhan" ,id : "erg443gg4", contactnumber : 363252569},
]);

var z = info.map(i => {
    return (<div key={i.id}>
      <Link to={"/" + i.id}>
        <Student name={i.name} myid={i.id} contactnumber={i.contactnumber}></Student>
      </Link> 
    </div> 
  )
})

  return (
    <div className="App">
      <div className="btns">
        <nav>
          <li><NavLink to="/">students</NavLink></li>
          <li><NavLink to={"/" + "brtge42g"}>studentsinfo</NavLink></li>
        </nav>
      </div>
      <Route path="/" exact component={Student} />
      <Route path="/:id" exact component={Studentinfo} />
    </div>
  );
}

export default App;
