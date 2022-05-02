import React, { useContext } from 'react'
import { BlogCon } from './../Context/BlogContext'
import { useNavigate } from 'react-router-dom';

const LatestStories = () => {
  const [list] = useContext(BlogCon);
  const navigate = useNavigate();
  const goToDisplayContent =(id)=>{
    navigate(`/${list[id].category}/${id}`)
  }
  return (
    <div>
      <div className='LatestStories'>Latest Stories</div><div className='line5'></div>
      <br/>
      <div className='container latest'>
        
        { list.map((current,index)=>{
            if(current.type === "latestStories"){
            return(
                <div onClick={()=>{goToDisplayContent(current.id)}} key={index} >
                  <img className="card-img-top card-img-top1" src={current.img} alt="Card image cap"/>
                      <div className="card card1" style={{"width": "22rem"}} >
                      <div className="card-body">
                        <h5 className="card-title1">{current.title}</h5>
                        <p className="card-text1 text-muted">{current.shortDesc}</p>
                        <p className="card-text1"><small className="text-muted"><span id="cat1">{current.category}</span> / {current.date}</small></p>
                      </div>
                    </div>
                 </div>
              )
            }
        })
        }
      </div>
    </div>
  )
}

export default LatestStories
