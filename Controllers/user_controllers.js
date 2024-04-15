const Models = require('../Models/user_models')
let count = 0;

 
 
const Add_contacts = (req, res) => {
     const contact = req.body;
    count++


    const lists = new Models({
        "Serial_no":count,
        ...contact
    })


    lists.save()
    .then((data)=>{
        res.status(200).json({"Success":"Contact added successfully", "data":data})
    })
    .catch((err)=>{
        res.status(500).json({"Failure":"Something went wrong unable to add contact", "Error":err})
    })
}

const get_contacts= (req, res) => {
  
    const id = req.params.id;

    Models.find({ "Serial_no": id })
    .then((data)=>{
        if(data){
        res.status(200).json({"Success":"Contact fetched successfully", "data":data})
        } else {
            return res.status(404).json({ "error": "Contact not found" });
        }
    })
    .catch((err)=>{
        res.status(500).json({"Failure":"Something went wrong unable to get contacts", "Error":err})
    })
        


}
const Update_contacts = (req, res) => {
    const id = req.params.id;
    const updated_contact = req.body;

    // Validation: Check if updated_contact is empty or invalid
    if (!updated_contact) {
        return res.status(400).json({ "error": "Invalid request body" });
    }

    Models.findOneAndUpdate({ "Serial_no": id }, updated_contact, { new: true })
        .then((data) => {
            if (!data) {
                // Contact with the given id not found
                return res.status(404).json({ "error": "Contact not found" });
            }
            // Contact successfully updated
            res.status(200).json({ "success": "Contact updated successfully", "data": data });
        })
        .catch((err) => {
            // Database error
            console.error("Database error:", err);
            res.status(500).json({ "error": "Internal server error" });
        });
};


const Delete_contact = (req, res) => {

    const id = req.params.id;

    Models.findOneAndDelete({ "Serial_no": id })
    .then((data)=>{
        res.status(200).json({ "success": "Contact deleted successfully", "data": data });
    })
    .catch((err)=>{
        res.status(500).json({ "error": "Internal server error" });
    })
        

}




module.exports = {Add_contacts, get_contacts, Update_contacts, Delete_contact}