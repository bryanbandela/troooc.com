const Tip = require('../Models/budgetModels');

//@description  Get all tips from all users
//@route        GET /api/tips/
//@access       Private
const readTips = async (req, res) => {
  try {
    const tips = await Tip.find({});
    if (tips) {
      res.status(200).json({ tips: tips });
    } else {
      res.json({ message: 'No tip found' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error occured while looking for tips' });
  }
};

//@description  Create a single budget
//@route        Post /api/tips
//@access       Private
const submitTip = async (req, res) => {
  try {
    const tip = await Tip.create(req.body);
    if (tip) {
      res.json({ tip: tip });
    }
  } catch (error) {
    console.log('Creation failed');
    res.status(404);
    console.log(error);
  }
};

module.exports = { readTips, submitTip };
