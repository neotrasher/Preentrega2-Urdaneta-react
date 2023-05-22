import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ products }) => {
    return (
        <div className="card m-3 align-items-center shadow p-3 mb-5 bg-body rounded" data-aos="fade-down" data-aos-duration="1000" style={{ width: '18rem' }}>
            <img className="card-img-top" src={products.imagen} alt={products.nombre} />
            <h5 className="card-title text-center mt-3">{products.nombre}</h5>
            <p>{products.description}</p>
            <h6 className="card-text text-center">{products.precio}</h6>
            <Link to={`/item/${products.id}`} className="btn btn-dark text-center">Ver Detalles</Link>
        </div>
    );
};

export default Item;