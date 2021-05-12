import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ searchValue, setSearchValue }) => {
  return (
    <StyledNav>
      <ul>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <li>
            <h3 id="Logo">Moviebuddy</h3>
          </li>
        </Link>
        <Link
          to="/favourites"
          style={{ color: "white", textDecoration: "none" }}
        >
          <li>Favourites</li>
        </Link>
        <li>
          <input
            className="search-box"
            type="text"
            placeholder="Type to search..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100%;
  background-color: rgb(8, 8, 8);
  padding: 2rem 5rem 2rem 5rem;
  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-box {
    height: 1.6rem;
    width: 20vw;
    border: none;
    border-radius: 2rem;
    padding-left: 1rem;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

export default Nav;
