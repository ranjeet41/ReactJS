import React from 'react';
import MedWhiz1 from '../MedWhiz1.png';
import MedWhiz2 from '../MedWhiz2.png';
import "./Header.css";
const Header = () => {
    return (
        <div>

            <nav className="navbar-example2" class="navbar  bg-light px-4  fixed-top">
                
                <a class="navbar-brand" href="#"><img className="Med2" src={MedWhiz1} /></a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" ><img className="Med2" src={MedWhiz2} /></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                            role="button" aria-expanded="false"><pr>College Admin ...</pr></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Setting</a></li>
                            <li><a class="dropdown-item">SignOut</a></li>
                        </ul>
                    
                    </li>
                </ul>
            </nav>
        </div>)
}
export default Header;