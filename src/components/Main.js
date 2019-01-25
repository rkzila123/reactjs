import React ,{Component} from 'react'
import Title from './Title' 
import Photowall from './Photowall'


const posts=[
    {
        id:"0",
        caption:"waterfall",
        imagelink:"http://2.bp.blogspot.com/-WmfYRHLc8LY/UrcresujFOI/AAAAAAAAAEs/fl6v2Iq_CBM/s1600/world-most-beautiful-natural-scene-wallpapers-and-images-2012-2013.jpg"
    },
    {
        id:"1",
        caption:"beach",
        imagelink:"https://i.imgur.com/n4xFC3A.jpg"
    },
    {
        id:"2",
        caption:"forest",
        imagelink:"https://previews.123rf.com/images/subbotina/subbotina1609/subbotina160900110/63175201-autumn-fall-nature-scene-beautiful-autumnal-park.jpg"
    }
]

class Main extends Component{

render(){
    return (
        <div>
        <Title title="PhotoWall"></Title>
        <Photowall posts={posts} />
        </div>
    );
}

}

export default Main