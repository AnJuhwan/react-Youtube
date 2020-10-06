import React, { useEffect, useState } from 'react';
import styles from'./app.module.css';
import SearcHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos));
    
  
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
    },[]);
  
  
  return(
    <div className={styles.app}>
    <SearcHeader onSearch={search}>

    </SearcHeader>
    <VideoList videos={videos}></VideoList>
    </div>


  ) 
 
  
      
}

export default App;
