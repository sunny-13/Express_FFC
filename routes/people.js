const express = require('express');
const router = express.Router();
const {getPeople,updatePeople,deletePeople,addPeople} = require('../controllers/people')

router.get('/',getPeople)
router.post('/',addPeople)
router.delete('/:id',deletePeople)
router.put('/:id',updatePeople)

module.exports = router;
