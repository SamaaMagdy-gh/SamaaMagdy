import React, { useState } from 'react'
import { BsFillBagHeartFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useFavorite } from './Recoil/Hook';

const Nav = () => {

  const { count } = useFavorite();

  const [hoveredFavNav, setHoveredFavNav] = useState(false);

  const favoritesButtonStyle = {
    backgroundColor: "#284a4aff", 
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

const favoritesButtonHoverStyle = {
    backgroundColor: "#df1414b5", 
    transform: "translateY(-3px)",
    boxShadow: "0 4px 15px rgba(223, 20, 20, 0.3)"
};

const badgeStyle = {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "#ff4757",
    color: "white",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    transition: "all 0.3s ease"
};

const badgeHoverStyle = {
    fontSize: "10px",
    top: "-8px",
    right: "-8px"
};

  const navbarStyle = {
    backgroundColor: "#1E9C9C", 
    color: "#fff", 
  };

  const navbarBrandStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#FEE8D9", 
  };

  const navItemStyle = {
    color: "#FEE8D9", 
    padding: "10px 15px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s",
  };


  const searchButtonStyle = {
    backgroundColor: "#EDA35A", 
    color: "#fff", 
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const searchButtonHoverStyle = {
    backgroundColor: "#084f5fff", 
  };




  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand" style={navbarBrandStyle}>Foodak<MdRestaurantMenu /></div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="nav-link active" style={navItemStyle} aria-current="page" href="#">Home</div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" style={navItemStyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Meals
                </div>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" href="#">All</div></li>
                  <li><div className="dropdown-item" href="#">Dinner</div></li>
                  <li><div className="dropdown-item" href="#">Lunch</div></li>
                  <li><div className="dropdown-item" href="#">Breakfast</div></li>
                  <li><div className="dropdown-item" href="#">Dessert</div></li>
                  <li><div className="dropdown-item" href="#">Beverage</div></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button
                className="btn me-3"
                style={searchButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = searchButtonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = searchButtonStyle.backgroundColor}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
         <Link to="/Favorites" style={{ textDecoration: 'none' }}>
    <button 
        style={
            hoveredFavNav ? 
                {...favoritesButtonStyle, ...favoritesButtonHoverStyle} : 
                favoritesButtonStyle
        }
        onMouseEnter={() => setHoveredFavNav(true)}
        onMouseLeave={() => setHoveredFavNav(false)}
    >
        <BsFillBagHeartFill 
            size={35} 
            color={hoveredFavNav ? "#fff" : "#c5b2b2ff"} 
        />
        {count >= 0 && (
            <span style={
                hoveredFavNav ? 
                    {...badgeStyle, ...badgeHoverStyle} : 
                    badgeStyle
            }>
                {count}
            </span>
        )}
    </button>
</Link>
        </div>
      </nav>


    </>
  )
}

export default Nav