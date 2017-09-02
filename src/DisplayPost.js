import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DisplayPost extends Component {
	static PropTypes = {
		postText: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="display-post">
				{ this.props.postText }
				<div><Link to='/'>Return Home</Link></div>
			</div>
		)
	}
}

export default DisplayPost