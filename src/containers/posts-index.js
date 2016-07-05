import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import ListPosts from '../components/list-posts';

class PostIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    const { posts } = this.props;

    if(posts.all.length === 0){
      return <div>Loading...</div>
    }

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/create" className="btn btn-primary">Create Post</Link>
        </div>
        <ListPosts data={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
