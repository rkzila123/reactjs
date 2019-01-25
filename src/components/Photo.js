import React ,{Component} from 'react'
import GLImage from "gl-react-image";

class Photo extends Component{
    render(){

        const post=this.props.post
        return <figure className="figure">
        <GLImage scr={post.imagelink} alt={post.caption} />
        </figure> 
    }
}

export default Photo