const XLSX = require('xlsx');
const fs = require('fs');
const { mode, replaceSomeLetter } = require('../New/helpers')
// const jwt = require('jsonwebtoken');
// const { reHash } = require('../New/helpers');

function getDataFol(req, res) {

	// try{
	// 	const decode = jwt.verify(reHash(req.headers.authorization), 'secret');
	// }catch(err) {
	// 	return res.status(401).json({
	// 		message: 'Unauthorized!'
	// 	})
	// }
	var data = Array();
	// var data2 = Array();
	// var data3 = Array();
	var i;
	var ans;


	try {

        const file = fs.readdirSync(`./data${req.url}`)
        i = 0;
        file.forEach((value, index) => {
            if (value.slice(value.length - 5) === ".xlsx"){
                var workbook = XLSX.readFile(`data${req.url}/${value}`);

                workbook.SheetNames.forEach((value2, index2) => {
                    var first_sheet_name = workbook.SheetNames[index2];
                    var worksheet = workbook.Sheets[first_sheet_name];

                    /* Find desired cell */
                    // var desired_cell = worksheet[address_of_cell];

                    /* Get the value */
                    // var desired_value = (desired_cell ? desired_cell.v : undefined);

                    var currentFile = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                    var lenArr = currentFile.map(item => item.length)
                    var modeLength = mode(lenArr)

                    currentFile.forEach(item => {
                        if (item.length > 4 && item[modeLength - 5]) {
                            ans = false;
                            if (item[modeLength - 5].includes("1") || item[modeLength - 5] === "a" || item[modeLength - 5] === "A") {
                                ans = "a"
                            } else if (item[modeLength - 5].includes("2") || item[modeLength - 5] === "b" || item[modeLength - 5] === "B") {
                                ans = "b"
                            } else if (item[modeLength - 5].includes("3") || item[modeLength - 5] === "b" || item[modeLength - 5] === "C") {
                                ans = "c"
                            } else if (item[modeLength - 5].includes("4") || item[modeLength - 5] === "b" || item[modeLength - 5] === "D") {
                                ans = "d"
                            }

                            if (ans) {
                                data.push({
                                    "id": i + 1,
                                    "ques": item[modeLength - 6],
                                    "ch_a": item[modeLength - 4],
                                    "ch_b": item[modeLength - 3],
                                    "ch_c": item[modeLength - 2],
                                    "ch_d": item[modeLength - 1],
                                    "ans": ans
                                })
                                i = i + 1
                            }
                        }
                    })
                })

                // var address_of_cell = 'A1';

                /* Get worksheet */

            }


        })



	} catch (err) {
		// console.log(err)
		// console.log(`./data${req.url}`)

		if (err.code === 'ENOENT') {
			const file = fs.readdirSync(`./data${req.url}`)
			const list = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))

			i = 0;
			list.forEach((item, index) => {
				var workbook = XLSX.readFile(`data${req.url}/${item}`);
				var first_sheet_name = workbook.SheetNames[0];
				// var address_of_cell = 'A1';

				/* Get worksheet */
				var worksheet = workbook.Sheets[first_sheet_name];

				/* Find desired cell */
				// var desired_cell = worksheet[address_of_cell];

				/* Get the value */
				// var desired_value = (desired_cell ? desired_cell.v : undefined);
				var currentFile = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
				var lenArr = currentFile.map(item => item.length)
				var modeLength = mode(lenArr)

				currentFile.forEach(item => {
					if (item.length > 4 && item[modeLength - 5]) {
						ans = false;
						if (item[modeLength - 5].includes("1") || item[modeLength - 5] === "a" || item[modeLength - 5] === "A") {
							ans = "a"
						} else if (item[modeLength - 5].includes("2") || item[modeLength - 5] === "b" || item[modeLength - 5] === "B") {
							ans = "b"
						} else if (item[modeLength - 5].includes("3") || item[modeLength - 5] === "b" || item[modeLength - 5] === "C") {
							ans = "c"
						} else if (item[modeLength - 5].includes("4") || item[modeLength - 5] === "b" || item[modeLength - 5] === "D") {
							ans = "d"
						}

						if (ans) {
							data.push({
								"id": i + 1,
								"ques": item[modeLength - 6],
								"ch_a": item[modeLength - 4],
								"ch_b": item[modeLength - 3],
								"ch_c": item[modeLength - 2],
								"ch_d": item[modeLength - 1],
								"ans": ans
							})
							i = i + 1
						}
					}
				})
			})
		}
	}



	// console.log(req.url)
	// console.log('abc')






	// Tạo ra mảng chỉ bao gồm câu hỏi





	data.forEach(function (item, index) {
		// data[index].id = index + 1;
		if (data[index].ques) {
			data[index].ques = replaceSomeLetter(data[index].ques).trim()
		}
		if (data[index].ch_a) {
			data[index].ch_a = replaceSomeLetter(data[index].ch_a).trim()
		}
		if (data[index].ch_b) {
			data[index].ch_b = replaceSomeLetter(data[index].ch_b).trim()
		}
		if (data[index].ch_c) {
			data[index].ch_c = replaceSomeLetter(data[index].ch_c).trim()
		}
		if (data[index].ch_d) {
			data[index].ch_d = replaceSomeLetter(data[index].ch_d).trim()
		}
	})

	// if(data5.length/ 5 !== data3.length){
	// 	res.json([data5.length, data3.length])
	// }else {
	res.json(data);
	// }


}

module.exports = getDataFol;