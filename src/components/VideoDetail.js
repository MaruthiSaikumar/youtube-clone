import React from 'react'
import {Paper,Typography} from '@material-ui/core';

const VideoDetail=({ video })=>{
    if(!video) return(<div>Loading...</div>)

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return(
       <React.Fragment>
           <Paper elevation={8} style={{height:'60%'}}>
            <iframe frameBorder="0" height="100%" width="100%" title="VideoPlayer" src={videoSrc}/>
           </Paper>
           <Paper elevation={8} style={{padding:'15px'}}>
             <Typography variant="h4">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
             <Typography variant="subtitle2">{video.snippet.description}</Typography>
           </Paper>
       </React.Fragment>
    )
}

export default VideoDetail;