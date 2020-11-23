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
		.replace(/Ě/g, "Đ")
}