const User = require('../models/users.model');
const  mongoose = require('mongoose');
class userLogic {
    static async deleteUser(id) {
        try {
            await User.findByIdAndDelete(id)
            return id
        } catch (error) {
            console.error(error)
            throw new Error('faild to delete user')
        }
    }
    static async upsertUser(id, userFields){
        try {
            const generatedId = await mongoose.Types.ObjectId() 
            const updatedUserFromDb = await User.findOneAndUpdate({_id: id || generatedId}, {
                ...userFields.avatar && { avatar: userFields.avatar},
                ...userFields.contacts && { contacts: userFields.contacts},
                ...userFields.first_name && { first_name: userFields.first_name },
                ...userFields.gender && { gender: userFields.gender },
                ...userFields.job && { job: userFields.job },
                ...userFields.last_name && {last_name: userFields.last_name },
                ...userFields.location && { location: userFields.location }
            }, { new: true, upsert: true })
            return updatedUserFromDb
        } catch (error) {
            console.error(error)
            throw new Error('faild to update user')
        }
    }
}

module.exports = userLogic