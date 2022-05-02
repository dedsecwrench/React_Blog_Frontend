import React, { useContext, useEffect, useState } from 'react'
import { BlogCon } from './../Context/BlogContext'
import { useNavigate } from 'react-router-dom';

const LatestArticles = () => {
  const [list] = useContext(BlogCon);
  const navigate = useNavigate();
  const goToDisplayContent = (id) => {
    navigate(`/home/${id}`)
  }
  const [items, setItems] = useState([]);
  const [fourPosts, setFourPosts] = useState(4);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let tempArr = []
    list.map((current) => {
      if (current.type === "LatestArticles") {
        tempArr.push(current)
      }
    })
    setItems([...items, ...tempArr])
  }, [fourPosts])

  const loadMore = () => {
    setFourPosts((prevValue) => prevValue + 4)
    console.log(fourPosts);
    setVisible(false)
  }

  return (
    <div>
      <div>
        <div className='LatestArticle'>Latest Articles<div className='line1'></div></div>
      </div>
      <div className='flexContainer'>
        <div className='bollyContainer'>
          {
            items.slice(0, fourPosts).map((current, index) => {
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

        <div className='LATopPostBox'>
          <div className='LAtopPost'>Top Posts</div>
          {
            list.map((current, index) => {
              if (current.type === "latestTopPost")
                return (
                  <div onClick={() => { goToDisplayContent(current.id) }} className='LAtopPosts' key={index}>
                    <div className='LAtopMainBox'>
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

      <div className='ad2'>
        Advertisement
      </div>

    </div>
  )
}

export default LatestArticles