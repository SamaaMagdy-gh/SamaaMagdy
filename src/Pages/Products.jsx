import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import { useFavorite } from './Recoil/Hook';
import './Products.css';

const Products = () => {
    const [data, setData] = useState([])
    const [hoveredButton, setHoveredButton] = useState(null);
    
         
    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then((res) => {
                console.log(res.data)
                setData(res.data.recipes)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const { favorite, count, addFavorite, isInFavorites } = useFavorite();
      
    const handleAddToFavorite = (value) => {
        const wasAdded = addFavorite(value);
                 
        if (wasAdded) {
            alert("Item added to favorites");
        } else {
            alert("Item removed from favorites");
        }
    }

    
    const cardStyle = {
        width: "18rem",
        backgroundColor: "#c8ede8ff",
        borderRadius: "15px",
        border: "1px solid #e0f2f1",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden"
    };

    const cardHoverStyle = {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 25px rgba(30, 156, 156, 0.15)"
    };

    const imageStyle = {
        height: '220px', 
        objectFit: 'cover',
        borderRadius: "15px 15px 0 0",
        width: "100%"
    };

    const titleStyle = {
        color: "#1E9C9C",
        fontWeight: "600",
        fontSize: "1.2rem",
        marginBottom: "15px"
    };

    const recipeButtonStyle = {
        backgroundColor: "#1E9C9C",
        border: "none",
        color: "#fff",
        borderRadius: "8px",
        padding: "8px 16px",
        fontWeight: "500",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px rgba(30, 156, 156, 0.2)"
    };

    const recipeButtonHoverStyle = {
        backgroundColor: "#16807f",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(30, 156, 156, 0.3)"
    };

    const favoriteButtonStyle = {
        border: '2px solid #e0e0e0',
        backgroundColor: 'transparent',
        borderRadius: '8px',
        padding: '8px 12px',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const favoriteButtonHoverStyle = {
        border: '2px solid #ff6b7a',
        backgroundColor: '#ffeef0',
        transform: 'scale(1.05)'
    };

    const favoriteButtonActiveStyle = {
        border: '2px solid #ff4757',
        backgroundColor: '#ffe0e1'
    };
        
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {data.map((value, index) => (
                        <div key={value.id || index} className="col-lg-4 col-md-6 mb-4">
                            <div 
                                className="card shadow-sm" 
                                style={cardStyle}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, cardHoverStyle);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                                }}
                            >
                                <img 
                                    src={value.image} 
                                    className="card-img-top" 
                                    alt={value.name} 
                                    style={imageStyle} 
                                />
                                <div className="card-body" style={{ padding: '20px' }}>
                                    <h5 className="card-title" style={titleStyle}>
                                        {value.name}
                                    </h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/ProductDetails" state={{ value }}>
                                            <button 
                                                className="btn"
                                                style={hoveredButton === `recipe-${index}` ? 
                                                    {...recipeButtonStyle, ...recipeButtonHoverStyle} : 
                                                    recipeButtonStyle
                                                }
                                                onMouseEnter={() => setHoveredButton(`recipe-${index}`)}
                                                onMouseLeave={() => setHoveredButton(null)}
                                            >
                                                View Recipe
                                            </button>
                                        </Link>
                                                                         
                                        <button
                                             onClick={() => handleAddToFavorite(value)}
                                             className="btn"
                                            style={
                                                isInFavorites(value) ? 
                                                    {...favoriteButtonStyle, ...favoriteButtonActiveStyle} : 
                                                    (hoveredButton === `fav-${index}` ? 
                                                        {...favoriteButtonStyle, ...favoriteButtonHoverStyle} :
                                                        favoriteButtonStyle)
                                            }
                                            onMouseEnter={() => setHoveredButton(`fav-${index}`)}
                                            onMouseLeave={() => setHoveredButton(null)}
                                        >
                                            <GrFavorite 
                                                size={20} 
                                                color={
                                                    isInFavorites(value) ? '#ff4757' : 
                                                    (hoveredButton === `fav-${index}` ? '#ff6b7a' : '#666')
                                                } 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products