import axios from "axios";



export default {
  // Creating user
  createUser: function(userData) {
    return axios.post('/api/signup', userData);
  },
  // Getting user
  getUser: function(id) {
    return axios.get('/api/signup' + id);
  },
  // Getting users
  getUsers: function() {
    return axios.get('/api/signup');
  },

  // Deleting user
  // deleteUser: function() {
  //   return axios.get('/api/signup' + id);
  // }

  getArticles: function() {
    return axios.get('/api/articles');
  },

  getCategory: function(params) {
    return axios.get('/api/articles/category/' + params)
  },

  getSearch: function (search) {
    return axios.get('/api/articles/search/' + search)
  },

  saveArticles: function(userData) {
    return axios.post('/api/users/', userData);
  },

  getSavedArticles: function() {
    return axios.get('/api/users/')
  },

  deleteSavedArticles: function(id) {
    return axios.delete('/api/users/' + id)
  }

  // // Gets all posts
  // getPosts: function() {
  //   return axios.get("/api/posts");
  // },
  // // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/posts/" + id);
  // },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  // // Saves a post to the database
  // savePost: function(postData) {
  //   return axios.post("/api/posts", postData);
  // }
};