const testDAO = require('../model/DAO/testDAO');

class UserService {
    constructor() {

    }
    async register(details) {

        try {
           await testDAO.saveEntry(details);
            return {
                err: 0,
                token: "",
                msg: "Success",
            };
        }
        catch (error) {
            console.log('Error when saving the application');
            return {
                err: 1,
                token: "",
                msg: 'Something wend wrong'
            };
        }

    };
    async getEntries() {
        try {
            var addresses = await testDAO.getEntries();
            return addresses;
        } catch (error) {
            console.log('Error when finding Entries');
        }

    }

};
module.exports = UserService;