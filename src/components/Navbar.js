function Navbar(){
    return (
        <div className="nav">
            <div className="menu">
                <img src="https://cdn-icons.flaticon.com/png/512/2516/premium/2516745.png?token=exp=1641566811~hmac=60e0b8d7f5780e38a5e70cfca3528251" alt="menu" />
            </div>
            <div className="search">
                <input />
                <button className="search-btn">Search</button>

            {/* {showSearchResults &&
            (<div className="search-results">
                <div className="search-result">
                    <img src={movie.Poster} alt="search-pic"></img>
                    <div className="movie-info">
                        <span>{movie.Title}</span>
                        <button onClick={()=>this.handleSearchMovie(movie)}>Add to movies</button>
                    </div>
                </div>
            </div>
            )} */}
            </div>
            <div className="user">
                <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1641567197~hmac=c7fd77ed30b29e5a74a19d5359722940" alt="user" />
            </div>
        </div>
        );
}
export default Navbar;