const express = require('express');
const {Add_contacts, get_contacts, Update_contacts, Delete_contact} = require('../Controllers/user_controllers');
const router = express.Router();


//To add Contacts
router.post('/contacts', Add_contacts)

//To get contacts
router.get('/contacts/:id', get_contacts)

//To edit contacts completely
router.put('/contacts/edit/:id', Update_contacts)

//To delete contacts
router.delete('/contacts/delete/:id', Delete_contact)





module.exports = router;