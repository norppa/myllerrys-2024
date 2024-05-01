import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import './Navbar.css'

const DesktopNavbar = () => {

  return (
    <div className='Navbar'>
      <a id='logo' href='#Home'>Aitomäen Myllerrys</a>
      <div className='menu'>
        <div className='dropdown'>
          <a href='#Info'>INFO</a>
          <div className='dropdown-content'>
            <a href='#Teaching'>Opetus</a>
            <a href='#Jams'>Jamit</a>
            <a href='#Location'>Tapahtumapaikka</a>
            <a href='#Food'>Ruokailut</a>
            <a href='#Price'>Hinta</a>
          </div>
        </div>

        <div className='dropdown'>
          <a href='#Teachers'>OPETTAJAT</a>
          <div className='dropdown-content'>
            <a href='#Jari'>Jari Haavisto</a>
            <a href='#Maiju'>Maiju Laurila</a>
            <a href='#Arttu'>Arttu Peltoniemi</a>
          </div>
        </div>
        <a href='#Signup'>ILMOITTAUDU</a>
      </div>
    </div>
  )

}

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.icon')) {
      setShowMenu(false)
    }
    document.removeEventListener('click', closeMenu, true)

  }

  const onMenuIconClick = () => {
    console.log('onMenuIconClick', showMenu)
    setShowMenu(!showMenu)
    document.addEventListener('click', closeMenu, true)
  }

  return (
    <div className='Navbar mobile'>
      <a id='logo' href='#Home'>Aitomäen Myllerrys</a>
      <HiMenu className='icon' onClick={onMenuIconClick} />
      {showMenu && <div className='menu'>

        <a href='#Info'>INFO</a>
        <a href='#Teaching'>Opetus</a>
        <a href='#Jams'>Jamit</a>
        <a href='#Location'>Tapahtumapaikka</a>
        <a href='#Food'>Ruokailut</a>
        <a href='#Price'>Hinta</a>
        <div className='spacer' />

        <a href='#Teachers'>OPETTAJAT</a>
        <a href='#Jari'>Jari Haavisto</a>
        <a href='#Maiju'>Maiju Laurila</a>
        <a href='#Arttu'>Arttu Peltoniemi</a>
        <div className='spacer' />

        <a href='#Signup'>ILMOITTAUDU</a>
      </div>}
    </div>
  )
}

const Navbar = () => {
  return <>
    <DesktopNavbar />
    <MobileNavbar />
  </>
}

export default Navbar