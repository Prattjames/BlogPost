import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ListPosts extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.data.all.map((post, i) => {
          return <Link key={post.id} to={`/posts/${post.id}`}>
            <li className="list-group-item">
              <strong >{post.title}</strong>
              <span className="pull-xs-right">{post.categories}</span>
            </li>
          </Link>
        })}
      </ul>
    );
  }
}

export default ListPosts;
