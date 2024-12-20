const EmailModel = require('../orm/models/email.model');

class EmailRepository {
  async findById(id) {
    return await EmailModel.findByPk(id);
  }

  async findAll(pageNo, pageSize, filters) {
    return await EmailModel.findAndCountAll({
      attributes: { exclude: ['body'] },
      where: { ...filters },
      offset: (pageNo - 1) * pageSize,
      limit: pageSize,
      order: [['createdAt', 'DESC']]
    });
  }
  /**
   * Updates specific fields for a user.
   * @param {number} userId - The ID of the user to update.
   * @param {Object} fieldsToUpdate - An object containing the fields to update (e.g., { isRead: true, isFavourite: false }).
   * @returns {Promise} The updated user instance or null if the user was not found.
   */
  async patchById(id, fieldsToUpdate) {
    return await EmailModel.update(fieldsToUpdate, {
      where: { id },
      validate: true,
      returning: true
    });
  }
}

module.exports = new EmailRepository();
