//json

const student = {
    name:"amy",
    age:21
}

console.log(student.name)


const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);

console.log(obj.result);