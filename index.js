require('./lib/connectdb')
const { hash } = require('./lib/bcrypt')
const User = require('./models/User')
const Post = require('./models/Post')
const Comment = require('./models/Comment')

//4.2
// Post.insertMany([
//     {
//         author: '5c9f1e745077ee0e99ed0760',
//         content: 'Nội dung cho status 01 của user 1',
//     },
//     {
//         author: '5c9f1e745077ee0e99ed0760',
//         content: 'Nội dung cho status 02 của user 1',
//     },
//     {
//         author: '5c9f1e745077ee0e99ed0761',
//         content: 'Nội dung cho status 01 của user 2',
//     },
//     {
//         author: '5c9f1e745077ee0e99ed0761',
//         content: 'Nội dung cho status 02 của user 2',
//     }
// ])
/**
{
    "_id" : ObjectId("5c9f209a3f50e80fba5a63da"),
    "likes" : [],
    "comments" : [],
    "author" : ObjectId("5c9f1e745077ee0e99ed0761"),
    "content" : "Nội dung cho status 02 của user 2",
    "__v" : 0
}
 */
//4.1
// hash('111111')
// .then(passworsHash=>{
//     User.insertMany([
//         {
//             email:'admin@gmail.com',
//             password: passworsHash,
//             name: 'Admin'
//         },
//         {
//             email:'manager@gmail.com',
//             password: passworsHash,
//             name: 'Manager'
//         },
//         {
//             email:'guest@gmail.com',
//             password: passworsHash,
//             name: 'Guest'
//         }
//     ])
// })
/*
{
    "_id" : ObjectId("5c9f1e745077ee0e99ed0760"),
    "posts" : [],
    "friends" : [],
    "receiveRequests" : [],
    "sendRequests" : [],
    "email" : "admin@gmail.com",
    "password" : "$2b$08$5yJIFnDYTVSPlY5s6M6Vhe2XxS4.0ad1TWhTYn3.S6Jr7/H93NPzS",
    "name" : "Admin",
    "__v" : 0
}
*/