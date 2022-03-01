exports.hash = (string) => {
	if (string.length >= 62) {
		var p1, p2, p3;
		const addedString = 'Fhgpw';
		p1 = string.slice(0, 12).split("").reverse().join().replace(/,/g, "");
		p2 = string.slice(12, 62).split("").reverse().join().replace(/,/g, "");
		p3 = string.slice(62).split("").reverse().join().replace(/,/g, "");

		return p3 + p1 + addedString + p2
	} else {
		return string
	}

}


exports.reHash = (string) => {
	if (string.length >= 67) {
		var p1, p2, p3;
		p1 = string.slice(-67, -55).split("").reverse().join().replace(/,/g, "");
		p2 = string.slice(-50).split("").reverse().join().replace(/,/g, "");
		p3 = string.slice(0, -67).split("").reverse().join().replace(/,/g, "");

		return p1 + p2 + p3
	} else {
		return string
	}
}

exports.mode = (arr) => {
	return arr.sort((a, b) =>
		arr.filter(v => v === a).length
		- arr.filter(v => v === b).length
	).pop();
}

exports.replaceSomeLetter = (value) => {
	return value.replace(/Ѭ/g, "Ư").replace(/ĕ/g, "ă").replace(/ѭ/g, "ư").replace(/ӭ/g, "ứ")
		.replace(/ƿ/g, "ĩ").replace(/ӫ/g, "ủ").replace(/ҥ/g, "ạ").replace(/ҧ/g, "ả")
		.replace(/ӏ/g, "ị").replace(/ӝ/g, "ộ").replace(/ӟ/g, "ớ").replace(/ұ/g, "ậ")
		.replace(/ү/g, "ẫ").replace(/ҷ/g, "ẳ").replace(/Ӎ/g, "ỉ").replace(/ҵ/g, "ằ")
		.replace(/Ě/g, "Đ").replace(/\s\s+/g, ' ')
}

exports.replaceTextInSTag = (text_h, text_v) => {

	// for
	// if(str.search(/<s>/) !== -1 && str.search(/<\/s>/) !== -1){
	// 	console.log(property)
	// 	console.log(str.substring(str.search(/<s>/), str.search(/<\/s>/) + 4))
	// }

	var text_h2 = text_h || ""



	while (text_h.search(/<s>/) !== -1 && text_h.search(/<\/s>/) !== -1) {
		var textTag = text_h.substring(text_h.search(/<s>/), text_h.search(/<\/s>/) + 4)
		// console.log(replaceAllTag(textTag), "aaaaaaaaaaaaaaa")
		// var regtextTag = new RegExp(textTag, "i")
		var text_h_af = text_h.replace(new RegExp(textTag, 'i'), "")
		var text_v_af = text_v.replace(new RegExp(replaceAllTag(textTag), 'i'), "")
		// console.log(text_h_af)
		text_h = text_h_af
		text_v = text_v_af

	}


	if(text_h2.search(/<b>/) !== -1 && text_h2.search(/<\/b>/) !== -1){
		text_v = text_v + "(characterOnB)" + characterBetweenBTag(text_h2).toString()
		// console.log(characterBetweenBTag(text_h2), "cccccccccc")
		// console.log(text_h2)
		return text_v

	}

	return text_v
}

const replaceAllTag = (string) => {
	return string.replace(/<[^>]*>/g, "").trim()
}

const characterBetweenBTag = (str) => {
	var n = 0
	var i = 0
	var str2 = str
	// console.log(string, "bbbbb")
	while (str2.search(/<b>/) !== -1 && str2.search(/<\/b>/) !== -1 && i < 5) {
		var textTag = str2.substring(str2.search(/<b>/), str2.search(/<\/b>/) + 4)
		n = n + str2.search(/<\/b>/) + 4 - str2.search(/<b>/)
		// console.log(textTag, "textTag")
		// var regtextTag = new RegExp(textTag, "i")
		var text_h_af = str2.replace(new RegExp(textTag, 'i'), "")
		// var text_v_af = text_v.replace(new RegExp(replaceAllTag(textTag), 'i'), "")
		str2 = text_h_af
		// console.log(str, "aaaaaaaaa")
		// text_v = text_v_af
		i = i + 1
	}

	return n
}


exports.getNextCell = (str) => {
	if(str.substring(0, 1) === "A"){
		return "B" + str.substring(1)
	}

	if(str.substring(0, 1) === "B"){
		return "C" + str.substring(1)
	}

	if(str.substring(0, 1) === "C"){
		return "D" + str.substring(1)
	}

	if(str.substring(0, 1) === "D"){
		return "E" + str.substring(1)
	}

	if(str.substring(0, 1) === "E"){
		return "F" + str.substring(1)
	}

	if(str.substring(0, 1) === "F"){
		return "G" + str.substring(1)
	}

	
}