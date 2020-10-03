import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css';
const VideoList = (props) => (
            <ul className={styles.videos}>
                {props.videos.map(video => 
                    (<Videoitem key={video.id} video={video}></Videoitem>
                ))}
                
            </ul>
            
    );

export default VideoList;