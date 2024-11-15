import {
    Client,
    Account,
    ID
} from 'appwrite'
import {
    conf
} from '../config/conf';

class authConfig {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appriteUrl)
            .setProject(conf.projectId);
        this.account = new Account(this.client);
    }

    async getCurrentAccount() {
        try {
            const result = await this.account.get();
            return result;

        } catch (error) {
            console.log('no users is logged in');
            return null;
        }
    }

    async createUser({
        name,
        email,
        password
    }) {
        try {
            const newAccount = await this.account.create(ID.unique(), email, password, name);
            if (newAccount) {
                return this.Login({
                    email,
                    password
                })
            };

        } catch (error) {
            if(error.code == 400){
                alert(`Please make sure:
                    * password is strong , 
                    * valid email Format,
                    * and Valid Name
                `)
            }
            else if(error.code == 409){
                alert(
                    `This email has already an account please login`
                )
            }
            else if(error.code == 500){
                alert('internal server error occured try after some time');
            }
        }
        return null;
    }

    async Login({
        email,
        password
    }) {
        try {
            const account = await this.account.createEmailPasswordSession(email, password);
            return account;
        } catch (error) {
            if(error.code==401){
                alert('Invalid Email or Password');
            }else if(error.code =='404'){
                alert('User Does not exist please sign up')
            }
            return null ; 
        }
    }

    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error('got error in logOut function', error);
        }
    }
}

const authService = new authConfig();

export default authService;