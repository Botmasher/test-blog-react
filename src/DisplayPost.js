import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DisplayPost extends Component {
	static PropTypes = {
		subject: PropTypes.string,
		course: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className='display-post'>
				{ this.props.subject }, specifically { this.props.course }
				<div><Link to='/'>Return Home</Link></div>
			</div>
		)
	}
}

export default DisplayPost
