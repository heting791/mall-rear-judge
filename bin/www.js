const express = require('express');
const app = express();
const port = 3000;

const path = require("path")
const bodyParser = require('body-parser');
const fs = require("fs")
const multiparty = require("multiparty");
const multer = require('multer');

const productsRoutes = require('../src/routes/products');
const judgeRoutes = require('../src/routes/judge');

const {
	json
} = require('express/lib/response');

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header('Access-Control-Allow-Headers', '*');
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
	res.header("Access-Control-Allow-Credentials", true);
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


console.log("current-path:" + path.join(__dirname, "../public"));

app.use('/api/products', productsRoutes);
app.use('/api/judge', judgeRoutes);

app.get('/', (req, res) => {
	console.log("get /");
	res.send('Hello World!');
});

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/') // 确保这个文件夹已经存在
	},
	filename: function(req, file, cb) {
		let suffix = file.originalname.split('.');
		console.log("suffix:" + JSON.stringify(suffix));
		cb(null, file.fieldname + '-' + Date.now() + '.' + suffix[suffix.length-1]);
	}
})

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024, // 限制文件大小为 1MB
	},
});

// 单文件上传
app.post('/upload', upload.single('judge'), (req, res) => {
	const file = req.file;
	console.log("file:" + JSON.stringify(file));
	if (!file) {
		return res.status(400).send('No file uploaded.');
	}
	res.send(file.filename);
});


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});