const Posts = require('../model/posts');
const successHandler = require('../service/successHandler');
const errorHandler = require('../service/errorHandler');

const postsController = {
    async getPosts(req, res) {
        const allPosts = await Posts.find();
        successHandler(res, allPosts);
    },

    async createPost(req, res) {
        try {
            const { body } = req;
            if (body.content) {
                const newPost = await Posts.create(body);
                successHandler(res, newPost);
            } else {
                errorHandler(res);
            }
        } catch (err) {
            errorHandler(res, err);
        }
    },

    async deleteAllPosts(req, res) {
        await Posts.deleteMany({}); //刪除全部
        successHandler(res, []);
    },

    async deletePost(req,res){
        const delId = req.params.id;
        try {
            await Posts.findByIdAndDelete(delId); // 刪除單筆
            successHandler(res, []);
        } catch (err) {
            errorHandler(res, err);
        }
    },

    async updatePost(req,res){
        try {
            const { body } = req;
            const patchId = req.params.id;
            if (body.content) {
                await Posts.findByIdAndUpdate(patchId, body); // 更新單筆
                successHandler(res, body);
            } else {
                errorHandler(res);
            }
        } catch (err) {
            errorHandler(res, err);
        }
    }
};


module.exports = postsController;