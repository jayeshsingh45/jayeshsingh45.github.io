db.employees.insertMany([
    {
        name: "Adithya smith gupta",
        email: "john@gmail.com",
        department: "IT",
        salary: 1456,
        location: ["FL", "OH"],
        date: Date(),
    },
    {
        name: "Rahul Aditya 2",
        email: "john@gmail.com",
        department: "IT",
        salary: 1456,
        location: ["FL", "OH"],
        date: Date(),
    }
])

db.employees.find()
db.employees.find().skip(1)
db.employees.find().limit(1)

db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0,name:1,salary:1}
);

db.employees.find(
    {salary:{$lte:3000}},
    {_id:0,name:1,salary:1}
);

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}}
);

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:7}}
);

