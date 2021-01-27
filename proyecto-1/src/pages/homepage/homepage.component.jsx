import React from 'react';

import Directory from '../../components/directory/directory.component';
//si lleva definición de lógica, usa llaves, sino paréntesis
const HomePage = () => (
    <div className = "homepage">
        <Directory></Directory>
    </div>
);

export default HomePage;