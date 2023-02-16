const router = require('express').Router();
const { category_add, category_get, category_delete, category_edit, category_update } = require('../../controller/Dashborad/categoryController');
const { tag_add, tag_get, tag_delete, tag_edit, tag_update } = require('../../controller/Dashborad/tagController');

const { get_tag_category, add_artical, get_artical, edit_artical, update_artical, delete_artical } = require('../../controller/Dashborad/articalController');

const { admin_middleware, auth_sub_admin } = require('../../middleware/authMiddleware');
const { get_dashboard_index_data, get_notification,seen_notification,delete_notification } = require('../../controller/Dashborad/indexController')
// category route
router.post('/add-category', admin_middleware, category_add);
router.get('/get-category', admin_middleware, category_get);
router.delete('/delete-category/:categoryId', admin_middleware, category_delete);
router.get('/edit-category/:categorySlug', admin_middleware, category_edit);
router.patch('/update-category/:categoryId', admin_middleware, category_update);

// tag route
router.post('/add-tag', admin_middleware, tag_add);
router.get('/get-tag', admin_middleware, tag_get);
router.delete('/delete-tag/:tagId', admin_middleware, tag_delete);
router.get('/edit-tag/:tagSlug', admin_middleware, tag_edit);
router.patch('/update-tag/:tagId', admin_middleware, tag_update);

//artical route............

router.get('/get-tag-category', admin_middleware, get_tag_category);
router.post('/add-artical', admin_middleware, add_artical);
router.get('/get-artical', admin_middleware, get_artical);
router.get('/edit-artical/:articleSlug', admin_middleware, edit_artical);
router.post('/update-artical', admin_middleware, update_artical);
router.delete('/delete-artical/:articleId', admin_middleware, delete_artical);


router.get('/get-dashboard-index-data', auth_sub_admin, get_dashboard_index_data)

router.get('/get-notification/:id', auth_sub_admin, get_notification);
router.get('/seen-notification/:id', auth_sub_admin, seen_notification) ;
router.get('/delete-notification/:id', auth_sub_admin, delete_notification)


module.exports = router;