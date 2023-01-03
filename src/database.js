import mongoose from 'mongoose';

(async() => {
    try {
        const db = await mongoose.connect("mongodb://localhost/crud-mongo");
        console.log("DB connected to", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})()
