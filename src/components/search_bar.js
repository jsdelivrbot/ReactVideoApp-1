//purpose: Create an input at the top where user types, make an API request and update the videos on the side

//import react and pull off the Property Component as Component
import React, { Component } from 'react';

/*
//functional component
const SearchBar = () => { //generate HTML input
	return <input />
}
*/

//class component: define a new class of SearchBar and gives it all functionality of from the React.Component class
class SearchBar extends Component {
	//js classes have constructor function that is called automatically, reserved for setting 
	constructor(props){
		//calling the parent method, Component
		super(props);
		//initialize by creating a new object and assign it to this.state. Record the property "term" on state
		this.state = { term: 'Starting value' };
	}

	//render function: define method and must return some JSX
	render() {
		//always manipulate state, using this.setState
		//this.state.term : referencing is ok
		return (
			<div className="search-bar">
				<input 
					value={this.state.term} //update the user input whenever the state changes
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		); //pass that event handler function which is defined as method within SearchBar class. All HTML input elements emit change event whenever a user interacts with them		
	}
	
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
}



export default SearchBar; //exporting const SearchBar