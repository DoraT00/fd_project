import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='body'>
      <img className='logo' src={require('../assets/fglogo.png')} alt='logofg' />
      <div className='buttons'>
        <button><p>Профиль</p></button>
        <button><p>Игроки</p></button>
        <button><p>Торговля</p></button>
        <button><p>Интерактивная карта</p></button>
        <button><p>Мои карточки</p></button>
        <button className='notice'><p>Уведомления</p></button>
      </div>
    </div>
  )
}

export default Navbar
