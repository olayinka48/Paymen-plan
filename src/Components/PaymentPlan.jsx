import React from 'react';
import Button from './Button';
import "../App.css";

function PaymentPlan({PackageName, Price, PlanTerm, WhatToGet1, WhatToGet2, WhatToGet3, WhatToGet4, WhatToGet5, }) {
  return (
    <main className='card--container'>
      <div className='card--header'>
          <h1 className='PackageName'>{PackageName}</h1>

          <h1 className='price'>{Price}</h1>

          <p className='plan--term'>{PlanTerm}</p>
      </div>
         <div className='whattoget--div'>
           <p className='whattoget--list'>{WhatToGet1}</p>
           <p className='whattoget--list'>{WhatToGet2}</p>
           <p className='whattoget--list'>{WhatToGet3}</p>
           <p className='whattoget--list'>{WhatToGet4}</p>
           <p className='whattoget--list'>{WhatToGet5}</p>
         </div>
        <div className='btn-div'>
        <Button />
        </div>
    </main>
   
  )
}

export default PaymentPlan