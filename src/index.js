import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD_Ho2O6QGe7dzgun4a-gUqyP1ksC0jr7E';

class App extends Component {
	constructor (props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		//initial search
		this.videoSearch('surfboards');
		
	}

	//new callback with one arg, searched 'term' from the user
	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, (videos) => {this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render () {
		const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} /> 
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				//This takes a video and updates the state of the video by passing onVideoSelect as a property into VideoList
				//VideoList takes that onVideoSelect property from App class and passes into VideoListItem
				//VideoListItem takes that property and when clicked, call that function with the video that it was passed
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} /> 
			</div>
		);
	}
}
//callback function: pass from App -> videoList -> videoListItem

ReactDOM.render(<App />, document.querySelector('.container'));


