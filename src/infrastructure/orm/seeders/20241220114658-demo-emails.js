'use strict';

const {
  randFirstName,
  randLastName,
  randEmail,
  randCatchPhrase,
  randParagraph
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const totalEmails = 1000000;
    const fakeEmails = Array.from({ length: totalEmails }).map((_) => {
      const firstName = randFirstName();
      const lastName = randLastName();
      const body = randParagraph({ length: 10 }).join(' ');
      return {
        sender_name: `${firstName} ${lastName}`,
        sender_email: randEmail({ firstName, lastName, nameSeparator: '.' }),
        subject: randCatchPhrase(),
        short_description: body.substring(0, 100) + '...',
        body: body,
        is_read: false,
        is_favourite: false,
        created_at: new Date(),
        updated_at: new Date()
      };
    });

    const batchSize = 10000;

    for (let i = 0; i < totalEmails; i += batchSize) {
      const emailBatch = [];
      for (let j = i; j < i + batchSize && j < totalEmails; j++) {
        emailBatch.push(fakeEmails[j]);
      }

      await queryInterface.bulkInsert('emails', emailBatch);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('emails', null, {});
  }
};
