class UpdateEmailUseCase {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async execute(id, updatedFields) {
    return this.emailRepository.patchById(id, updatedFields);
  }
}

module.exports = UpdateEmailUseCase;
