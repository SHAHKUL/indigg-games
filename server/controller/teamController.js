const Teams = require("../model/teamModel");

const getOneData = async (req, res) => {
  const { id } = req.params;

  const data = await Teams.findById(id);
  res.json(data);
};

const getAllData = async (req, res) => {
  const data = await Teams.find();
  res.json(data);
};

const createData = async (req, res) => {
  const { team, win, lose, point, totalmatch } = req.body;

  try {
    const user_id = req.user.id;
    const data = await Teams.create({
      team,
      win,
      lose,
      point,
      totalmatch,
      user_id,
    });

    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;

  const { team, win, lose, point, totalmatch } = req.body;

  const data = await Teams.findByIdAndUpdate(
    {
      _id: id,
    },
    { team, win, lose, point, totalmatch }
  );

  res.status(200).json(data);
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  const data = await Teams.findByIdAndDelete(id);
  res.status(200).json(data);
};

module.exports = { getOneData, getAllData, createData, updateData, deleteData };
