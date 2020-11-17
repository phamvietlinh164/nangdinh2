import { urlPre, questionNumberPractice } from './Constants';
// import React, { Component } from 'react';


export const urlFind = (major, unit, ques_type) => {

    var url, param_3;

    if (major.substring(0, 2) === "kl") {
        if (ques_type === "ltc") {

            if (unit.substring(0, 3) === "TWR") {
                param_3 = "TWR"
            } else if (unit.substring(0, 2) === "KT") {
                if (unit === "KT-CR-APP") {
                    param_3 = "KT-CR-APP"
                } else if (unit.substring(3, 4) === "A") {
                    param_3 = "KTACC"
                } else {
                    param_3 = "KTAPP"
                }
            } else if (unit.substr(-9) === "ACC-RADAR") {
                param_3 = "ACC-RA"
            } else if (unit.substr(-13) === "ACC-NON-RADAR") {
                param_3 = "ACC-NON"
            } else if (unit.substr(-9) === "APP-RADAR") {
                param_3 = "APP-RA"
            } else if (unit.substr(-13) === "APP-NON-RADAR") {
                param_3 = "APP-NON"
            } else if (unit.substring(0, 3) === "GCU") {
                param_3 = "GCU"
            }

            url = `${urlPre}/kl/LTC/${param_3}`

        } else if (ques_type === "ltcs") {
            if (major === "klmn") {
                url = `${urlPre}/kl/MN/${unit}`
            } else if (major === "klmt") {
                if (unit === "KT-CR-APP") {
                    url = `${urlPre}/kl/MT/TWR-CR`
                } else {
                    url = `${urlPre}/kl/MT/${unit}`
                }

            } else {
                url = `${urlPre}/kl/MB/${unit}`
            }
        }
    } else if (major === "aa" || major === "dl" || major === "tbhd" || major === "sgm" || major === "po" || major === "kht") {
        url = `${urlPre}/${major}/${ques_type}`
    } else if (major === "kt") {
        url = `${urlPre}/${major}/${unit}/${ques_type}`
    }

    return url
}

export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}


// export const sh_data: Array = (arr: Array, id: Number, qus_num: Number) => {
//     if(arr.length === 0){
//         return []
//     }
//     var partArr = Array();
//     var newArr = Array();

//     // var qus_num = qus_num;
//     var part_num = Math.ceil(arr.length/qus_num);
//     for(var i = 0; i < part_num; i = i + 1){
//         partArr[i] = i < part_num? arr.slice(i* qus_num, i*qus_num + qus_num): arr.slice(i* qus_num)
//     }
//     // var firstEle = Math.ceil(arr[0].id/qus_num) !== part_num? arr.slice();
//     newArr = Math.ceil(id/qus_num) < part_num? partArr[Math.ceil(id/qus_num)]: partArr[0];

//     return shuffleArray(newArr)

// }

export const uniqueArray = (arr) => {
    var a = [];
    for (var i = 0, l = arr.length; i < l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);

    return a;
}

export const sliceQues = (data) => {

    const testing = localStorage.getItem('testing');

    if (testing) {
        const localData = JSON.parse(localStorage.getItem('data'));
        const localDataTesting = JSON.parse(localStorage.getItem('data'))[testing];

        var a = [];

        data.forEach((item) => {
            if (localDataTesting.indexOf(item.id) === -1) {
                a.push(item)
            }
        })

        localData[testing] = a.length > 0 ? uniqueArray(localDataTesting) : [];
        localStorage.setItem('data', JSON.stringify(localData));


        if (a.length > 0) {
            return shuffleArray(a).slice(0, questionNumberPractice);

        } else {
            return shuffleArray(data).slice(0, questionNumberPractice)
        }


    } else {
        return shuffleArray(data).slice(0, questionNumberPractice)
    }


}

export const addLocalStorage = (string) => {
    var data;
    localStorage.setItem('testing', string)
    try {
        data = JSON.parse(localStorage.getItem('data'));
    } catch (err) {
        localStorage.setItem('data', JSON.stringify({}))
    }


    if (data && typeof data === 'object' && data !== null) {

        var a;
        for (a in data) {
            if (data[a].length === 0) {
                delete data[a];
            }
        }
        if (data[string]) {
            return
        } else {
            data[string] = [];
        }

        var i = 0;
        var x, y;
        for (x in data) {
            i = i + 1
        }
        if (i > 3) {
            for (y in data) {
                delete data[y];
                break
            }
        }
        localStorage.setItem('data', JSON.stringify(data))
        // localStorage.setItem('testing', string)

    } else {
        const obj = {};
        obj[string] = []
        localStorage.setItem('data', JSON.stringify(obj))
        // localStorage.setItem('testing', string)
    }

}


export const addCheckedQuestion = (id) => {
    if ((localStorage.getItem('testing'))) {
        const data = JSON.parse(localStorage.getItem('data'));
        const testing = localStorage.getItem('testing');
        data[testing].push(id);
        localStorage.setItem('data', JSON.stringify(data))
    }


}






