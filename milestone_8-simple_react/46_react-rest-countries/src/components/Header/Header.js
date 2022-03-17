import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/home">home</a>
                    </li>
                    <li>
                        <a href=".shop">Shop</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;