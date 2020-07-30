const Contacts = require('../models/contactSchema')
module.exports.home = function(req,res){
    Contacts.find({},function(err,contact){
        if(err){
            return console.log("Error in finding the contact");
        }
        return res.render('home.ejs',{
            title:"My Contact List",
            contactList: contact
        })
    })
}

module.exports.createContact = function(req,res){
    Contacts.create({
        name:req.body.name,
        contact:req.body.contact
    },function(err,contact){
        if(err){
            return console.log("Error in creating contact");
        }
        return res.redirect('back');
    })
}

module.exports.deleteContact = function(req,res){
    var arr = Object.keys(req.body);
    for(var i=0;i<arr.length;i++){
        var id = arr[i];
        Contacts.findByIdAndDelete(id,function(err){
            if(err){
                return console.log("Error in deleting the Contact")
            }
        })
    }
    return res.redirect('back')
}