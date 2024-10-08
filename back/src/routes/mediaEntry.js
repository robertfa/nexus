import express from 'express'
const router = express.Router()
import {findAll,insertMediaEntry,findOne,updateMediaEntry} from '../controllers/mediaEntry.js'
/*
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
*/

router.get('/', findAll)

router.get('/:id', findOne)

router.post('/', insertMediaEntry)

router.put('/:id', updateMediaEntry)


export default router