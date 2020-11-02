//import React Components
import React from "react";
import ReactPlayer from "react-player"
//import React Dom
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";


//function based component
const VideoList = props=> {
    const images = props.videos.map(video =>

    <div className="ui link cards">
        <div className="card ui fluid card">
            <div className="image">

                <ReactPlayer
                    url={'https://www.youtube.com/watch?v='+video.id.videoId}
                    width='600px'
                />
            </div>
            <div className="content">
                <div className="header">{video.snippet.channelTitle}</div>
                <div className="meta">
                    <a>{video.snippet.title}
                    </a>
                </div>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>

        </div>
    </div>
    )
        return (
            <div className="ui grid container">

                        {images}

            </div>
        );

}

//export component to be used outside
export default VideoList;