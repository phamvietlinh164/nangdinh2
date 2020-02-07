exports.hash = (string) => {
	if(string.length >= 62){
		var p1, p2, p3;
		const addedString = 'Fhgpw';
		p1 = string.slice(0, 12).split("").reverse().join().replace(/,/g, "");
		p2 = string.slice(12, 62).split("").reverse().join().replace(/,/g, "");
		p3 = string.slice(62).split("").reverse().join().replace(/,/g, "");

		return p3 + p1 + addedString + p2
	}else {
		return string
	}
	
}


exports.reHash = (string) => {
	if(string.length >= 67){
		var p1, p2, p3;
		p1 = string.slice(-67, -55).split("").reverse().join().replace(/,/g, "");
		p2 = string.slice(-50).split("").reverse().join().replace(/,/g, "");
		p3 = string.slice(0, -67).split("").reverse().join().replace(/,/g, "");

		return p1 + p2 + p3
	}else {
		return string
	}
}