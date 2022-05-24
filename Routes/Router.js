const express = require('express')
const router = express.Router()
const Controllers = require('../Controllers/PostsController')

router.post('/post', express.json(), Controllers.newPost)

module.exports = router