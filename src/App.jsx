import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import PaymentPlan from './Components/PaymentPlan';

export default function App() {

  return (
    <>
    <Navbar />
    <div className='plan-container'>
        <PaymentPlan 
          PackageName="HATCHLING PLAN"
          Price="$29" 
          PlanTerm="PER MONTH"
          WhatToGet1="✔ Unlimited Support" 
          WhatToGet2="✔ 5GB Server Space" 
          WhatToGet3="✔ 2 Users per Project" 
          WhatToGet4="❌ Email Integration" 
          WhatToGet5="❌ Unlimited Download"

          
          />
          
        {/*sjhdsjs*/}
        <PaymentPlan 
          PackageName="HATCHLING PLAN"
          Price="$29" 
          PlanTerm="PER MONTH"
          WhatToGet1="✔ Unlimited Support" 
          WhatToGet2="✔ 5GB Server Space" 
          WhatToGet3="✔ 2 Users per Project" 
          WhatToGet4="❌ Email Integration" 
          WhatToGet5="❌ Unlimited Download"

        /> 
        <PaymentPlan 
        PackageName="HATCHLING PLAN"
        Price="$29" 
        PlanTerm="PER MONTH"
        WhatToGet1="✔ Unlimited Support" 
        WhatToGet2="✔ 5GB Server Space" 
        WhatToGet3="✔ 2 Users per Project" 
        WhatToGet4="❌ Email Integration" 
        WhatToGet5="❌ Unlimited Download"

        />
    </div>
    </>
  );
}


