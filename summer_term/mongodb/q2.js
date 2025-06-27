db.employees.insertOne(
    
    {
        name: "John Smith",
        email: "john@gmail.com",
        department: "IT",
        salary: 1456,
        location: ["FL", "OH"],
        date: Date(),
    }
);

db.employees.find()

//show collections