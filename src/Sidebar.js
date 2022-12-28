import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => {
        return <div className="sidebar_recentItem">
            <span className="recent_hash">#</span>
            <p>{topic}</p>
        </div>
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg" alt="" />
            <Avatar className='sidebar_avatar' src={user.photoUrl}>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statnum">500</p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statnum">300</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('ReactJS')}
            {recentItem('Programming')}
            {recentItem('Redux')}
        </div>
    </div>
  )
}

export default Sidebar