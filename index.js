const awesomeJoiHelpers = (Joi) => {
  Joi.mongoId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

  Joi.reorder = Joi.array().items(mongoIdSchema).required();

  return Joi;
};

module.exports = awesomeJoiHelpers;
