const Categories = require('../../api/v1/categories/model');
const BadRequestError = require('../../errors/bad-request');
const NotFoundError = require('../../errors/not-found');

const getAllCategories = async () => {
  const result = await Categories.find().select('_id name');
  return result;
};

const createCategory = async (req) => {
  const { name } = req.body;
  const check = await Categories.findOne({ name });
  if (check) throw new BadRequestError('kategori nama duplikat');
  const result = await Categories.create({ name });
  return result;
};

const findByIdCategory = async (req) => {
  const { id } = req.params;
  const result = await Categories.findById(id);
  if (result) throw new BadRequestError('kategori nama duplikat');
  return result;
};

const updateCategory = async (req) => {
  const { id } = req.params;
  const { name } = req.body;
  const check = await Categories.findById(id);
  if (check) throw new BadRequestError('kategori nama duplikat');

  const result = await Categories.findByIdAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );
  return result;
};

const deleteByIdCategory = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({
    _id: id,
  });
  console.log(result);
  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);
  await result.remove();
  return result;
};
module.exports = {
  getAllCategories,
  createCategory,
  findByIdCategory,
  updateCategory,
  deleteByIdCategory,
};
