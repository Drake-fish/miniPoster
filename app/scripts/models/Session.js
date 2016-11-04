import Backbone from 'backbone';

import router from '../router';
import config from '../config';

export default Backbone.Model.extend({
  idAttribute: '_id',
  register(email, password, name) {
    this.save(
      {email, password, name},
      {
        url: 'https://api.backendless.com/v1/users/register',
        success: (response) => {
          this.login(email, password);
        },
        error: (response) => {
          // console.log(response);
          console.log('User data not saved to server.');
        }
      }
    );
  },
  login(login, password) {
    this.save(
      {login, password},
      {
        url: 'https://api.backendless.com/v1/users/login',
        success: (response) => {
          // console.log(response);
          console.log('Successfuly logged in.');
          router.navigate('allPosts', {trigger: true});
        },
        error: function(response) {
          // console.log(response);
          alert('Log in not successful. Please try again.');
        }
    });
  },
  logout() {
		$.ajax({
			url: 'https://api.backendless.com/v1/users/logout',
			success: () => {
				this.clear();
				window.localStorage.clear();
			}
		});
	},
});
