const router = require('express').Router();
const { home_article_get, home_tag_category_get, old_react_article, category_article_get, tag_article_get } = require('../../controller/home/homeController')
const { getArticleDetails, like_dislike_get } = require('../../controller/home/readArticleController')
const {user} = require('../../middleware/authMiddleware')
router.get('/home-article-get', home_article_get);
router.get('/home/get-tag-category', home_tag_category_get);
router.get('/article/recent-old-get', old_react_article);
router.get('/category-article-get', category_article_get);
router.get('/tag-article-get', tag_article_get);

router.get('/home/article-details/:articleSlug', getArticleDetails);

router.get('/home/like-dislike-get/:articleSlug',user, like_dislike_get);

module.exports = router;