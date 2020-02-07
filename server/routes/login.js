const jwt = require('jsonwebtoken');
const {hash} = require('../New/helpers');
const User = require('../../models/user');



function login(req, res) {

	User.find({email: req.body.email, password: req.body.password}).exec().then(user => {
		if(user.length >= 1 && (!user.loggedTime || user.loggedTime <= 3)){
			const token = jwt.sign({
					email: user.email,
				}, 
				"secret",
				{expiresIn: "730d"}
			);
			const updateOps = {
				token: hash(token),
				loggedTime: !user.loggedTime? 1: user.loggedTime + 1
			}

			User.updateOne({email: user[0].email}, {$set: updateOps})
				.exec()
				.then(result => {
					res.status(200).json({
						token: hash(token)
					})
				}).catch(err => {
					res.status(500).json({
						error: err
					})
				})
			
		}else {
			return res.status(401).json({message: 'Unauthorized!'})
		}
	}).catch(err => {
		res.status(500).json({
			error: err
		})
	})
	
}

module.exports = login;