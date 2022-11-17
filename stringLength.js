const stringLength = string => {
  if(string.length >= 1 && string.length <= 10){
    return string.length;
  }else {
    return 'Error word length < 1 or > 10';
  }
}
stringLength('cssssssssss');

module.exports = stringLength;