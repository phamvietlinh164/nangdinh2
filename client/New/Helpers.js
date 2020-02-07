import { urlPre } from './Constants';
// import React, { Component } from 'react';


export const urlFind = (major: String, unit: String, ques_type: String) => {

    var url, param_3;

    if (major.substring(0, 2) === "kl") {
        if (ques_type === "ltc") {

            if (unit.substring(0, 3) === "TWR") {
                param_3 = "TWR"
            } else if (unit.substring(0, 2) === "KT") {
                if (unit.substring(3, 4) === "A") {
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
                url = `${urlPre}/kl/MT/${unit}`
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

export const shuffleArray: Array = (array: Array) => {
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

export const uniqueArray: Array = (arr: Array) => {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    
    return a;
}

export const sliceQues: Array = (data: Array) => {
    var ch_data = JSON.parse(localStorage.getItem(localStorage.getItem('data')));

    if(ch_data && ch_data.length > 0){
        var a = [];
        var i;
        for(i = 0; i < data.length; i = i + 1){
            if(ch_data.indexOf(data[i].id) === -1){
                a.push(data[i])
            }
        }


        if(a.length !== 0){
            localStorage.setItem(localStorage.getItem('data'), JSON.stringify(uniqueArray(ch_data)))
            return shuffleArray(a);

        }else {
            localStorage.removeItem(localStorage.getItem('data'));
            return shuffleArray(data)
        }
    }else {
        return shuffleArray(data)
    }
    

}

export const addLocSto: void = (string: String) => {
    if(localStorage.getItem('data') && localStorage.getItem(localStorage.getItem('data'))){
        if(localStorage.getItem('data') !== string){
            localStorage.removeItem(localStorage.getItem('data'));
            localStorage.setItem('data', string)
        }
        
    }
    
}

// 


