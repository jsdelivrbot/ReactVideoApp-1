import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video)=>{
		//array of components
		return (
			<VideoListItem 
				//VideoList takes that onVideoSelect property from App class and passes into VideoListItem
				//VideoListItem takes that onVideoSelect property and when clicked, call that function with the video that it was passed
				onVideoSelect = {props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	})


	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;