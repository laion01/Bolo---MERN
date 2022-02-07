const Joi = require("joi");
const bcrypt = require("bcryptjs");
const moment = require("moment");
moment().format();

const mongoose = require("mongoose");
const R = require("ramda");

const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  contactname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  userid: {
    type: String,
    required: true
  },
  values : {
      type: Array,
      required: true
  }
});

companySchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

companySchema.methods.hashPassword = function () {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err1, salt) => {
      if (err1) {
        reject(err1);
        return;
      }
      bcrypt.hash(this.password, salt, (err2, hash) => {
        if (err2) {
          reject(err2);
          return;
        }
        this.password = hash;
        resolve(hash);
      });
    });
  });
};

function validateEmail(input) {
    const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
    });
    return schema.validate(input);
  }
  
function validateCompany(company) {
    const schema = Joi.object({
      companyname: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      contactname: Joi.string().min(3).max(50).required()
    });
  
    return schema.validate(company);
  }
const Company = mongoose.model("Company", companySchema);

exports.Company = Company;
exports.validateEmail = validateEmail;
exports.validateCompany = validateCompany;