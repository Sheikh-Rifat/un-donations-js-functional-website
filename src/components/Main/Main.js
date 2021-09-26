import React, { useEffect, useState } from 'react';
import Contributors from '../Contributors/Contributors';
import Total from '../Total/Total';
import "./Main.css"
const Main = () => {

  // calling states for changes in different directories
    const [contributors, setContributors]=useState([]);
    const [total,setTotal]=useState([]);

    // using effect to fetch data
    useEffect(()=>{
        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setContributors(data))
    },[])
    
    // declaring event handler function
    const handleDonationTotal=(donate)=>{
      const newTotal=[...total,donate]
      setTotal(newTotal);
    }

    return (
        <div className="container">
          <div className=" row mt-5 pb-5">

            {/* cards section */}
             <div className="col-md-8 border-end border-light">
                 <h1 className="text-light mb-5">Donators</h1>
               <div className="row row-cols-1 row-cols-md-3 g-4 pe-2" >
                  {
                    contributors.map(contributor=><Contributors 
                      key={contributor.id} 
                      contributor={contributor}
                      handleDonationTotal={handleDonationTotal}
                      />)
                  }
               </div>
             </div>
 
            {/* colum for total details */}
             <div className="col-md-4">
                    <Total total={total}/>
                 
             </div>
         
          </div>
       </div>
      
       
    );
};

export default Main;