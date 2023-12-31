import express from 'express'
import {getPostBySearch, getPosts,createPost,updatePost,deletePost ,likePost} from '../controllers/posts.js';
import auth from '../middlware/auth.js';
const router=express.Router();


router.get('/search',getPostBySearch)
router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likepost',auth,likePost);

export default router;