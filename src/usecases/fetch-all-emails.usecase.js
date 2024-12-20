class FetchAllEmailsUseCase {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async execute(pageNo, pageSize, filters) {
    return this.emailRepository.findAll(pageNo, pageSize, filters);
  }
}

module.exports = FetchAllEmailsUseCase;
