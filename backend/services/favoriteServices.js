const { Favorite, User } = require('../models');
const { isValidUser } = require('../utils/validations');

const favoriteRegister = async (favorite, userEmail) => {
  const { imagePath, rover, camera, landing, launch,
    published, updated } = favorite;

    const result = await isValidUser(userEmail);
    const { id } = result;
    if (!result.error) {
      return Favorite.create({ 
        imagePath,
        rover,
        camera, 
        landing, 
        launch, 
        userId: id, 
        published,
        updated });
    } return result;
  };

const getAllFavorites = async () => {
  const result = await Favorite.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return result;
};

const getFavoriteById = async (id) => { 
    const result = await Favorite.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
      ],
    });
    return result;
};

const updateFavorite = async (favorite, email) => {
  const user = await isValidUser(email);
  const userId = user.id;

  const { imagePath, rover, camera, landing, launch,
    published, updated, id } = favorite;

    await Favorite.update({ 
      imagePath,
      rover,
      camera,
      landing,
      launch,
      published,
      updated,
      userId }, 
      { where: { id } });
    const newFavorite = await Favorite.findOne({
    where: { id },
    });
    return newFavorite;
};

const removeFavorite = async (id) => Favorite.destroy({ where: { id } });

module.exports = {
  favoriteRegister,
  getAllFavorites,
  getFavoriteById,
  updateFavorite,
  removeFavorite,
};
