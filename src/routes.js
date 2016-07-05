import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './containers/posts-index.js';
import PostsCreate from './containers/posts-create';
import CurrentPost from './containers/current-post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/create" component={PostsCreate} />
    <Route path="posts/:id" component={CurrentPost} />
  </Route>
);
