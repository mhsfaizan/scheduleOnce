import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  readFile(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    return reader;
  }
  covertToDigit(data) {
    var ls = data.split('\n');
    var finalData = "";
    for (var ln = 0; ln < ls.length; ln = ln + 2) {
      var arr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]; // Defining 2D array 9 numbers and 7 segments
      var k = 0;
      if (ls[ln] == null || ls[ln] == undefined)
        continue;
      var a = ls[ln].split('');
      for (var i = 1; i < a.length; i++) {
        if (a[i] == '_') {
          arr[k][0] = true;
        }
        i++;
        i++;
        k++;
      }
      if (ln < ls.length) {
        ln++;
        if (ls[ln] == null || ls[ln] == undefined)
          continue;
        a = ls[ln].split('');
        k = 0;
        for (var i = 0; i < a.length; i++) {
          if (a[i] == '|') {
            arr[k][5] = true;
          }
          i++;
          if (a[i] == '_') {
            arr[k][6] = true;
          }
          i++;
          if (a[i] == '|') {
            arr[k][1] = true;
          }
          k++;
        }
      }
      if (ln < ls.length) {
        ln++;
        if (ls[ln] == null || ls[ln] == undefined)
          continue;
        a = ls[ln].split('');
        k = 0;
        for (var i = 0; i < a.length; i++) {
          if (a[i] == '|') {
            arr[k][4] = true;
          }
          i++;
          if (a[i] == '_') {
            arr[k][3] = true;
          }
          i++;
          if (a[i] == '|') {
            arr[k][2] = true;
          }
          k++;
        }
      }
      for (var t = 0; t < arr.length; t++) {
        var result = 0;
        for (var u = 0; u < arr[t].length; u++) {
          if (arr[t][u])
            result += Math.pow(2, u);
        }
        var res = this.convertToNumber(result) + "";
        finalData += res;
        // console.log(res);
      }
      finalData += '\n';
    }
    return finalData;
  }
  convertToNumber(n) {
    switch (n) {
      case 63:
        return 0;
      case 6:
        return 1;
      case 91:
        return 2;
      case 79:
        return 3;
      case 102:
        return 4;
      case 109:
        return 5;
      case 125:
        return 6;
      case 7:
        return 7;
      case 127:
        return 8;
      case 111:
        return 9;
      default:
        return 0;
    }
  }
}
