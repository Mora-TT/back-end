const UserService = require('../services/userServices');
const Application =require('../model/applicationModel');
const userController={};
let userServices= new UserService();


userController.register=async (req, res, next) => {
  
    console.log('registering new user');

    var result = await userServices.check(req.body.username);
    console.log(result);

    try {
        if(result){
            const response = {
            err: 1,
            token: "",//should get object list
            msg: "UserName Already Taken"
            }
            console.log("username Already taken")
            return res.json(response);
        }else{
            const state = await userServices.register(req.body);
            //console.log(state);
            //const mail_list= [{"email":"sfg","df":"df"}];
            if(state.err==0){
            const response = {
                err: 0,
                token: state.token,//should get object list
                msg: ""
            }
            return res.json(response);
            }else{
            const response = {
                err: 1,
                token: "",
                msg: state.msg
            }
            return res.json(response);
            }
        }


        
    } catch (err) {
    next(err);
    }

};

module.exports = userController;