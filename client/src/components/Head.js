import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()
  var login = localStorage.getItem('login');
  // var userEmail = user.email;
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
        <div className='headName'>Himanshu</div>
        <div>
          <button onClick={() => handleLogout()} className='headButton'>LogOut</button>
        </div>
      </div>
    </>
  )
}

export default Header