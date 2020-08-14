import React from 'react';

import image404 from '../../assets/images/xostake_404.png';

import './styles.css';

function NotFound() {
    return (
        <div id="not-found">
            <div class="not-found-wrapper">
                <img 
                    src={image404} 
                    alt="Not found seus vagabundo" 
                    class='not-found-image'
                />
                
                <div class="not-found-text-wrapper">
                    <h1>Esta página pegou fogo.</h1>
                    <h3>Verifique o endereço, seus vagabundo.</h3>
                </div>
            </div>
        </div>

    );
}

export default NotFound;