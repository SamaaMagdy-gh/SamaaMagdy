import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { MdRestaurantMenu } from "react-icons/md";

const Home = () => {
    const [featuredRecipes, setFeaturedRecipes] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [loading, setLoading] = useState(true);



    const fetchRandomRecipes = async () => {
        //async عشان اعرف اعمل جواها await يعني استنى البيانات من الانترنت بدب ما اكمل من غيرهم
        setLoading(true);
        // عشان لما اريلود يجيب انه لودينج
        try {
            // اي كود جوه لو فيه ايريور هيقف ويخش على الكاتش
            const response = await fetch('https://dummyjson.com/recipes?limit=50');
            const data = await response.json();


            const randomRecipes = [];
            const usedIndices = new Set();
            // عشان ما يجيب نفس الريسيبي اكتر من مرة

            while (randomRecipes.length < 3 && usedIndices.size < data.recipes.length) {
                const randomIndex = Math.floor(Math.random() * data.recipes.length);
                if (!usedIndices.has(randomIndex)) {
                    usedIndices.add(randomIndex);
                    randomRecipes.push(data.recipes[randomIndex]);
                }
                // لو الرقم مش موجود يجيبه يستخدمه ويزوده ضمن ال 3
            }

            setFeaturedRecipes(randomRecipes);
            // بعد ما جبت ال3 , اخزنهم هنا بقى
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setFeaturedRecipes([
                {
                    id: 1,
                    name: "Chicken Tikka Masala",
                    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
                    prepTimeMinutes: 20,
                    servings: 4,
                    difficulty: "Medium",
                    rating: 4.9
                },
                {
                    id: 2,
                    name: "Vegetable Stir Fry",
                    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
                    prepTimeMinutes: 15,
                    servings: 3,
                    difficulty: "Easy",
                    rating: 4.7
                },
                {
                    id: 3,
                    name: "Chocolate Chip Cookies",
                    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
                    prepTimeMinutes: 25,
                    servings: 6,
                    difficulty: "Easy",
                    rating: 4.8
                }
            ]);
        } finally {
            setLoading(false);
        }
        // دايما في الاخر هقفل اللودينج سواء جاب او  لا 
    };

    useEffect(() => {
        fetchRandomRecipes();
    }, []);
    // ده ريأكت هوك ,عشان اول ما الصفحة تحمل يجيبلي 3 وصفات عشوائية

    // Styles
    const heroSectionStyle = {
        background: 'linear-gradient(135deg, #1E9C9C , #CADCAE )',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
    };

    const heroContentStyle = {
        maxWidth: '600px',
        zIndex: 2
    };

    const heroTitleStyle = {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    };

    const heroSubtitleStyle = {
        fontSize: '1.3rem',
        marginBottom: '30px',
        opacity: 0.9
    };

    const ctaButtonStyle = {
        backgroundColor: '#EDA35A',
        border: 'none',
        color: '#fff',
        padding: '15px 30px',
        borderRadius: '50px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(237, 163, 90, 0.4)',
        cursor: 'pointer'
    };

    const ctaButtonHoverStyle = {
        backgroundColor: '#d4934a',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(237, 163, 90, 0.6)'
    };

    const sectionStyle = {
        padding: '80px 0',
        backgroundColor: '#f8fffe'
    };

    const sectionTitleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#1E9C9C',
        textAlign: 'center',
        marginBottom: '50px'
    };

    const featureCardStyle = {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '40px 30px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        height: '100%'
    };

    const featureCardHoverStyle = {
        transform: 'translateY(-10px)'
    };

    const featureIconStyle = {
        fontSize: '3rem',
        color: '#1E9C9C',
        marginBottom: '20px'
    };

    const recipeCardStyle = {
        backgroundColor: '#c8ede8ff',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        height: '100%'
    };

    const recipeCardHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 35px rgba(30, 156, 156, 0.2)'
    };

    const recipeImageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    };

    const recipeInfoStyle = {
        padding: '20px'
    };

    const recipeTitleStyle = {
        color: '#1E9C9C',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '15px'
    };

    const recipeMetaStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.9rem',
        color: '#666',
        marginBottom: '15px'
    };

    const viewButtonStyle = {
        backgroundColor: '#1E9C9C',
        border: 'none',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        width: '100%',
        cursor: 'pointer'
    };

    const viewButtonHoverStyle = {
        backgroundColor: '#16807f',
        transform: 'translateY(-2px)'
    };

    const statsStyle = {
        backgroundColor: '#1E9C9C',
        color: '#fff',
        padding: '60px 0'
    };

    const statNumberStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        display: 'block'
    };

    const statLabelStyle = {
        fontSize: '1.1rem',
        opacity: 0.9
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={heroSectionStyle}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div style={heroContentStyle}>
                                <h1 style={heroTitleStyle}>
                                    Welcome to Foodak
                                    <span style={{ marginLeft: '15px', color: '#EDA35A' }}><MdRestaurantMenu /></span>
                                </h1>
                                <p style={heroSubtitleStyle}>
                                    Discover amazing recipes, save your favorites, and cook delicious meals for your family and friends.
                                </p>
                                <Link to="/Products" style={{ textDecoration: 'none' }}>
                                    <button
                                        style={hoveredButton === 'cta' ?
                                            { ...ctaButtonStyle, ...ctaButtonHoverStyle } : ctaButtonStyle
                                        }
                                        onMouseEnter={() => setHoveredButton('cta')}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        onClick={() => console.log('Navigate to Products')}
                                    >
                                        Explore Recipes
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ textAlign: 'center', fontSize: '15rem', opacity: 0.3 }}>
                                🍳
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={sectionStyle}>
                <div className="container">
                    <h2 style={sectionTitleStyle}>Why Choose Foodak?</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div
                                style={featureCardStyle}
                                onMouseEnter={(e) => Object.assign(e.target.style, featureCardHoverStyle)}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                <div style={featureIconStyle}>🍽️</div>
                                <h4 style={{ color: '#1E9C9C', marginBottom: '15px' }}>Diverse Recipes</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    Explore hundreds of recipes from different cuisines around the world
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div
                                style={featureCardStyle}
                                onMouseEnter={(e) => Object.assign(e.target.style, featureCardHoverStyle)}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                <div style={featureIconStyle}>⏱️</div>
                                <h4 style={{ color: '#1E9C9C', marginBottom: '15px' }}>Quick & Easy</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    Find recipes that fit your schedule with clear prep and cook times
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div
                                style={featureCardStyle}
                                onMouseEnter={(e) => Object.assign(e.target.style, featureCardHoverStyle)}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                <div style={featureIconStyle}>⭐</div>
                                <h4 style={{ color: '#1E9C9C', marginBottom: '15px' }}>Save Favorites</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    Keep track of your favorite recipes for easy access anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Recipes */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E9C9C', margin: 0 }}>
                            Featured Recipes
                        </h2>
                        <button
                            style={{
                                backgroundColor: '#EDA35A',
                                border: 'none',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 10px rgba(237, 163, 90, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#d4934a';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#EDA35A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                            onClick={fetchRandomRecipes}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Get New Recipes 🔄'}
                        </button>
                    </div>

                    <div className="row">
                        {loading ? (
                            // Loading skeleton
                            [1, 2, 3].map((_, index) => (
                                // _معناها مش هستخدم القيمة دي
                                <div key={index} className="col-md-4 mb-4">
                                    <div style={{
                                        ...recipeCardStyle,
                                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                        backgroundSize: '200% 100%',
                                        animation: 'loading 1.5s infinite'
                                        // بيخلي الخلفية تتحرك كأنها لودينج
                                    }}>
                                        <div style={{ height: '200px', backgroundColor: '#e0e0e0' }}></div>
                                        <div style={recipeInfoStyle}>
                                            <div style={{ height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '15px' }}></div>
                                            <div style={{ height: '15px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '15px', width: '80%' }}></div>
                                            <div style={{ height: '35px', backgroundColor: '#e0e0e0', borderRadius: '20px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            featuredRecipes.map((recipe, index) => ( 
                                <div key={recipe.id} className="col-md-4 mb-4">
                                    <div
                                        style={hoveredCard === index ?
                                            { ...recipeCardStyle, ...recipeCardHoverStyle } :
                                            recipeCardStyle
                                        }
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <img
                                            src={recipe.image}
                                            alt={recipe.name}
                                            style={recipeImageStyle}
                                        />
                                        <div style={recipeInfoStyle}>
                                            <h5 style={recipeTitleStyle}>{recipe.name}</h5>
                                            <div style={recipeMetaStyle}>
                                                <span>⏱️ {recipe.prepTimeMinutes}m</span>
                                                <span>👥 {recipe.servings}</span>
                                                <span>⭐ {recipe.rating}</span>
                                            </div>
                                            <Link to="/ProductDetails" state={{ value: recipe }} style={{ textDecoration: 'none' }}>
                                                <button
                                                    style={hoveredButton === `recipe-${index}` ?
                                                        { ...viewButtonStyle, ...viewButtonHoverStyle } : viewButtonStyle
                                                    }
                                                    onMouseEnter={() => setHoveredButton(`recipe-${index}`)}
                                                    onMouseLeave={() => setHoveredButton(null)}

                                                >
                                                    View Recipe
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </section>

          

        
            <section style={{ padding: '80px 0', backgroundColor: '#CADCAE', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', color: '#1E9C9C', marginBottom: '20px' }}>
                        Ready to Start Cooking?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                        Join thousands of home cooks and discover your next favorite recipe today!
                    </p>

                    <Link to="/Products" style={{ textDecoration: 'none' }}>
                        <button
                            style={hoveredButton === 'final-cta' ?
                                { ...ctaButtonStyle, fontSize: '1.2rem', padding: '18px 40px', ...ctaButtonHoverStyle } :
                                { ...ctaButtonStyle, fontSize: '1.2rem', padding: '18px 40px' }
                            }
                            onMouseEnter={() => setHoveredButton('final-cta')}
                            onMouseLeave={() => setHoveredButton(null)}
                            onClick={() => console.log('Navigate to All Recipes')}
                        >
                            Browse All Recipes
                        </button>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Home;