var fs = require('fs');


function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
     fs.readFile('./products.txt', 'utf8', function(err, data){
      // 데이터를 받으면 resolve() 호출
      resolve(data);
    });
  });
};

getData().then(function (tableData) {
  console.log(tableData);
});
