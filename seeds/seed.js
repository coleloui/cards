const sequelize = require('../config/connection');
const { User, Card } = require('../models');

const userSeedData = require('./userSeedData.json');
const cardSeedData = require('./cardSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users =
  await User.bulkCreate(userSeedData);

  // for (const card of cardSeedData) {
  //   const newCard = await Card.create({
  //     ...card,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
