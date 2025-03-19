const Joi = require("joi");

exports.validateStudent = (student) => {
  const schema = Joi.object({
    registrationNo: Joi.string().required(),
    name: Joi.string().required(),
    class: Joi.string().required(),
    rollNo: Joi.number().integer().required(),
    contactNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(),
  });

  return schema.validate(student);
};
