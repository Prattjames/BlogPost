import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { getPost } from '../actions/index'
import {Link, browserHistory} from 'react-router'
import { deletePost } from '../actions/index'

class CurrentPost extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.getPost(this.props.params.id);
  }

  onClick(id){
    this.props.deletePost(id)
      .then((res) => {
        browserHistory.push('/');
      });
  }

  render(){
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button onClick={() => this.onClick(post.id)} className="btn btn-danger pull-xs-right">
          Delete
        </button>
        <h3 className="post-title">{post.title}</h3>
        <h6 className="categories">Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { getPost, deletePost })(CurrentPost);
