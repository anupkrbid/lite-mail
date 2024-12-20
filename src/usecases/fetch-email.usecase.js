class FetchEmailUseCase {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async execute(id) {
    return this.emailRepository.findById(id);
  }
}

module.exports = FetchEmailUseCase;
