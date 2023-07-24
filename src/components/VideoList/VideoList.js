import './VideoList.scss';
import Video from '../Video/Video';


function VideoList({Vids, currentVideo}){
   
    return(
        <section className='video-list'>
        <h2 className='video-list__header'>NEXT VIDEOS</h2>
            <ul className='video-list__listing'>
             {Vids.filter(video => video.id !== currentVideo.id)
            .map(video => {
                return(
                    <Video
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    channel={video.channel}
                    image={video.image}
                />
                )
            })
               
        }  </ul>
            </section>
        
    )

}
export default VideoList;
  
        