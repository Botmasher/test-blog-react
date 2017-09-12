import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import DisplayPost from './DisplayPost.js'
import MathGeometry from './MathGeometry.js'
import Maths from './Maths'

class App extends Component {
	
	state = {
		currentSubject: '',
		currentCourse: '',
		catalog: [
			{
				subject: 'Math',
				courses: ['Algebra I', 'Geometry', 'Algebra II']
			},
			{
				subject: 'Language',
				courses: ['British Literature']
			},
			{
				subject: 'Philosophy',
				courses: ['Ethics', 'Epistemology']
			}
		]
	}

	componentDidMount() {
		// ...
	}

	changePage = (subject, course) => {
		this.setState({currentSubect: subject, currentCourse: course})
	}

	displayLink = (subject, course) => {
		return (
			<Link onClick={()=>this.changePage(subject,course)} to={`/${subject}/${course}/`}>{`${course}`}</Link>
		)
	}

	linkifyName = (name) => {
		return (`${name.split(' ').map(w => w.toLowerCase()).join('-')}`)
	}

	render() {

		let { currentSubject, currentCourse, catalog } = this.state

		// TODO break out lessons by subject in the state above
			// - make the state easier to navigate and iterate thru keys
			// - goal: easy to get classes by subject AND subjects by classes
			// - goal: no multiple iteration and mapping
		
		//const allSubjects = courses.reduce((accumulatedSubjects, course) => {
		//	return [...accumulatedSubjects, course]
		//}, []).filter((course, index) => { courses.indexOf(course)===index });

		// TODO dynamically load component content based on route path name
			// e.g. if the route is /math/geometry/ then use MathGeometry.js component
			// e.g. if the route is /math/gobbledy/ then use Math.js component (route to /math/)
		return (
			<Switch>
				{catalog.map(entry => (
					entry.courses.map((course, i) => (
						<Route key={i} path={`/${this.linkifyName(entry.subject)}/${this.linkifyName(course)}`} render={()=>{
							return (
								<div>We will load specific content for the <em>{`${course} `}</em>
								course in the <em>{`${entry.subject}`}</em> department right 
								here. Until then, <Link to='/'>go home</Link>.</div>
							)
						}} />
					))
				))}
				<Route exact path='/' render={() => (
					<div>
						<h1>All our courses are belong you</h1>
						{this.state.catalog.map((entry) => (
							<div key={`${entry.subject}`}>
								<h2>{`${entry.subject}`}</h2>
								<ul key={`${entry.subject}`}>
									{entry.courses.map((course, index) => (
										<li key={`${course}`}>
											<Link to={`/${this.linkifyName(entry.subject)}/${this.linkifyName(course)}`}>{`${course}`}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
			 	)}/>
			</Switch>
		)
	}
}

export default App
