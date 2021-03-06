import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.DECIMAL,
        
      },
      {
        sequelize
      }
    );

    return this;
  }
}
export default Plan;
