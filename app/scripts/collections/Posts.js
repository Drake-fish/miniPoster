import Backbone from 'backbone';

import post from '../models/Post';

export default Backbone.Collection.extend({
  model: post,
  url: 'https://api.backendless.com/v1/data/Posts',
  parse(data) {
    return data.data;
  }
});
