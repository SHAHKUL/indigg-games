const List = require("../model/tournamentSchema");

const getOneData = async (req, res) => {
  const { id } = req.params;
  console.log(req.params.id, "tournament control");
  const data = await List.findById(id);
  res.json(data);
};

const getAllData = async (req, res) => {
  const data = await List.find({});
  res.json(data);
};

const createData = async (req, res) => {
  const { name, startDate, endDate, Status } = req.body;

  try {
    const data = await List.create({
      name,
      startDate,
      endDate,
      Status,
    });

    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;

  const { name, startDate, endDate, Status } = req.body;

  const data = await List.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      name,
      startDate,
      endDate,
      Status,
    }
  );

  res.status(200).json(data);
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  const data = await List.findByIdAndDelete(id);
  res.status(200).json(data);
};

module.exports = { getOneData, getAllData, createData, updateData, deleteData };
