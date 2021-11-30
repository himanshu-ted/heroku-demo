const User = require("../../models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtsecret = "asdkahdbfijkjdgvfvsa[dkajd832iwhe fjhD9CxcKC";

module.exports = {


   signin: async function (req, res) {

      console.log("inside auth signin", req.body)
      // try {
         const { email, password } = req.body;
         const userExists = await User.findOne({ where: { email }})

         console.log({ userExists })

         if (!userExists) {
            return res.json({
               status: "ERROR",
               message: "Incorrect Credentials"
            });
         }
         const match = await bcrypt.compare(password, userExists.password);
         if (match) {
            const accessToken = jwt.sign({ id: userExists.id }, jwtsecret);
            res.json({
               status: "SUCCESS",
               message: "Login Successful.",
               data: { accessToken },
            });
         } else {
            return res.json({
               status: "ERROR",
               message: "Incorrect Credentials"
            });
         }
      // } catch (error) {
      //    console.log(error);
      //    return res.json({
      //       status: "ERROR",
      //       message: "Incorrect Credentials"
      //    });
      // }

   }









}