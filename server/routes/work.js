const express = require("express");

const router = express.Router();

module.exports = router;

router.post("/addCompany", async (req, res) => {
    req.body = sanitize(req.body);
  
    //Check for existing username
    let company = await Company.findOne({ companyname: req.body.companyname.toLowerCase() }, function (err) {
      if (err) {
        return res.status(500).send("An unexpected error occurred");
      }
    });
    if (company)
      return res.status(400).send({ message: "Username already taken. Take an another Username" });
  
    //Check for existing email
    company = await company.findOne({ email: req.body.email.toLowerCase() }, function (err) {
      if (err) {
        return res.status(500).send("An unexpected error occurred");
      }
    });
    if (company)
      return res.status(400).send({ message: "Email already registered. Take an another email" });
  
    // Create new user
    company = new Company(req.body);
    return res.status(200).send({ message: "Company registered successfully." });
  });
  