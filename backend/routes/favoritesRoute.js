const router = require('express').Router();
const controller = require('../controllers/favoriteController');
const auth = require('../middlewares/authMiddleware');

router.post('/post', auth, controller.favoriteRegister);
router.get('/post', auth, controller.getAllFavorites);
router.get('/post/:id', auth, controller.getFavoriteById);
router.put('/post/:id', auth, controller.updateFavorite);
router.delete('/post/:id', auth, controller.removeFavorite);

module.exports = router;
