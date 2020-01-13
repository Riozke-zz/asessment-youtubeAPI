import React from 'react';
import { connect } from 'react-redux';
import SearchYoutubeVideo from './SearchYoutubeVideoPage';
import { startAddVideo } from '../actions/saveVideos';
import VideoForm from '../components/VideoForm';

export class AddVideoPage extends React.Component {
    onSubmit = (video) => {
      this.props.startAddVideo(video);
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
            <div className="content-container">
            <VideoForm               
              onSubmit={this.onSubmit}
            />  
            </div>            
            <SearchYoutubeVideo />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddVideo: (video) => dispatch(startAddVideo(video))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddVideoPage);
  