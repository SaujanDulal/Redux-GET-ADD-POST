// rcc -snippet

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
	state = {
		title: '',
		body: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};

		/* 
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
			.then((res) => res.json())
			.then((data) => console.log(data)); */

		// call action
		this.props.createPost(post);
	};

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label htmlFor="">Title: </label>
						<br />
						<input type="text" name="title" onChange={this.onChange} value={this.state.title} />
					</div>
					<br />
					<div>
						<label htmlFor="">Body: </label>
						<br />
						<textarea name="body" onChange={this.onChange} value={this.state.body} />
						<br />
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
