const emailRepository = require('../repositories/email.repository');
const {
  FetchEmailUseCase,
  FetchAllEmailsUseCase,
  UpdateEmailUseCase
} = require('../../usecases');

async function fetchSpecificEmail(req, res, next) {
  try {
    const fetchEmailUC = new FetchEmailUseCase(emailRepository);

    const result = await fetchEmailUC.execute(req.params.id);
    if (!result) {
      res.status(404).json({
        status: false,
        error: 'Email not Found',
        errorDetails: ''
      });
    } else {
      res.status(200).json({
        status: true,
        result: result,
        message: 'Email Fetched'
      });
    }
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
}

async function fetchAllEmails(req, res, next) {
  try {
    const fetchAllEmailsUC = new FetchAllEmailsUseCase(emailRepository);
    const filters = {};
    if (!!req.query.isFavorite) {
      filters.isFavorite = true;
    }
    if (!!req.query.isRead) {
      filters.isRead = true;
    }
    if (!!req.query.isUnread) {
      filters.isRead = false;
    }

    const result = await fetchAllEmailsUC.execute(
      req.query.pageNo,
      req.query.pageSize,
      filters
    );
    res.status(200).json({
      status: true,
      result: result,
      message: 'Emails Fetched'
    });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
}

async function updateSpecificEmail(req, res, next) {
  try {
    const updateEmailUC = new UpdateEmailUseCase(emailRepository);
    const result = await updateEmailUC.execute(req.params.id, req.body);
    console.log('updateSpecificEmail', result);
    if (result[1] > 0) {
      res.status(200).json({
        status: true,
        result: result[1],
        message: 'Emails Updated'
      });
    } else {
      res.status(404).json({
        status: false,
        error: 'No records updated',
        errroDetails: ''
      });
    }
  } catch (err) {
    console.log('Error', err.message);
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
}

module.exports = { fetchSpecificEmail, fetchAllEmails, updateSpecificEmail };
