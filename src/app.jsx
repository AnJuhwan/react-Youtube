import React, { useEffect, useState } from 'react';
import styles from'./app.module.css';
import SearcHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSeletedVideo] = useState(null);

  const selectVideo = (video) => {
    setSeletedVideo(video);
  }

  const search = query => {
    setSeletedVideo(null)
    youtube.search(query)
    .then(videos => setVideos(videos));
    
    
  
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
    },[]);
  
  
  return(
    <div className={styles.app}>
    <SearcHeader onSearch={search}></SearcHeader>
    <section className={styles.content}>
      {selectedVideo && (<div className={styles.detail}>
      <VideoDetail video={selectedVideo}></VideoDetail>
      </div>)}
      <div className={styles.list}>
      <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}></VideoList>
      </div>
    </section>
    </div>

  ) 
}

export default App;
