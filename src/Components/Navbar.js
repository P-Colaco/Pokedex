import React from "react";

const Navbar = () => {
     const LogoImg =
     "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img
                    alt="Pokeapi-logo"
                    src={LogoImg}
                    className="navbar-img"
                    />
            </div>
        </nav>
    )
}

export default Navbar   