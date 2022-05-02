import {createContext, useState} from 'react'
import listJSON from './../JSON/list.json'

export const BlogCon = createContext()

const BlogContext  = (props) =>{
    const [list,setList] = useState([...listJSON]);

    return(
        <BlogCon.Provider value={[list,setList]}>
            {props.children}
        </BlogCon.Provider>
    )
}
export default BlogContext