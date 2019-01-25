import React ,{Component} from 'react'

class Photo extends Component{
    render(){

        const post=this.props.post
        return <figure className="figure">
        <img scr={post.imagelink} alt={post.caption} />
        </figure> 
    }
}

export default Photo
