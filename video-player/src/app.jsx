import { useState } from 'react';

const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoKeys = Object.keys(videos);

export default function App()
{
    const [videoSrc, setVideoSrc] = useState(videos.spider);

    function onSelectVideo(video)
    {
        const videoSrc = videos[video];
        setVideoSrc(videoSrc);
    }

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Menu onSelectVideo={onSelectVideo} videoValues={videoKeys} />
            <Video videoSrc={videoSrc} />
        </div>
    );
}


function Menu({ onSelectVideo, videoValues })
{
    return (
        <form onClick={(event) => onSelectVideo(event.target.value)}>
            {videoValues.map((value, i) => (
                <div className="video-inputs">
                    <input key={i} type="radio" name="src" value={value} />
                    {value}
                </div>
            ))}
        </form>
    );
}

function Video({ videoSrc })
{
    return (
        <div>
            <video loop controls autostart="true" autoPlay muted src={videoSrc}/>
        </div>
    );
}