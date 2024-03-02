
import './App.css';
import Navbar from './components/NAvbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


import { BrowserRouter as Router}from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');//deafult setas dark mode
//agr ek curly braces lgaoge to js or 2 lgao ge to object
const [alert, setAlert] = useState(null);

const showAlert= (message,type)=>{
    setAlert({
    msg : message,
    type : type
})
setTimeout(()=>{
  setAlert(null)//null kar de raha 3 sec 
},2000)

}
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.color="white";
      document.body.style.backgroundColor="#41464b";
      showAlert("Dark mode is enabled","succes");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color="black";
      showAlert("enabled light mode","succes");
    }
  }
  return (
    <>
        {/* <Router> */}
       <Navbar title="Text frame" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
        {/* <Switch>
             <Route path="/About" Component={About}/>
         
          <Route path="/"><TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
          </Route>
 
        </Switch> */}
   
          
       <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
       <About heading="About us"/>
      
        </div>
       {/* </Router> */}
      
    </>
    

  );
}

export default App;
