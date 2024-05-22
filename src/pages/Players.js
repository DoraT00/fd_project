import React, {useState} from 'react'
import '../css/Players.css'
import testdata from '../assets/testdata.js'

const Players = () => {
  const data_ = testdata
  const [data, setData] = useState(data_)

  return (
    <div className='body_players'>
      <div className='Players'>Игроки</div>
      <input placeholder='Поиск...'/>
      <div className='Cards'>
        {data.map((item) => (
          <div className='Player'>
          <img src={require('../assets/player_head.png')} alt='player'/>
          <div className='info_player'>
            <span id='name'>{item.name}</span>
            <br/>
            <span>Наиграно: {item.hours} ч.</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Players
