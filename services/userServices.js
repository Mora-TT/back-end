const applicationDAO = require('../model/DAO/applicationDAO');


class UserService{
    constructor(){

    }
    async register(details){

        try {
         let user=await UserDAO.createOneEntity(details);
                if(user){
                    console.log(user);
                    const cmp = await bcrypt.compare(details.password, user.password);
                    if (cmp){
                        console.log('Password is correct');
                        let token= jwt.sign({username:details.username},config.key,{expiresIn:"6h"});
                        //console.log(token);
                        return {
                            err:0,
                            token: token,
                            msg:"Success",
                        };
                    }else{
                        console.log('password is incorrect');
                        return {
                            err:1,
                            token:"",
                            msg:'password is incorrect'
                        };
                        
                    }
                }else{
                    console.log('Check the user name again');
                    return {
                        err:1,
                        token:"",
                        msg:'check the user name'
                    };
                }
        } 
        catch (error) {
            console.log('Error when finding user');
            return {
                err:1,
                token:"",
                msg:'Something wend wrong'
            };
        }

    };

};
module.exports = UserService;