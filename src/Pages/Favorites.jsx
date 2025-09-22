import React, { useState } from 'react';
import { useFavorite } from './Recoil/Hook';
import { Link } from 'react-router-dom';
import { BsFillBagXFill } from "react-icons/bs";

const Favorites = () => {
  const { favorite, removeFavorite } = useFavorite();
  const [hoveredButton, setHoveredButton] = useState(null);

  const cardStyle = {
    backgroundColor: '#CADCAE',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(30, 156, 156, 0.15)'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover',
    width: '100%',
    borderRadius: '15px 15px 0 0'
  };

  const cardBodyStyle = {
    padding: '20px',
    color: '#333',
    fontFamily: 'Poppins, sans-serif',
  };

  const titleStyle = {
    color: '#1E9C9C',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#555',
    marginBottom: '10px'
  };

  const emptyMessageStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#333',
    marginTop: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  };

  const removeButtonStyle = {
    backgroundColor: "#1E9C9C",
    border: 'none',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 20px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(220, 53, 69, 0.2)',
    width: '100%',
    marginTop: '15px'
  };

  const removeButtonHoverStyle = {
    backgroundColor: '#c82333',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(220, 53, 69, 0.3)'
  };

  const handleRemoveFromFavorite = (item) => {
    removeFavorite(item);
    alert("Item removed from favorites");
  };

  return (
    <div className="container mt-4">
      {favorite.length === 0 ? (
        <div style={emptyMessageStyle}>
          <div>
            <BsFillBagXFill size={80} color="#ccc" />
          </div>
          <p>There are no favorite items</p>
          <Link to="/Products" style={{ color: '#1E9C9C', textDecoration: 'none' }}>
            <strong>Add To Your Favorites Now!</strong>
          </Link>
        </div>
      ) : (
        <div className="row">
          {favorite.map((value, index) => (
            <div key={value.id || index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div 
                className="card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, cardHoverStyle);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img 
                  src={value.item.image} 
                  className="card-img-top" 
                  alt={value.item.name} 
                  style={imageStyle} 
                />
                <div className="card-body" style={cardBodyStyle}>
                  <h5 className="card-title" style={titleStyle}>
                    {value.item.name}
                  </h5>
                  <p className="card-text" style={textStyle}>
                    <strong>Cuisine:</strong> {value.item.cuisine}
                  </p>
                  <p className="card-text" style={textStyle}>
                    <strong>Difficulty:</strong> {value.item.difficulty}
                  </p>
                  <p className="card-text" style={textStyle}>
                    <strong>Prep Time:</strong> {value.item.prepTimeMinutes} mins
                  </p>
                  
                  <button
                    className="btn"
                    style={
                      hoveredButton === index ?
                        { ...removeButtonStyle, ...removeButtonHoverStyle } :
                        removeButtonStyle
                    }
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => handleRemoveFromFavorite(value.item)}
                  >
                    Remove From Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;