
const user = require("../controllers/user/auth")
module.exports =app => {

  app.post("/signin", user.signin);



}