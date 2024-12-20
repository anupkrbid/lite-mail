// https://sequelize.org/v3/docs/models-definition/

const Sequelize = require('sequelize');
const { sequelize } = require('../../../../configs');

const EmailModel = sequelize.define(
  'email',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    senderName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    senderEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true,
        isEmail: true
      }
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    shortDescription: {
      type: Sequelize.TEXT('tiny'),
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    isRead: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    isFavorite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  },
  {
    timestamps: true,
    underscored: true
  }
);

module.exports = EmailModel;
