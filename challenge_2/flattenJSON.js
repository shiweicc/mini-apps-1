/*

firstName,lastName,county,city,role,sales
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
Allen,Price,San Mateo,Burlingame,Sales Person,2500000
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000

1. flatten the object
2. put it into CSV file
3. send CSV file and form back to the client

I: an object
O: a string: first line is all the keys, next lines are all the values of each object
*/


const flatten = (obj) => {
  let arr = Object.keys(obj);
  arr.pop();

  let res = '';
  arr.forEach((item) => {
    res += item + ',';
  })

  res = res.slice(0, -1) + '\n';
  res += helper(obj);
  return res;
}

const helper = (obj) => {
  str = '';
  for (const key in obj) {
    if (!Array.isArray(obj[key])) {
      str += obj[key] + ',';
    }
  }

  str = str.slice(0, -1) + '\n';

  if (obj.children.length > 0) {

    obj.children.forEach((child) => {
      str += helper(child);
    })
  }

  return str;
}