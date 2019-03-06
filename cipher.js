function cipher(S, shift, action) {
  if (!Number.isInteger(shift)) {
    throw "Please enter an integer as a shift";
  }
  else {
    let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let listUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let sArray = S.split("");
    let strArray = [];

    //for encryption
    if (action === 'encrypt') {
      for (let index = 0; index < sArray.length; index++) {
        //for lower cases
        if (list.indexOf(sArray[index]) > -1) {
          let position = list.indexOf(sArray[index]);
          let letterindex = position + shift;
          if (letterindex > 26) {
            //to handle large shifts
            letterindex = letterindex%26;
            strArray.push(list[letterindex]);
          }
          else {
            strArray.push(list[letterindex]);
          }
        }
        //for upper cases
        else if (listUpper.indexOf(sArray[index]) > -1) {
          let position = listUpper.indexOf(sArray[index]);
          let letterindex = position + shift;
          if (letterindex > 26) {
            //to handle large shifts
            letterindex = letterindex%26;
            strArray.push(listUpper[letterindex]);
          }
          else {
            strArray.push(listUpper[letterindex]);
          }
        }
        //for white spaces and other non alphabets
        else{
          strArray.push(sArray[index]);
        }
      }
    }
    //for decryption
    else if(action === 'decrypt'){
      for (let index = 0; index < sArray.length; index++) {
        //for lower cases
        if (list.indexOf(sArray[index]) > -1) {
          let position = list.indexOf(sArray[index]);
          let letterindex = position - shift;
          if (letterindex < 0) {
            //to handle large shifts
            letterindex = 26 + letterindex%26;
            strArray.push(list[letterindex]);
          }
          else {
            strArray.push(list[letterindex]);
          }
        }
        //for upper cases
        else if (listUpper.indexOf(sArray[index]) > -1) {
          let position = listUpper.indexOf(sArray[index]);
          let letterindex = position - shift;
          if (letterindex > 26) {
            //to handle large shifts
            letterindex = 26 + letterindex%26;
            strArray.push(listUpper[letterindex]);
          }
          else {
            strArray.push(listUpper[letterindex]);
          }
        }
        //for white spaces and other non alphabets
        else{
          strArray.push(sArray[index]);
        }
      }
    }
    //handle invalid action
    else{
      throw "Invalid Action";
    }
    //concatenate the elements in the array
    let str = ""
    for (let index = 0; index < strArray.length; index++) {
      if (strArray[index]) {
        str = str + strArray[index];
      }
    }
    return str;
  }
}
