import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      <span>
        <MenuItem><Link to="/" style={{width: '100%', height: '100%', textDecoration: 'none', fontStyle: 'none', color: 'black'}}>Home</Link></MenuItem>
        <MenuItem><Link to="/profile" style={{width: '100%', height: '100%', textDecoration: 'none', fontStyle: 'none', color: 'black'}}>Profile</Link></MenuItem>
        <MenuItem><Link to="/external-api">External API</Link></MenuItem>
        <MenuItem><Link to='/events/create'>Create Event</Link></MenuItem>
        <MenuItem><Link to="/groups/create">Create Group</Link></MenuItem>
      </span>
    </div>
  );
};

export default NavBar;