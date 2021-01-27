import React from 'react';

import './collection-item.styles.scss';

//id viene por defecto( dado que lo pasamos desde el componente padre), no es necesario especificarlo
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className ="collection-item">
        <div className="image"
        style = {{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className = "collection-footer">
            <span className="name" >{name}</span>
            <span className = "price">{price}</span>
        </div>
    </div>
);

export default CollectionItem;