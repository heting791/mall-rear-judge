const request = require('request');
const express = require('express');
const WXBizDataCrypt = require('../../utils/WXBizDataCrypt.js');
const router = express.Router();
const {
	addJudge,
	listJudge
} = require('../controller/judge');
const req = require('express/lib/request');
const res = require('express/lib/response');

router.post('/addJudge', (req, res, next) => {
	console.log("req.body:" + JSON.stringify(req.body));
	const judgeData = req.body;
	const judgeDataPromise = addJudge(judgeData);
	
	return judgeDataPromise.then((judgeData) => {
		res.send(judgeData);
	})
})

router.get('/listJudge', (req, res, next) => {
	
	const productid = req.query.productid;
	const listDataPromise = listJudge(productid);
	
	// request("http://8.138.103.44:8000/api/products/details?id=2", (err, res, body) => {
	// 	console.log(res);
	// })
	
	return listDataPromise.then((judgeData) => {
		res.send(judgeData);
	})
})

router.post('/miniProLogin', (req, res, next) => {
	const appid = 'wx065a54a42dc3197c';
	const secret = 'b3acb41933a4eec936926ca79de18276';
	const code = req.body.code;
	console.log("code:" + code);
	
	// const api = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${ appid }&secret=${ secret }&code=${ code }&grant_type=authorization_code`;
	const api = `https://api.weixin.qq.com/sns/jscode2session?appid=${ appid }&secret=${ secret }&js_code=${ code }&grant_type=authorization_code`;
	
	let session_key = "";
	let openid = "";
	
	request.get(api, (err, response, body) => {
		console.log(response.statusCode);
		console.log(body);
		body = JSON.parse(body);
		if (body.session_key && body.openid) {
			console.log("success!");
			let openid = body.openid;
			let api1 = `http://8.138.103.44:8000/api/user/find?username=` + openid;
			request.get(api1, (err1, response1, body1) => {
				body1 = JSON.parse(body1);
				console.log(body1.errno);
				if (body1.errno == 0) {
					console.log("yes!");
					let api2 = `http://8.138.103.44:8000/api/user/register`;
					let obj = {
						username: openid,
						pwd: openid
					}
					request.post({url: api2, form: obj}, (err2, response2, body2) => {
						console.log(body2);
						res.send(body2);
					})
				} else {
					console.log("no!!");
					let api3 = `http://8.138.103.44:8000/api/user/login`;
					let obj = {
						username: openid,
						pwd: openid
					}
					request.post({url: api3, form: obj}, (err3, response3, body3) => {
						console.log(body3);
						res.send(body3);
					})
				}
			})
		}
		else {
			res.sendStatus(500);
		}
	})
})

router.post('/getPhone', (req, res, next) => {
	let reqData = req.body;
	
})

module.exports = router;