var express = require('express');
var router = express.Router();
const ArticleController = require('../controller/article');

router.get('/', ArticleController.getUserArticle)
router.get('/articles', ArticleController.getAllPost)
router.post('/', ArticleController.createArticle)
router.put('/:id',ArticleController.editArticle)
router.delete('/:id',ArticleController.removeArticle)
router.get('/:id', ArticleController.getArticleById)


module.exports = router;