import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetails, VideoList } from './SearchVideoPageComponents';
import youtube from '../api/youtube';

class SearchYoutubeVideo extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('Partner Hero');
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyCydL2-x9oRivprFkFVtMsA5e_XNUgNEuw',
            q: searchTerm,
        }        
    });   
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    } 
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        const { selectedVideo, videos } = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default SearchYoutubeVideo;
 