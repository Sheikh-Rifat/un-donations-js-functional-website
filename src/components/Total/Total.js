import React from 'react';
import "./Total.css"

const Total = (props) => {
    const {total}=props
     
    let donation=0;
   let donatorName=""
    for(const arr of total){
        donatorName=donatorName + arr.name
        donation += arr.donation
    }
    return (
        <div className="text-light">
            <h1 className="text-center">Donation Details</h1>
            <h5>Total Donators : {total.length}</h5>
            <h5>Total Donation : {donation}</h5>
            <h5>Donator Name: 
               {
                    total.map(name=><ul className="mt-3" key={name.id}><li>{name.name}</li></ul>)
               } </h5>
         
            
        </div>
    );
};

export default Total;