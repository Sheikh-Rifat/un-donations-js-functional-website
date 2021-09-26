import React from 'react';
import "./Header.css"
import logo from "../../images/logo-en.svg"
const Header = () => {
    return (
        <div>
         <div className="header">
            <div>
               <img src={logo} alt="" />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
         </div>
           
           <div className="header-details">
               <h1>Top Contributors</h1>
               <p><strong>
                    UNDP is funded by a diverse set of partners - Member States, multilateral partners, non-governmental entities, private and philanthropic sectors, and financial institutions. UNDP recognizes the important role of all its partners, and remains grateful for their continued trust and support.
                  </strong>
                </p>
                <h2>Total estimated donations : $1.5 Billion USD</h2>
           </div>
        </div>
    );
};

export default Header;