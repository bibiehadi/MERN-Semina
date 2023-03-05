const Categories = require('./model');
const {
  getAllCategories,
  createCategory,
  findByIdCategory,
  updateCategory,
  deleteByIdCategory,
} = require('../../../services/mongoose/categories');

const create = async (req, res, next) => {
  try {
    // const { name } = req.body;
    // const result = await Categories.create({ name });
    const result = await createCategory(req);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    // const result = await Categories.find().select('_id name');
    const result = await getAllCategories();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const result = await findByIdCategory(req);

    if (!result) {
      return res.status(404).json({
        message: 'category id not found!',
      });
      //   console.log(!result);
    }

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { name } = req.body;
    // const data = await Categories.findByIdAndUpdate(
    //   { _id: id },
    //   { name },
    //   { new: true, runValidators: true }
    // );
    const data = await updateCategory(req);

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const result = await deleteByIdCategory(req);
    res.status(200).json({
      message: `categories dengan id ${id} berhasil dihapus`,
      result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { create, index, findById, update, deleteById };
