const {
	exexSQL
} = require('../db/mysql')

const addJudge = (judgeData) => {
	const orderid = judgeData.orderid || '';
	const rate = judgeData.rate || '';
	const content = judgeData.content || '';
	const images = judgeData.images || '';

	let sql =
		`INSERT INTO judge (orderid, rate, content, images) VALUES ('${orderid}', '${rate}', '${content}', '${images}');`;

	console.log("sql:" + sql);
	
	return exexSQL(sql).then(insertedResult => {
		console.log('insertedResult', insertedResult);
		return {
			id: insertedResult.insertId
		}
	});
}

const listJudge = (productid) => {
	
	let sql = 
	`select judge.orderid, judge.rate, judge.content, judge.images, user.username from judge left join orders on judge.orderid=orders.id left join user on orders.userid=user.id where orders.productid = '${productid}'`;
	
	return exexSQL(sql);
}

module.exports = {
	addJudge,
	listJudge
}