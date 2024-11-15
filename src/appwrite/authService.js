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
            return null ; 
        } 
    }

    async createUser({
        name,
        email,
        password
    }) {
        try {
            const newAccount = await this.account.create(ID.unique(), email, password, name);
            if (newAccount) this.Login({
                email,
                password
            });

        } catch (error) {
            console.log('got error while creating user');
            console.log(error);
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
            console.log(error);
            console.log('got error while login')
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