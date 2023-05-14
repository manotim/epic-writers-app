import React from 'react'
// import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  function handleSubmenu(e) {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} alt='stripe' className='nav-logo' /> */}
          <h3>Epic Writers</h3>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              find jobs
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              hire writers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <div className='login-btns'>
          <button className='btn signin-btn'>Login</button>
          <button className='btn signin-btn'>Sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
