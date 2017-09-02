import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import DisplayPost from './DisplayPost.js'

class App extends Component {
	
	state = {
		subject: 'math',
		course: 'geometry',
		unit: 1
	}

	componentDidMount() {
		//CustomAPI.getAll().then((contacts) => {
		//	this.setState({contacts})
		//})
	}

	onHomeButton = ({history}) => {
		history.push('/')
	}

	render() {

		let { subject, course, unit } = this.state

		return (
			<div>
	    	<Route exact path='/' render={() => (
	    		<div>
	    			<DisplayPost postText='Welcome to the main page!' />
	    			<div><Link to='/math/geometry/'>Gimme geometry!</Link></div>
	    		</div>
	     	)}/>
	     	<Route path={`/${subject}/${course}`} render={() => (
	    		<DisplayPost postText={`This page is about ${course}, a fundamental topic in ${subject}.`} />
	    	)}/>
	    </div>
		)
	}
}

export default App
