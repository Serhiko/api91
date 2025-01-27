const { model: modelError } = require('../errors');
const { Dialog: DialogModel } = require('../models');
const { dialogMany: dialogManyResponse } = require('../responses');

module.exports = async (req, res) => {
	console.log('req.sessionID', req.session)

	// query to db
	try {
		const items = await DialogModel.findAll();

		res.json(dialogManyResponse(items));
	}
	catch (err) {
		res.json(modelError(err));
	}
};

