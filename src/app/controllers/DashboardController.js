const { User } = require("../models");

class DashboardCOntroller {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });
    return res.render("dashboard", { providers });
  }
}
module.exports = new DashboardCOntroller();
