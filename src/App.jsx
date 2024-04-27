import React, { useState } from 'react';
import Registration from './components/Registration.jsx';
import ProfInf from './components/ProfileInfo.jsx';
import companelogo from "./assets/letter-c-black-gothic-4qtbjpmi1qtkymgg-fotor-bg-remover-20240415164424.png"
import cross from "./assets/free-icon-cross-sign-8212742.png"
import Finale from './components/Finale.jsx';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: "98vw" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: "93%", padding: '15px' }}>
          <div style={{ display: 'flex' }}>
            <img src={companelogo} style={{ height: '35px', marginBlockStart: '6px', marginBlockEnd: '10px' }} />
            <p style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '16px', color: 'black', marginLeft: '10px', whiteSpace: 'nowrap' }}>COMPANY NAME</p>
          </div>

          {step === 1 && <Registration onNext={handleNext} />}
          {step === 2 && <ProfInf onNext={handleNext} />}
          {step === 3 && <Finale />}

          <img src={cross} style={{ width: '35px', height: '35px', marginBlockStart: '12px', marginBlockEnd: '10px' }} />
        </div>
      </div>
    </>
  );
}

export default App;
