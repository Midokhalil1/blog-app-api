import express from "express";
import cors from "cors"
// import { MongoClient } from "mongodb";
import 'dotenv/config'
import { addPost } from "./posts.js";
import {posts} from './mongoConnect.js'
// import { addPost } from "./posts.js";

const app = express()
app.use(cors())
app.use(express.json())

// const client = new MongoClient(process.env.MONGO_URI) // mongoclient is a class and we creating new instince of it 
// const database = client.db('blog')
// const posts = database.collection('posts')

// client.connect()
// console.log('connected to mongo')



// app.get('/', (req, res) => {
//     res.send('hello')
// })


app.listen(process.env.PORT, () => console.log(`listening to http://localhost:${process.env.PORT}....`))

// post - add one post item
// ---- author, date, test 

// app.post('/', async (req, res) => {
//     const newPost = {author: 'Jon', date: '2022-21-22', text: 'lorem lorem here'}
//     console.log('req.body ->', req.body)

//     await posts.insertOne(req.body)
//     res.send('item add')

// })

app.post('/', addPost)

app.get('/', async (req, res) => {
   const allPosts=await posts.find().toArray()
   res.send(allPosts)
})




// get - to get all post 









