const {
	exexSQL
} = require('../db/mysql')

const getProList = (keyword, category) => {
	
	let sql = `select id, title, oprice, price, image, category, brand, favuser from products where 1=1 `;
	
	if(keyword){
		sql += `and title like '%${keyword}%' `;
	}
	
	if(category){
		sql += `and category = '${category}' `;
	}
	
	return exexSQL(sql);
	
}

const getImage = (id) => {
	
	let sql = `select id, image from products where id = '${id}'`;
	
	console.log("sql:" + sql);
	
	return exexSQL(sql);
}

module.exports = {
	getProList,
	getImage
}