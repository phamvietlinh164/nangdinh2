const XLSX = require('xlsx');
const jwt = require('jsonwebtoken');
const {reHash} = require('../New/helpers');

function getData(req, res) {
	
	// try{
	// 	const decode = jwt.verify(reHash(req.headers.authorization), 'secret');
	// }catch(err) {
	// 	return res.status(401).json({
	// 		message: 'Unauthorized!'
	// 	})
	// }

	var workbook = XLSX.readFile(`data${req.url}.xlsx`);
	

	// console.log(req.url)
	// console.log('abc')


	var first_sheet_name = workbook.SheetNames[0];
	// var address_of_cell = 'A1';
	 
	/* Get worksheet */
	var worksheet = workbook.Sheets[first_sheet_name];
	 
	/* Find desired cell */
	// var desired_cell = worksheet[address_of_cell];
	 
	/* Get the value */
	// var desired_value = (desired_cell ? desired_cell.v : undefined);

	var data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
	var data2 = Array();
	var data3 = Array();
	var i;

	
	// Tạo ra mảng chỉ bao gồm câu hỏi
	data.forEach(function(item, index){
		if(item.length > 4 && item[0] !== "TT" && item[2] !== "Đáp án"){
			data2.push(item)
		}
	});

	i = 0;
	data2.forEach(function(item, index){
		
		var ans;

		if(item[2] === "1" || item[2] === "a" || item[2] === "A"){
			ans = "a"
		}else if(item[2] === "2" || item[2] === "b" || item[2] === "B"){
			ans = "b"
		}else if(item[2] === "3" || item[2] === "b" || item[2] === "C"){
			ans = "c"
		}else if(item[2] === "4" || item[2] === "b" || item[2] === "D"){
			ans = "d"
		}else {
			ans = ""
		}
		if(ans !== ""){
			data3.push({
				"id": i + 1,
				"ques": item[1],
	    		"ch_a": item[3],
	    		"ch_b": item[4],
	    		"ch_c": item[5],
	    		"ch_d": item[6],
	    		"ans": ans
			})
			i = i + 1
		}
	});

	var function1 = (value) => {
		return value.replace(/Ѭ/g, "Ư").replace(/ĕ/g, "ă").replace(/ѭ/g, "ư").replace(/ӭ/g, "ứ")
					.replace(/ƿ/g, "ĩ").replace(/ӫ/g, "ủ").replace(/ҥ/g, "ạ").replace(/ҧ/g, "ả")
					.replace(/ӏ/g, "ị").replace(/ӝ/g, "ộ").replace(/ӟ/g, "ớ").replace(/ұ/g, "ậ")
					.replace(/ү/g, "ẫ").replace(/ҷ/g, "ẳ").replace(/Ӎ/g, "ỉ").replace(/ҵ/g, "ằ")
					.replace(/Ě/g, "Đ")
	}



	data3.forEach(function(item, index){
		// data3[index].id = index + 1;
		if(data3[index].ques){
			data3[index].ques = function1(data3[index].ques).trim()
		}
		if(data3[index].ch_a){
			data3[index].ch_a = function1(data3[index].ch_a).trim()
		}
		if(data3[index].ch_b){
			data3[index].ch_b = function1(data3[index].ch_b).trim()
		}
		if(data3[index].ch_c){
			data3[index].ch_c = function1(data3[index].ch_c).trim()
		}
		if(data3[index].ch_d){
			data3[index].ch_d = function1(data3[index].ch_d).trim()
		}
		
		
		
	})

	// if(data5.length/ 5 !== data3.length){
	// 	res.json([data5.length, data3.length])
	// }else {
		res.json(data3);
	// }

	
}

module.exports = getData;