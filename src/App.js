import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import DisplayPost from './DisplayPost.js'
import MathGeometry from './MathGeometry.js'
import Maths from './Maths'

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

		const subjectCaps = subject.charAt(0)+subject.slice(1)
		const courseCaps = course.charAt(0)+course.slice(1)
		//const LessonComponent = React.components[`${subjectCaps}${courseCaps}`]

		return (
			<div>

				<Route exact path='/' render={() => (
					<div>
						<h1>Some courses for you</h1>
						<h2>Mathematics</h2>
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

				<Switch>
					<Route path='/math/geometry' component={MathGeometry} />
					<Route path='/math' component={Maths} />
				</Switch>

	    	</div>
		)
	}
}

export default App
