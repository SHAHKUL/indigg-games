const List = require("../model/tournamentSchema");

const requireAuth = async (req, res, next) => {
  try {
    const { id } = req.params;
    req.user = await List.findOne({ id }).select("id");
    next();
    console.log(req.params, req.method, "in the require Auth");
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "request is not autorized" });
  }
};

module.exports = requireAuth;
