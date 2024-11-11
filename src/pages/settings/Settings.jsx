import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className='settingsUpdateTitle'>Update your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile picture</label>
          <div className='settingsPP'>
            <img
              src="https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type='file' id='fileInput' style={{display :"none"}} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Zohaib Younas' />
          <label>Email</label>
          <input type='email' placeholder='zohaiby@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
