import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import DisplayPost from './DisplayPost.js'

class App extends Component {
	
	state = {
		subject: '',
		course: ''
	}

	componentDidMount() {
		//CustomAPI.getAll().then((contacts) => {
		//	this.setState({contacts})
		//})
	}

	onHomeButton = ({history}) => {
		history.push('/')
	}

	changePage = (subject, course) => {
		this.setState({subject,course})
	}

	displayLink = (subject, course) => {
		return (
			<Link onClick={()=>this.changePage(subject,course)} to={`${subject}/${course}/`}>{`${this.prettyCourseName(course)}`}</Link>
		)
	}

	prettyCourseName = (courseName) => {
		return (`${courseName.split('-').map((w) => (
			`${w.charAt(0).toUpperCase()}${w.slice(1)}`
		)).join(' ')}`)
	}

	render() {

		let { subject, course } = this.state

		return (
			<div>

				<Route exact path='/' render={() => (
		    		<div>
		    			<h1>Some courses for you</h1>
		    			<h2>Math</h2>
		    			<ul>
							<li>{this.displayLink('math','geometry')}</li>
							<li>{this.displayLink('math','algebra')}</li>
		    			</ul>
		    			<h2>Humanities</h2>
		    			<ul>
		    				<li>{this.displayLink('language','british-literature')}</li>
		    				<li>{this.displayLink('philosophy','logic')}</li>
		    			</ul>
		    		</div>
		     	)}/>

				{subject !== '' && course !== '' && (
		     		<Route path={`/${subject}/${course}`} render={() => (
		    			<DisplayPost subject={subject} course={course} />
		    		)}/>
		    	)}		    					

	    	</div>
		)
	}
}

export default App
