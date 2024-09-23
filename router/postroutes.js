const express = require('express');
const router = express.Router();
const { register, login, getPosts, postData, getPostById, editPostbyId, updatePostById, deletePostData } = require("../controllers/postdata");

router.route('/api/register').post(register);
router.route('/api/login').post(login);
router.route('/api/posts').get(getPosts);
router.route('/api/posts').post(postData);
router.route(`/api/posts/:id`).get(getPostById);
router.route('/api/posts/:id').get(editPostbyId);
router.route('/api/posts/:id').post(updatePostById);
router.route('/api/posts/:id').delete(deletePostData);


module.exports = router;