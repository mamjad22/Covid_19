import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import InfoPanel from './InfoPanel';
import FootNav from './FootNav';

function App() {

  const screenConfig = useState(0);

  return (
    <div>
        <Header  />
        <InfoPanel currentScreen={screenConfig[0]}/>
        <FootNav screenConfig={screenConfig}/>
        
    </div>
    
    
  );
}

export default App;
