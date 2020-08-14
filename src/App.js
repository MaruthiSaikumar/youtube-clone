import React from 'react';
//import logo from './logo.svg';
import { Grid } from '@material-ui/core'
import youtube from './api/youtube/youtube'
import { SearchBar, VideoDetail, VideoList } from './components'
//import {VideoList} from './components/VideoList'
//import VideoDetail from './components/VideoDetail'

import './App.css';

class App extends React.Component{

    state={
      videos:[],
      selectedVideo:null

    }

    onVideoSelect=(video)=>{
       this.setState({ selectedVideo:video})
    }

    componentDidMount(){
      this.handleSubmit('React Js Tutorial');
    }



    handleSubmit= async(searchTerm)=>{
        const response =await youtube.get('search',{ params:{
          part:'snippet',
          maxresult:2,
          key:'AIzaSyCZtWZuLaDAterjDCRsy6evluQrE3_NvZg',
          q:searchTerm
      }
  });
        console.log(response.data.items); 
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }


    render(){
      const {selectedVideo,videos}=this.state;
      console.log("jii");
      

      return (
        <Grid justify="center" container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={10}>
                  {/*Search Bar*/}
                  <SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>
              
              <Grid item xs={8}>
                  {/*Vedio Dteail*/}
                 <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                  {/*Vedio List*/}
                  <VideoList videos={videos} onVideoSelect={this.onVideoSelect }/>    
                       
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      );
    }


}



export default App;
