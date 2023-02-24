import { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useSignup } from '../../hooks/useSignup'
// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const {signup, error, isPending} = useSignup()
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null) //reset caso ja tenha selecionado
    let selected = e.target.files[0] //array de arquivos, [0] pega a primeira
    if(!selected){
      setThumbnailError('Please select a file')
      return //sai da função então não continua as outras consdições
    }
    if(!selected.type.includes('image')){
      setThumbnailError('File must be an image')
      return
    }
    if(selected.size > 100000){
      setThumbnailError('File size must be less than 100kb')
      return
    }
    setThumbnailError(null) //reseta caso tenha erro
    setThumbnail(selected)
    console.log('thumb updated')
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>sign up</h2>
        <label>
          <span>email:</span>
          <input
            required 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </label>
        <label>
          <span>display name:</span>
          <input
            required
            type="text" 
            onChange={(e) => setDisplayName(e.target.value)} 
            value={displayName}
          />
        </label>
        <label>
          <span>Profile thumbnail:</span>
          <input 
            required
            type="file"
            onChange={handleFileChange} 
          />
          {thumbnailError && <div className='error'>{thumbnailError}</div>}
        </label>
        {isPending && <button className="btn" disabled >Loading...</button>}
        {!isPending && <button className="btn">Sign up</button>}
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}