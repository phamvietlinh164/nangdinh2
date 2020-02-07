const jwt = require('jsonwebtoken');
const {reHash} = require('../New/helpers');

function checkAuth(req, res) {
	
	try{
		const decode = jwt.verify(reHash(req.headers.authorization), 'secret');
	}catch(err) {
		return res.status(401).json({
			message: 'Unauthorized!'
		})
	}

	return res.status(200).json({
		message: 'Authorization!'
	})

	
}

module.exports = checkAuth;