import React, { useContext } from 'react'
import { BlogCon } from './Context/BlogContext'
import LatestArticles from './HomeComps/LatestArticles'
import LatestStories from './HomeComps/LatestStories'
import TheLatest from './HomeComps/TheLatest'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [list] = useContext(BlogCon);
  const navigate = useNavigate();
  const goToDisplayContent = (id) => {
    navigate(`/${list[id].category}/${id}`)
  }

  return (
    <div>

      <div className='homeContainer'>
        <div className='first'>
          {list.map((current) => {
            if (current.type === "Travel" && current.id === 0) {
              return (
                <div key={current.id}>
                  <div onClick={() => { goToDisplayContent(current.id) }} className='Home-1' >
                    <img className='img-home1' src={current.img} alt="" />
                  </div>
                  <span className='home-1-title'>{current.title}</span>  <br />
                  <span className='home-1-date'>{current.type} / {current.date}</span>
                </div>
              )
            }
          })}

        </div>
        <div className='second'>
          {list.map((current) => {
            if (current.type === "home" && current.id !== 0 && current.category === "Travel") {
              return (<div key={current.id}>
                <div onClick={() => { goToDisplayContent(current.id) }} className='Home-2' >
                  <img className='img-home2' src={current.img} alt="" />
                  <span className='home-2-title'>{current.title}</span>  <br />
                  <span className='home-2-date'>{current.type} / {current.date}</span>
                </div>
              </div>)
            }
          })}
        </div>
      </div>

      <br /><br /><br />
      <TheLatest />
      <LatestArticles />
      <LatestStories />

    </div>
  )
}

export default Home
