// Utility functions for localStorage management

export const getUsers = () => {
  const users = localStorage.getItem('blogUsers');
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('blogUsers', JSON.stringify(users));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const getBlogs = () => {
  const blogs = localStorage.getItem('blogs');
  return blogs ? JSON.parse(blogs) : [];
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  blogs.unshift(blog); // Add to beginning
  localStorage.setItem('blogs', JSON.stringify(blogs));
};

export const updateBlog = (blogId, updatedBlog) => {
  const blogs = getBlogs();
  const index = blogs.findIndex(b => b.id === blogId);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...updatedBlog };
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
};

export const deleteBlog = (blogId) => {
  const blogs = getBlogs();
  const filtered = blogs.filter(b => b.id !== blogId);
  localStorage.setItem('blogs', JSON.stringify(filtered));
};

export const getLikes = () => {
  const likes = localStorage.getItem('blogLikes');
  return likes ? JSON.parse(likes) : {};
};

export const toggleLike = (blogId, userId) => {
  const likes = getLikes();
  const key = `${blogId}_${userId}`;
  if (likes[key]) {
    delete likes[key];
  } else {
    likes[key] = true;
  }
  localStorage.setItem('blogLikes', JSON.stringify(likes));
  return likes[key] || false;
};

export const isLiked = (blogId, userId) => {
  const likes = getLikes();
  return !!likes[`${blogId}_${userId}`];
};

export const getLikeCount = (blogId) => {
  const likes = getLikes();
  return Object.keys(likes).filter(key => key.startsWith(`${blogId}_`)).length;
};

export const getComments = () => {
  const comments = localStorage.getItem('blogComments');
  return comments ? JSON.parse(comments) : [];
};

export const saveComment = (comment) => {
  const comments = getComments();
  comments.push(comment);
  localStorage.setItem('blogComments', JSON.stringify(comments));
};

export const updateComment = (commentId, updatedComment) => {
  const comments = getComments();
  const index = comments.findIndex(c => c.id === commentId);
  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    localStorage.setItem('blogComments', JSON.stringify(comments));
  }
};

export const deleteComment = (commentId) => {
  const comments = getComments();
  const filtered = comments.filter(c => c.id !== commentId);
  localStorage.setItem('blogComments', JSON.stringify(filtered));
};

export const getCommentsByBlog = (blogId) => {
  const comments = getComments();
  return comments.filter(c => c.blogId === blogId);
};

