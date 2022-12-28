import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOpt from './HeaderOpt';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search' className='search_input'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOpt Icon={HomeIcon} title='Home' />
            <HeaderOpt Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOpt Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOpt Icon={ChatIcon} title='Messaging' />
            <HeaderOpt Icon={NotificationsIcon} title='Notifications' />
            <HeaderOpt onClick={logoutApp} avatar={true} title='Me' />
        </div>
    </div>
  )
}

export default Header