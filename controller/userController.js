const UserService = require('../services/userServices');

var fs = require('fs');

/** Permissible loading a single file, 
    the value of the attribute "name" in the form of "recfile". **/




const userController = {};
let userServices = new UserService();


userController.register = async (req, res, next) => {

    console.log('registering new application');
   
    try {

        const state = await userServices.register(req);
        //console.log(state);
        //const mail_list= [{"email":"sfg","df":"df"}];
             /** When using the "single"
         data come in "req.file" regardless of the attribute "name". **/

        if (state.err == 0) {
            const response = {
                err: 0,
                token: state.token,//should get object list
                msg: "successful"
            }
            console.log("Registration Successful");
            return res.json(response);
        } else {
            const response = {
                err: 1,
                token: "",
                msg: state.msg
            }
            return res.json(response);
        }


        

    } catch (err) {
        next(err);
    }


};
userController.getEntries = async (req, res, next) => {

    console.log('getting all Entries ');

    var result = await userServices.getEntries();
    console.log(result);
    try {
        return res.json(result);

    } catch (err) {
        next(err);
    }
};
module.exports = userController;