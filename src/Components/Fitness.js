import React, { useContext, useEffect, useState } from 'react'
import { BlogCon } from './Context/BlogContext'
import { useNavigate } from 'react-router-dom';

const Fitness = () => {
  const [list] = useContext(BlogCon);
  const navigate = useNavigate();
  const goToDisplayContent = (id) => {
    navigate(`/Fitness/${id}`)
  }
  const [items, setItems] = useState([]);
  const [fivePosts, setFivePosts] = useState(5);
  const [visible, setVisible] = useState(true);
  const [clickCount, setClickCount] = useState(1)

  useEffect(() => {
    let tempArr = []
    list.map((current) => {
      if (current.category === "Fitness") {
        tempArr.push(current)
      }
    })
    setItems([...items, ...tempArr])
  }, [fivePosts])

  const loadMore = () => {
    setFivePosts((prevValue) => prevValue + 5)
    console.log(fivePosts);
    setClickCount(clickCount + 1)
    console.log(clickCount);
    if (clickCount === 2) {
      setVisible(false)
    }
  }

  return (
    <div>
      <div className='head-flex'>
        <div className='bollywood'>Fitness<div className='line1'></div></div>
        <div className='topPost'>Top Posts <div className='line1'></div></div>
      </div>
      <div className='flexContainer'>
        <div className='bollyContainer'>
          {
            items.slice(0, fivePosts).map((current, index) => {
              return (
                <div onClick={() => { goToDisplayContent(current.id) }} className='bollyPosts' key={index}>
                  <div className='bollymainBox'>
                    <div className='d card-img-left'><img className='img1' src={current.img} alt="" /></div>
                    <div className="card2">
                      <h5 className="card-title2">{current.title}</h5>
                      <p className="card-text2 text-muted">{current.shortDesc}</p>
                      <p className="card-text2"><small className="text-muted"><span id="cat2">{current.category}</span> / {current.date}</small></p>
                    </div>
                  </div>
                </div>
              )
            })
          }

          {visible && <div className='container loadmore-btn-div'>
            <button className='loadmore-btn btn-lg' onClick={loadMore}>LOAD MORE <span className='arrow'>&#8595;</span></button>
          </div>}
        </div>

        <div className='TopPostBox'>
          {
            list.map((current, index) => {
              if (current.category === "Fitness" && current.type === "topPost")
                return (
                  <div onClick={() => { goToDisplayContent(current.id) }} className='topPosts' key={index}>
                    <div className='topMainBox'>
                      <div className='T card-img-left'><img className='topPost-img' src={current.img} alt="" /></div>
                      <div className="card4">
                        <h5 className="card-title4">{current.title}</h5>
                        <p className="card-text4"><small className="text-muted"><span id="cat2">{current.category}</span> / {current.date}</small></p>
                      </div>
                    </div>
                  </div>
                )
            })
          }
        </div>
      </div>

      <div className='ad'>
           Advertisement
      </div>

    </div>
  )
}

export default Fitness