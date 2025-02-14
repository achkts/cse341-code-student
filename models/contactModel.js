const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO).
    
    then(() => {
        console.log('Connected to MongoDB')
    }).
    catch((e) => {
        console.error('Error connecting to MongoDB', e.message)
    })

const contactSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    birthday: {type:Date, required:true},
    email: {type:String, required:true},
    favoriteColor: {type:String, required:true},
    lastName: {type:String, required:true},
})

module.exports = mongoose.model('contacts', contactSchema)