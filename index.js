require('./lib/connectdb')
const { hash } = require('./lib/bcrypt')
const User = require('./models/User')
const Post = require('./models/Post')
const Comment = require('./models/Comment')
//4.8
User.findOne({email:'manager@gmail.com'})
.then(user1=>{ //user bị huỷ friend 
    // user2 unfriend user1
    return User.findOneAndUpdate({email:'guest@gmail.com'},{
        $pull:{
            friends: user1._id
        }
    },{new:true})
})
.then(user2=>{
    console.log(user2)
    // remove user2 ra khỏi list friend user1
    return User.findOneAndUpdate({email:'manager@gmail.com'},{
        $pull:{
            friends: user2._id
        }
    },{new:true})
})
.then(user1=>{
    console.log(user1)
})




//4.7
// // B send to A
// User.findOne({email:'manager@gmail.com'})
// .then(userSend=>{
//     // A accept B : set friend B cho A
//     return User.findOneAndUpdate({email:'guest@gmail.com'},{
//         $addToSet:{
//             friends: userSend._id
//         },
//         $pull:{
//             receiveRequests:userSend._id
//         }
//     },{new:true})
//     .then(userReceive=>{
//         console.log(userReceive)
//         return userReceive
//     })
//     .catch(err=>console.log(err))
// })
// .then(userAccept=>{
//     //set friend A cho B
//     return User.findOneAndUpdate({email:'manager@gmail.com'},{
//         $addToSet:{
//             friends: userAccept
//         },
//         $pull:{
//             sendRequests: userAccept._id
//         }
//     },{new:true})
// })
// .then(userSend=>console.log(userSend))
// .catch(err=>console.log(err))


/**
 *  2 user
 * 
 *  3 post
 * user 1 tạo được 2 post
 * user 2 tạo được 1 post
 * 
 *  2 comment 
 * user 1 cmt trên post 1
 * user 2 cmt trên post 1
 */
//user 1: ObjectId("5c9f1e745077ee0e99ed0761")
//user 2: ObjectId("5c9f1e745077ee0e99ed0762")

//4.6
// user 1 => user 2
// User.findOneAndUpdate({_id:'5c9f1e745077ee0e99ed0761'},{
//     $addToSet:{
//         sendRequests: '5c9f1e745077ee0e99ed0762'
//     }
// })
// .then((userSendRequest)=>{
//     return User.findOneAndUpdate({_id:'5c9f1e745077ee0e99ed0762'},{
//         $addToSet:{
//             receiveRequests: userSendRequest
//             // '5c9f1e745077ee0e99ed0761'
//         }
//     },{new:true})
// })
// .then(r=>console.log(r))
// .catch(err=>console.log(err))
//check
// User.findOne({_id:'5c9f1e745077ee0e99ed0761'})
// .then(r=>console.log(r))
// .catch(err=>console.log(err))


//4.5
// User.findOne({email:'manager@gmail.com'})
// .then(user=>{
//     //update post : likes
//     return Post.findByIdAndUpdate('5c9f2980735e5c14d7b657c4',{
//         $pull:{
//             likes: user._id
//         }
//     },{new:true})
// })
// .then(r=>console.log(r))
// .catch(err=>console.log(err))


 // 4.4
// User.findOne({email:'manager@gmail.com'})
// .then(user=>{
//     //update post : likes
//     return Post.findByIdAndUpdate('5c9f2980735e5c14d7b657c4',{
//         $addToSet:{
//             likes: user
//         }
//     },{new:true})
// })
// .then(r=>console.log(r))
// .catch(err=>console.log(err))


//4.3
// post 1: ObjectId("5c9f2980735e5c14d7b657c4")
// Comment.create({
//     author: '5c9f1e745077ee0e99ed0762',
//     post: '5c9f2980735e5c14d7b657c4',
//     content: 'User 2 comment tren post 1'
// })
// .then((comment)=>{
//     return Post.findByIdAndUpdate('5c9f2980735e5c14d7b657c4',{
//         $addToSet:{
//             comments: comment._id
//         }
//     },{new:true})
// })
// .then(r=>console.log(r))
// .catch(err=>console.log(err))


//post: ObjectId("5c9f29f1a0a39d151b24291b")
// find user
// update posts
// delete post 
// User.findByIdAndUpdate('5c9f1e745077ee0e99ed0761',{
//     $pull:{
//         posts: '5c9f29f1a0a39d151b24291b'
//     }
// })
// .then(()=>{
//     Post.findByIdAndRemove('5c9f29f1a0a39d151b24291b')
// })

// Post.findByIdAndRemove('5c9f29f1a0a39d151b24291b')
// .then(r=>console.log(r))
// .catch(r=>console.log(r))


//4.2
// Post.create({
//     author: '5c9f1e745077ee0e99ed0762',
//     content: 'Nội dung cho status 01 của user 2',
// }).then(post=>{
//     User.findOneAndUpdate({
//             _id:'5c9f1e745077ee0e99ed0762'
//         },{
//             $addToSet: {
//                 posts: post._id
//             }
//         },{
//             new:true
//         })
//         .then(result=>console.log(result))
//         .catch(err=>console.log(err))
// })
/**
 * {
    "_id" : ObjectId("5c9f1e745077ee0e99ed0760"),
    "posts" : [ 
        ObjectId("5c9f26396c5a4412f5b65db1")
    ],
    "friends" : [],
    "receiveRequests" : [],
    "sendRequests" : [],
    "email" : "admin@gmail.com",
    "password" : "$2b$08$5yJIFnDYTVSPlY5s6M6Vhe2XxS4.0ad1TWhTYn3.S6Jr7/H93NPzS",
    "name" : "Admin",
    "__v" : 0
}
 */
/**
 * {
    "_id" : ObjectId("5c9f1e745077ee0e99ed0760"),
    "posts" : [ 
        ObjectId("5c9f25c1c2ac7a12a577efef")
    ],
    "friends" : [],
    "receiveRequests" : [],
    "sendRequests" : [],
    "email" : "admin@gmail.com",
    "password" : "$2b$08$5yJIFnDYTVSPlY5s6M6Vhe2XxS4.0ad1TWhTYn3.S6Jr7/H93NPzS",
    "name" : "Admin",
    "__v" : 0
}
 */



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