import React, { useContext, useEffect, useState } from 'react'
import { BlogCon } from './Context/BlogContext'
import {
  FacebookShareButton, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon,
  EmailShareButton, EmailIcon
} from "react-share";
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DisplayContent = () => {
  const [list] = useContext(BlogCon);
  const { id } = useParams();
  const ID = Number(id)
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const url = window.location.href
  const [threePosts, setThreePosts] = useState(3);

  useEffect(() => {
    window.scrollTo(220, 220);
  }, [pathname]);

  const getRandom = () => {
    let randomItem1 = Math.floor(Math.random() * list.length)
    let randomItem2 = Math.floor(Math.random() * list.length)
    let randomItem3 = Math.floor(Math.random() * list.length)
    return [list[randomItem1], list[randomItem2], list[randomItem3]];
  }

  useEffect(() => {
    const tempArr = []
    const indexes = getRandom()
    tempArr.push(indexes[0])
    tempArr.push(indexes[1])
    tempArr.push(indexes[2])
    setItems([...items, ...tempArr])
  }, [threePosts])

  const goToDisplayContent = (id) => {
    navigate(`/${list[id].category}/${id}`)
    const tempArr = []
    const indexes = getRandom()
    tempArr.push(indexes[0])
    tempArr.push(indexes[1])
    tempArr.push(indexes[2])
    for(let i=0;i<=3;i++){
      items.pop()
    }
    setItems([...items, ...tempArr])
  }

  return (
    <div>
      <div className='container content-title'>{list[ID].title}</div>

      <div className='container feed'>
        <div className='feed-box'>
          <div className='left'><img src="https://i.pinimg.com/originals/38/47/34/3847348c23811b88187d9e6c3b4c0512.jpg" className='profile-img' alt="" />
            <span className='name'>Nameera Pathan</span>
            <span className='date text-muted'>{list[ID].date}</span>
          </div>
          <div className='right'>
            <FacebookShareButton url={url} quote={list[ID].title}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>&nbsp;

            <WhatsappShareButton url={url} title={list[ID].title}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>&nbsp;

            <TwitterShareButton url={url} title={list[ID].title}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>&nbsp;

            <EmailShareButton url={url} subject={''} body={list[ID].title} separator={" "}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>&nbsp;
          </div>
        </div>

      </div>
      <div className='container post-img-div'> <img src={list[ID].img} alt="" className='post-img' /> </div>
      <div className='container para'> {list[ID].description}</div>
      <div className='container last'>
        <div className='left1'><img src="https://i.pinimg.com/originals/38/47/34/3847348c23811b88187d9e6c3b4c0512.jpg" className='profile-img' alt="" />
          <div className='profile-content'>
            <div className='Wb text-muted'>Written By</div>
            <div className='name1'>Nameera Pathan</div>
            <div className='date1 text-muted'>{list[ID].date}</div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='more-text'> More from The Siren</div>
        <div className='line3'></div>

        <div className='container More'>
          {items.map((current, index) => {
            return (
              <div onClick={() => { goToDisplayContent(current.id) }} key={index} >
                <img className="card-img-top3" src={current.img} alt="Card image cap" />
                <div className="card card3" style={{ "width": "22rem" }} >

                  <div className="card-body">
                    <h5 className="card-title1">{current.title}</h5>
                    <p className="card-text1"><small className="text-muted"><span id="cat1">{current.category}</span> / {current.date}</small></p>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>

      </div>

    </div>
  )
}

export default DisplayContent
