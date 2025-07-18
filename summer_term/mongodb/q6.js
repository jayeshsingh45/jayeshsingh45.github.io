db.employees.aggregate([
    {$project: {_id:0,name:1,location:1}},
    {$unwind: "$location"},
]);


db.empCountry.lookup({
    empId:
})

db.employees.aggregate([
    {$group:{_id:{country:"$country", name:"$name"}}}

    total:
])


