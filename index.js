const mongoId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const awesomeJoiHelpers = (Joi) => {
  Joi.mongoId = mongoId;

  Joi.mongoIdList = Joi.array().items(mongoId).required();

  return Joi;
};

module.exports = awesomeJoiHelpers;
