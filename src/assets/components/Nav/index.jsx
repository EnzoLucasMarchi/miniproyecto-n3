const Nav = () => {
    return (
        <>
            <nav className="nav-bar">
                <img className="logo"></img>
                <div className="search-container">
                    <input type="text" id="location" placeholder="Add Location" />
                    <input type="text" id="guests" placeholder="Add guests" />
                    <button className="btn-search" type="button" id="search">
                        <icon className="search-icon"></icon>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Nav;