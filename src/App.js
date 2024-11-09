import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { Routes, Route } from "react-router-dom";
import TopProgress from "./components/TopProgress";

const App = () => {
  const [mode, setmode] = useState('light')
  const [progress, setProgress] = useState(0);
  const apikey=process.env.REACT_APP_MY_API_KEY
  const updatebar = (e) => {
    setProgress(e);
  }
  let togglemod=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#222222';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <TopProgress progra={progress} />
      <Routes>
        <Route exact path="/business" element={<><Navbar togglemod={togglemod} mode={mode} key='bus' active='bus' /> <NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='business' pagesize='9' country='in' category='business' /></>} />
        <Route exact path="/" element={<><Navbar togglemod={togglemod} mode={mode} key='gen' active='gen' /><NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='general' pagesize='9' country='in' category='general' /> </>} />
        <Route exact path="/entertainment" element={<><Navbar togglemod={togglemod} mode={mode} key='ent' active='ent' /> <NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='entertainment' pagesize='9' country='in' category='entertainment' /></>} />
        <Route exact path="/science" element={<><Navbar togglemod={togglemod} mode={mode} key='sci' active='sci' /> <NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='science' pagesize='9' country='in' category='science' /></>} />
        <Route exact path="/health" element={<><Navbar togglemod={togglemod} mode={mode} key='hea' active='hea' /> <NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='health' pagesize='9' country='in' category='health' /></>} />
        <Route exact path="/sports" element={<><Navbar togglemod={togglemod} mode={mode} key='spo' active='spo' /> <NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='sports' pagesize='9' country='in' category='sports' /></>} />
        <Route exact path="/technology" element={<><Navbar togglemod={togglemod} mode={mode} key='tec' active='tec' /><NewsComponent mode={mode} apikey={apikey} setprogress={updatebar} key='technology' pagesize='9' country='in' category='technology' /> </>} />
      </Routes>

    </>
  );


}
export default App;
