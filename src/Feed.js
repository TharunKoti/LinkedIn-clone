import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
    const [msg, setMsg] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: msg,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMsg('');
    }

  return (
    <div className="feed">
        <div className='feed_inputcontainer'>
            <div className="feed_input">
                <CreateIcon />
                <form >
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} type="text" />
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed_inputoptions">
                <InputOption Icon={ImageIcon} color='#7085f9' title='Photo' />
                <InputOption Icon={SubscriptionsIcon} color='#e7a33e' title='Video' />
                <InputOption Icon={EventNoteIcon} color='#c0cbcd' title='Event' />
                <InputOption Icon={CalendarViewDayIcon} color='#7fc15e' title='Write Article' />
            </div>
        </div>
        {posts.map(({ id, data: {name, description, message, photoUrl} }) => {
            return <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        })}
    </div>
  )
}

export default Feed