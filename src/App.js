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
				courses: 'Algebra I', 'Geometry', 'Algebra II'
			},
			{
				subject: 'Language',
				courses: 'British Literature'
			},
			{
				subject: 'Philosophy',
				courses: 'Ethics', 'Epistemology'
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
			<Link onClick={()=>this.changePage(subject,course)} to={`${subject}/${course}/`}>{`${course}`}</Link>
		)
	}

	linkifyName = (name) => {
		return (`${name.split(' ').map(w => w.toLowerCase()).join('-')}`)
	}

	render() {

		let { currentSubject, currentCourse, courses } = this.state

		// TODO break out lessons by subject in the state above
			// - make the state easier to navigate and iterate thru keys
			// - goal: easy to get classes by subject AND subjects by classes
			// - goal: no multiple iteration and mapping
		let coursePaths = [];
		courses.map((course) => {
			coursePaths.push(`/${this.linkifyName(course.subject)}/${this.linkifyName(course.title)}/`)
		});
		const allSubjects = courses.reduce((accumulatedSubjects, course) => {
			return [...accumulatedSubjects, course]
		}, []).filter((course, index) => { courses.indexOf(course)===index });

		// TODO dynamically load component content based on route path name
			// e.g. if the route is /math/geometry/ then use MathGeometry.js component
			// e.g. if the route is /math/gobbledy/ then use Math.js component (route to /math/)
		return (
			<Switch>
				{coursePaths.map((path,i) => (
					<Route key={path} path={path} render={()=>{
						return (
							<div>We will load specific content for the <em>{`${courses[i].title} `}</em>
							course in the <em>{`${courses[i].subject}`}</em> department right 
							here. Until then, <Link to='/'>go home</Link>.</div>
						)
					}} />
				))}
				<Route exact path='/' render={() => (
					<div>
						<h1>All our courses are belong you</h1>
						{this.state.catalog.map((entry) => (
							<h2>{`${entry.subject}`}</h2>
							<ul>
								{subj.courses.map((course, index) => (
									<li key={`${index}`}>
										<Link to={`/${this.linkifyName(entry.subject)}/${this.linkifyName(course)}`}>{`${course}`}</Link>
									</li>
								))}
							<ul>
						))}
					</div>
			 	)}/>
			</Switch>
		)
	}
}

export default App
