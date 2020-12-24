const mongoId = (Joi) => Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const awesomeJoiHelpers = (Joi) => {
  Joi.mongoId = mongoId(Joi);

  Joi.mongoIdList = Joi.array().items(mongoId(Joi)).required();

  return Joi;
};

module.exports = awesomeJoiHelpers;
