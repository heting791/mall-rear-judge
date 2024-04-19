// userRoutes.js
const express = require('express');
const router = express.Router();
const {
	getProList,
	getImage
} = require('../controller/products');

router.get('/list', (req, res, next) => {
	console.log("query:" + JSON.stringify(req.query));
	const keyword = req.query.keyword || '';
	const category = req.query.category || '';
	const listDataPromise = getProList(keyword, category);
	
	return listDataPromise.then((listData) => {
		res.send(listData);
	})
});

router.get('/getImage', (req, res, next) => {
	// res.sendFile('/程序/express_demo1/public/logo.png');
	
	const id = req.query.id;
	const imageDataPromise = getImage(id);
	
	return imageDataPromise.then((imageData) => {
		console.log("yes");
		res.send(imageData);
	})
})

module.exports = router;