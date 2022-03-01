const XLSX = require('xlsx');
const fs = require('fs');
const { mode, replaceSomeLetter, replaceTextInSTag, getNextCell } = require('../New/helpers')
// const jwt = require('jsonwebtoken');
// const { reHash } = require('../New/helpers');

function getDataFol2(req, res) {

	// try{
	// 	const decode = jwt.verify(reHash(req.headers.authorization), 'secret');
	// }catch(err) {
	// 	return res.status(401).json({
	// 		message: 'Unauthorized!'
	// 	})
	// }

	// var data2 = Array();
	// var data3 = Array();
	var i = 0;
	var k = 0;
	var quesArr = []



	try {

        const file = fs.readdirSync(`./data${req.url}`)

		var quesObj = {}

		var remainder
		var characterNumber = {A: 0, B: 0, C: 0, D: 0, E: 0}
		// var first_sheet_name
		var workbook, worksheet

        file.forEach((value, index) => {

            if (value.slice(value.length - 5) === ".xlsx"){
				if(value.includes("(format2)")){
					workbook = XLSX.readFile(`data${req.url}/${value}`, {cellStyles: true});
					console.log(workbook.SheetNames)
					workbook.SheetNames.forEach((value2, index2) => {
						// first_sheet_name = workbook.SheetNames[index2];
						worksheet = workbook.Sheets[value2];

						for(const property in worksheet){
							if(property.includes("A")){
								characterNumber.A = characterNumber.A + worksheet[property].v.length
							}
							if(property.includes("B")){
								characterNumber.B = characterNumber.B + worksheet[property].v.length
							}
							if(property.includes("C")){

								characterNumber.C = characterNumber.C + worksheet[property].v.length
							}
							if(property.includes("D")){
								characterNumber.D = characterNumber.D + worksheet[property].v.length
							}
							if(property.includes("E")){
								characterNumber.E = characterNumber.E + worksheet[property].v.length
							}
							// console.log(property);
						}

						for(const property2 in characterNumber){
							if(!characterNumber[property2]){characterNumber[property2] = 0}
						}

						// console.log(characterNumber, "aaaaaaa")
						var maxNum = 0
						var keyMaxNum
						for(const property2 in characterNumber){
							if(characterNumber[property2] > maxNum){
								maxNum = characterNumber[property2]
								keyMaxNum = property2
							}
						}

						// console.log(keyMaxNum, "bbbb")
						var arrText = []
						var ansChNextCell = {a: 0, b: 0, c: 0, d: 0}
						for(const property in worksheet){
							var nextCell
							if(property.includes(keyMaxNum)){
								// console.log(worksheet[property].h)
								// console.log(worksheet[property].v)
								nextCell = getNextCell(property)
								var text = replaceTextInSTag(worksheet[property].h, worksheet[property].v)
								arrText.push(text)

								// console.log(str)
								// console.log(str.search(/<s>/))
							}

							if(worksheet[property].v === "a" || worksheet[property].v === "A"){
								ansChNextCell.a = 1
							}
							if(worksheet[property].v === "b" || worksheet[property].v === "B"){
								ansChNextCell.b = 1
							}
							if(worksheet[property].v === "c" || worksheet[property].v === "C"){
								ansChNextCell.c = 1
							}
							if(worksheet[property].v === "d" || worksheet[property].v === "D"){
								ansChNextCell.d = 1
							}

							// console.log(nextCell)
							// console.log(property.includes("C"));
						}

						// console.log(arrText)

						// console.log(arrText)
						var ansCh = {a: 0, b: 0, c: 0, d: 0}
						for(i = 0; i < arrText.length; i = i + 1){

							remainder = i % 5
							// console.log(remainder)
							if(remainder === 0){
								quesObj.ch_d = arrText[arrText.length -1 - i].trim()
								if(quesObj.ch_d.includes("(characterOnB)")){
									var splitQues = quesObj.ch_d.split("(characterOnB)")
									quesObj.ch_d = splitQues[0]
									if(splitQues[1] !== ""){
										ansCh.d = +splitQues[1]
									}
								}
							}
							// if(i === 0){console.log(arrText[arrText.length - 1])}
							if(remainder === 1){
								quesObj.ch_c = arrText[arrText.length -1 - i].trim()
								if(quesObj.ch_c.includes("(characterOnB)")){
									var splitQues = quesObj.ch_c.split("(characterOnB)")
									quesObj.ch_c = splitQues[0]
									if(splitQues[1] !== ""){
										ansCh.c = +splitQues[1]
									}
								}
							}
							if(remainder === 2){
								quesObj.ch_b = arrText[arrText.length -1 - i].trim()
								if(quesObj.ch_b.includes("(characterOnB)")){
									var splitQues = quesObj.ch_b.split("(characterOnB)")
									quesObj.ch_b = splitQues[0]
									if(splitQues[1] !== ""){
										ansCh.b = +splitQues[1]
									}
								}
							}
							if(remainder === 3){
								quesObj.ch_a = arrText[arrText.length -1 - i].trim()
								if(quesObj.ch_a.includes("(characterOnB)")){
									var splitQues = quesObj.ch_a.split("(characterOnB)")
									quesObj.ch_a = splitQues[0]
									if(splitQues[1] !== ""){
										ansCh.a = +splitQues[1]
									}
								}
							}
							if(remainder === 4){
								quesObj.ques = arrText[arrText.length -1 - i].trim()
								quesObj.id = k + 1

								var maxNum2 = 0
								var keyMaxNum2
								for(const property2 in ansCh){
									if(ansCh[property2] > maxNum2){
										maxNum2 = ansCh[property2]
										keyMaxNum2 = property2
									}
								}
								// console.log(maxNum2, "maxnum")
								if(maxNum2 === 0){

									if(ansChNextCell.a === 0 && ansChNextCell.b === 0 && ansChNextCell.c === 0 && ansChNextCell.d === 0){
										console.log(quesObj.ques, "blank")
										continue
									}else {
										var maxNum3 = 0
										var keyMaxNum3
										for(const property2 in ansChNextCell){
											if(ansChNextCell[property2] > maxNum3){
												maxNum3 = ansChNextCell[property2]
												keyMaxNum3 = property2
											}
										}
										quesObj.ans = keyMaxNum3.toLocaleLowerCase()
									}

								}else {
									quesObj.ans = keyMaxNum2.toLocaleLowerCase()
								}

								if(quesObj.ques.includes("(characterOnB)")){
									var splitQues = quesObj.ques.split("(characterOnB)")
									quesObj.ques = splitQues[0]
								}
								if(quesObj.ch_a.length !== 0 && quesObj.ch_b.length !== 0){
									k = k + 1
									quesArr.push({
										id: quesObj.id,
										ques: quesObj.ques,
										ch_a: quesObj.ch_a,
										ch_b: quesObj.ch_b,
										ch_c: quesObj.ch_c,
										ch_d: quesObj.ch_d,
										ans: quesObj.ans
									})
								}

								// console.log(ansCh, k, quesObj.ans)
								// console.log(quesObj.ch_a.length, "len a", quesObj.ch_b.length, "len b", k)
								// console.log(quesObj.ch_a.length)
								// console.log(quesObj.ch_a)
								quesObj = {}
								ansCh.a = 0
								ansCh.b = 0
								ansCh.c = 0
								ansCh.d = 0

							}
							// quesArr.push(quesObj)

						}

						// console.log(quesArr)
						// console.log("abc")
						// console.log(index2)
						// console.log(value2)

					})

					// var address_of_cell = 'A1';

					/* Get worksheet */
				}else {
					workbook = XLSX.readFile(`data${req.url}/${value}`)
					// console.log(workbook.SheetNames)
					workbook.SheetNames.forEach((value2, index2) => {
						// console.log(value2)
						var ans;
						var worksheet = workbook.Sheets[value2];
						var currentFile = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
						var lenArr = currentFile.map(item => item.length)
						var modeLength = mode(lenArr)
						modeLength = 7
						// console.log(modeLength)
						// if(modeLength === 6){
						// 	modeLength = 7
						// }
						currentFile.forEach(item => {

							// if(item[1] === 'Mức VOX thiết lập cho các kênh ghi âm:'){
							// 	console.log(item)
							// 	console.log(item.length)
							// }
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

									quesArr.push({
										id: k + 1,
										ques: item[modeLength - 6],
										ch_a: item[modeLength - 4],
										ch_b: item[modeLength - 3],
										ch_c: item[modeLength - 2],
										ch_d: item[modeLength - 1],
										ans: ans
									})
									k = k + 1
								}
							}
						})
					})

				}


            }


        })





	} catch (err) {
		console.log(err)
		// console.log(`./data${req.url}`)

		// if (err.code === 'ENOENT') {
		// 	const file = fs.readdirSync(`./data${req.url}`)
		// 	const list = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))

		// 	i = 0;
		// 	list.forEach((item, index) => {
		// 		var workbook = XLSX.readFile(`data${req.url}/${item}`);
		// 		var first_sheet_name = workbook.SheetNames[0];
		// 		// var address_of_cell = 'A1';

		// 		/* Get worksheet */
		// 		var worksheet = workbook.Sheets[first_sheet_name];

		// 		/* Find desired cell */
		// 		// var desired_cell = worksheet[address_of_cell];

		// 		/* Get the value */
		// 		// var desired_value = (desired_cell ? desired_cell.v : undefined);
		// 		var currentFile = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
		// 		var lenArr = currentFile.map(item => item.length)
		// 		var modeLength = mode(lenArr)

		// 		currentFile.forEach(item => {
		// 			if (item.length > 4 && item[modeLength - 5]) {
		// 				ans = false;
		// 				if (item[modeLength - 5].includes("1") || item[modeLength - 5] === "a" || item[modeLength - 5] === "A") {
		// 					ans = "a"
		// 				} else if (item[modeLength - 5].includes("2") || item[modeLength - 5] === "b" || item[modeLength - 5] === "B") {
		// 					ans = "b"
		// 				} else if (item[modeLength - 5].includes("3") || item[modeLength - 5] === "b" || item[modeLength - 5] === "C") {
		// 					ans = "c"
		// 				} else if (item[modeLength - 5].includes("4") || item[modeLength - 5] === "b" || item[modeLength - 5] === "D") {
		// 					ans = "d"
		// 				}

		// 				if (ans) {
		// 					data.push({
		// 						"id": i + 1,
		// 						"ques": item[modeLength - 6],
		// 						"ch_a": item[modeLength - 4],
		// 						"ch_b": item[modeLength - 3],
		// 						"ch_c": item[modeLength - 2],
		// 						"ch_d": item[modeLength - 1],
		// 						"ans": ans
		// 					})
		// 					i = i + 1
		// 				}
		// 			}
		// 		})
		// 	})
		// }
	}



	// console.log(req.url)
	// console.log('abc')






	// Tạo ra mảng chỉ bao gồm câu hỏi





	quesArr.forEach(function (item, index) {
		// data[index].id = index + 1;

		if (quesArr[index].ques) {
			quesArr[index].ques = replaceSomeLetter(quesArr[index].ques).trim()
		}
		if (quesArr[index].ch_a) {
			quesArr[index].ch_a = replaceSomeLetter(quesArr[index].ch_a).trim()
		}
		if (quesArr[index].ch_b) {
			quesArr[index].ch_b = replaceSomeLetter(quesArr[index].ch_b).trim()
		}
		if (quesArr[index].ch_c) {
			quesArr[index].ch_c = replaceSomeLetter(quesArr[index].ch_c).trim()
		}
		if (quesArr[index].ch_d) {
			quesArr[index].ch_d = replaceSomeLetter(quesArr[index].ch_d).trim()
		}
	})

	// if(data5.length/ 5 !== data3.length){
	// 	res.json([data5.length, data3.length])
	// }else {
	res.json(quesArr);
	// }


}

module.exports = getDataFol2;