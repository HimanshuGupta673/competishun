import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()
  var login = JSON.parse(localStorage.getItem('login'));
  const handleLogout = () => {
    localStorage.removeItem('login')
    toast.success('LogOut Successful')
    navigate('/login')
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className='head'>
        <div className='headName'>{login.name}</div>
        <div>
          <button onClick={() => handleLogout()} className='headButton'>LogOut</button>
        </div>
      </div>
    </>
  )
}

export default Header
