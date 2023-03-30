const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const EmployeeSchema = new Schema({
  fname: requiredString,
  lname: requiredString,
  email: requiredString,
  phone: requiredString,
  address: requiredString,
  city: requiredString,
  zip: requiredString,
  country: requiredString,
  departement: requiredString,
  job: requiredString,
  salary: requiredString,
  start: requiredString,
  termination: requiredString,
  etat: requiredString,
  manager: requiredString,
  matricule: requiredString,
});

module.exports = mongoose.model('Employees', EmployeeSchema);
