import { useCollection } from '../hooks/useCollection'
import {useAuthContext} from '../hooks/useAuthContext'
// components
import Avatar from './Avatar'

// styles
import './OnlineUsers.css'
import { useState } from 'react'

export default function OnlineUsers() {
  const {user} = useAuthContext() 
  const { isPending, error, documents } = useCollection('users')
  const [currentUser, setCurrentUser] = useState(user.uid)
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        user.id != currentUser ?
        <div key={user.id} className="user-list-item">
          {user.online ? <span className='online-user status-user'></span> : <span className='offline-user status-user'></span>}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div> : ''
      ))}
    </div>
  )
}