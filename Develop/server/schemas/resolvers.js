const { AuthenticationError } = require('apollo-server-express');
const {
    User
} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent , args, context) => {
            return User.findOne({
                _id
            })
        },


    },
    Mutation: {
        login: async (parent, {email , password}) => {
            const user = await User.findOne(email)
            if (!user) {
                throw new AuthenticationError('Invalid login') 
                
            }
            const correctpw = user.isCorrectPassword(password)
            if (!correctpw) {
                throw new AuthenticationError('Invalid login')
            }
            const token = signToken(user)
            return {token , user}
        }
    }
}