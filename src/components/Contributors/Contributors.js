import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./Contributors.css"
const Contributors = (props) => {

    // console.log(props.contributor);
    
    // destructuring from props
     const {name,age,country,designation,donation,image,influence,netWorth}=props.contributor

    return (
        <div className="col">
           <div className="card h-100">
              <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-center text-light">
                        <h5 className="card-title">#{influence} {name}</h5>
                        <p className="card-text"><strong>{designation} of {country}</strong></p>
                        <p className="card-text"><strong>Age : {age}</strong></p>
                        <p className="card-text"><strong>Net Worth : {netWorth}</strong></p>
                        <h4>Donation : {donation}</h4>
                        
                        {/* adding button and font awesome icon */}
                        <button onClick={()=>props.handleDonationTotal(props.contributor)} className="btn btn-outline-light mt-5"><FontAwesomeIcon icon={faDollarSign} /> Collect Donation</button>
                </div>
            </div>
        </div>
    );
};

export default Contributors;