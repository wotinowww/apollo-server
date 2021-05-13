const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Category = require('../models/Category')
//require('dotenv').config()

const resolvers = {

    Mutation: {
        register: async (parent, {email, password}, context, info) => {

            const candidate = await User.findOne({email: email})

            if (candidate) {
                return {email: email, message: 'Такой email уже занят. Попробуйте другой.'}
            }