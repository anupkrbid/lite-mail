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
    isFavourite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  },
  {
    timestamps: true,
    underscored: true,
    indexes: [
      // Add index for created_at timestamp
      {
        fields: ['created_at']
      },
      // Optional: Add composite index if you frequently query by multiple fields together
      {
        fields: ['is_read', 'is_favourite', 'created_at'],
        name: 'email_status_date_idx'
      }
    ]
  }
);

module.exports = EmailModel;
