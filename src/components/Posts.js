import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	/*  -----------------------------------
	state = {
		posts: []
	};

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => this.setState({ posts: data }));
	} 
	---------------------------------------*/

	componentDidMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map((post) => {
			return (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			);
		});

		return (
			<div>
				<h1>posts</h1>
				{postItems}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts.items,
		newPost: state.posts.item
	};
};

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
