const express = require('express')
const res = require('express/lib/response')
const app = express()
const posts = require('./db/post.json')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}))

//routing chapter 3
app.get('/', (req, res) => {
  res.render('indexch3')
})

//routing chapter 4
app.get('/game', (req, res) =>{
  res.render('indexch4')
})

//serving data user static ke bentuk json
app.get('/login', (req, res) =>{
  res.status(200).send(posts)
  console.log('data is taken');
})

//membuat data user static untuk login di back end
app.get('/api/v1/posts/:user', (req, res) =>{
  const post = posts.find(i => i.user == req.params.user)
  res.status(200).send(post)
})

app.listen(4000, () =>{
  console.log('server is running...')
})