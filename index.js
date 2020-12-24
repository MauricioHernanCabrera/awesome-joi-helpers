const mongoId = (Joi) => () => Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const mongoIdList = (Joi) => () => Joi.array().items(mongoId(Joi)).required();

const awesomeJoiHelpers = (Joi) => {
  Joi.mongoId = mongoId(Joi);
  Joi.mongoIdList = mongoIdList(Joi);

  return Joi;
};

module.exports = awesomeJoiHelpers;
