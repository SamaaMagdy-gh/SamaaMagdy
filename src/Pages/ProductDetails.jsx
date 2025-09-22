import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFavorite } from './Recoil/Hook';
const ProductDetails = () => {
    const value = useLocation().state.value;
    const [hoveredFavButton, setHoveredFavButton] = useState(false);
    const { addFavorite, isInFavorites } = useFavorite();

    const handleAddToFavorite = (item) => {
        const wasAdded = addFavorite(item);

        if (wasAdded) {
            alert("Item added to favorites");
        } else {
            alert("Item removed from favorites");
        }
    }

   
    const imageStyle = {
        height: '700px',
        width: 'auto',
        objectFit: 'cover',
        borderRadius: "10px 10px 0 0", 
    };

    const titleStyle = {
        color: "#a75000ff", 
        fontWeight: "bold",
        fontSize: "1.5rem",
    };

    const textStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: "#813400ff",
    };

    const cardStyle = {
        maxWidth: "1200px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient( to right,#FCE7C8,#FADA7A)",
        
        borderRadius: "10px",
    };

    const favoriteButtonLinkStyle = {
        backgroundColor: "#284a4aff",
        border: "none",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 20px",
        fontWeight: "500",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px rgba(40, 74, 74, 0.2)",
        textDecoration: "none",
        display: "inline-block"
    };

    const favoriteButtonLinkHoverStyle = {
        backgroundColor: "#df1414b5",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(223, 20, 20, 0.3)"
    };

    return (
        <>
            <div className="card mb-3" style={cardStyle}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={value.image} className="card-img-top" alt="..." style={imageStyle} />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title" style={titleStyle}>{value.name}</h5>
                            <p className="card-text" style={textStyle}><strong>Ingredients:</strong> {value.ingredients}</p>
                            <p className="card-text" style={textStyle}><strong>Instructions:</strong> {value.instructions}</p>
                            <p className="card-text" style={textStyle}><strong>Prep Time:</strong> {value.prepTimeMinutes} minutes</p>
                            <p className="card-text" style={textStyle}><strong>Cook Time:</strong> {value.cookTimeMinutes} minutes</p>
                            <p className="card-text" style={textStyle}><strong>Servings:</strong> {value.servings}</p>
                            <p className="card-text" style={textStyle}><strong>Difficulty:</strong> {value.difficulty}</p>
                            <p className="card-text" style={textStyle}><strong>Cuisine:</strong> {value.cuisine}</p>
                            <p className="card-text" style={textStyle}><strong>Calories per Serving:</strong> {value.caloriesPerServing}</p>
                            <p className="card-text" style={textStyle}><strong>Tags:</strong> {value.tags}</p>
                            <p className="card-text" style={textStyle}><strong>Rating:</strong> {value.rating}</p>
                            <p className="card-text" style={textStyle}><strong>Meal Type:</strong> {value.mealType}</p>

                            <button
                                onClick={() => handleAddToFavorite(value)}
                                className="btn"
                                style={
                                    hoveredFavButton ?
                                        { ...favoriteButtonLinkStyle, ...favoriteButtonLinkHoverStyle } :
                                        favoriteButtonLinkStyle
                                }
                                onMouseEnter={() => setHoveredFavButton(true)}
                                onMouseLeave={() => setHoveredFavButton(false)}
                            >
                               
                                {isInFavorites(value) ? "Remove from Favorite" : "Add to Favorite"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails