import { LoginModel } from "./auth.model.js";

class LoginService {
    #_loginModel;

    constructor() {
        this.#_loginModel = new LoginModel();
    }

    async getAll() {
        const data = await this.#_loginModel.getAll();
        return data;
    }

    async signUp(user_tg) {
        try {
            const retrieve = await this.#_loginModel.userRetrieve(user_tg);    
            if (retrieve && retrieve.length > 0 && user_tg === retrieve[0].user_tg) {
                const complated = await this.#_loginModel.getcompletedtasks(user_tg);
                const uncomplated = await this.#_loginModel.getTasks(user_tg);
                const tournament = await this.#_loginModel.getAll();
                return {
                    tournament,
                    retrieve: {
                        user_tg: retrieve[0].user_tg,
                        balance_winnie: retrieve[0].balance_winnie,
                        balance_ton: retrieve[0].balance_ton,
                        status: retrieve[0].status,
                        lastdate: retrieve[0].lastdate,
                        bonuses: retrieve[0].bonuses,
                        date: retrieve[0].date,
                        spin_date: retrieve[0].spin_date,
                        referer: retrieve[0].referer
                    },
                    uncomplated,
                    complated,
                    successfully: 200,
                };
            } else {
                const data = await this.#_loginModel.signUp(user_tg);
                const newTaskUser = await this.#_loginModel.newTaskUser(user_tg);              
                const complated = await this.#_loginModel.getcompletedtasks(user_tg);
                const uncomplated = await this.#_loginModel.getTasks(user_tg);
                const tournament = await this.#_loginModel.getAll();
                return {
                    tournament,
                    retrieve: {
                        user_tg: data[0].user_tg,
                        balance_winnie: data[0].balance_winnie,
                        balance_ton: data[0].balance_ton,
                        status: data[0].status,
                        lastdate: data[0].lastdate,
                        bonuses: data[0].bonuses,
                        date: data[0].date,
                        spin_date: data[0].spin_date,
                        referer: data[0].referer,
                    },
                    uncomplated,
                    complated,
                    message: "User Successfully created",
                    successfully: 201,
                };
            }
        } catch (error) {
            console.error(error);
            // Handle any unexpected errors
            throw new Error('An error occurred during the sign-up process.');
        }
    }
    

    async updateStatus(user_tg,status) {
            const retrive = await this.#_loginModel.userRetrieve(user_tg);
            const data = await this.#_loginModel.updateStatus(user_tg,status);
            return {
                id:retrive[0].id,
                user_tg_id: retrive[0].user_tg_id,
                status:retrive[0].status,
                message: "User Successfully status updated",
                successfully: 202,
            }
    }

    async updateByBalance(user_tg,balance_winnie,date) {
        const retrive = await this.#_loginModel.userRetrieve(user_tg);
        const data = await this.#_loginModel.updateByBalance(user_tg,balance_winnie,date);
        return {
            id:retrive[0].id,
            user_tg_id: retrive[0].user_tg_id,
            balance_winnie:retrive[0].balance_winnie,
            message: "User Successfully balance updated",
            successfully: 202,
        }
    }


    async updateDate(user_tg,lastdate,bonuses,balance_winnie) {
        const retrive = await this.#_loginModel.userRetrieve(user_tg);
        const data = await this.#_loginModel.updateDate(user_tg,lastdate,bonuses,balance_winnie);
        return {
            id:retrive[0].id,
            user_tg_id: retrive[0].user_tg_id,
            date:retrive[0].date,
            message: "User Successfully date updated",
            successfully: 202,
        }
    }

    async getTournament(user_tg) {
        const data = await this.#_loginModel.getTournament()
        // const data = await this.#_loginModel.getTournament(user_tg)
        return data
    }


    async getTasks (user_tg) {
        const complated = await this.#_loginModel.getcompletedtasks(user_tg)
        const uncomplated = await this.#_loginModel.getTasks(user_tg)
        return {
            uncomplated,
            complated
        }
    }

   
    async postcompletedTasks(user_tg,task_id) {
        const data = await this.#_loginModel.postcompletedTasks(user_tg,task_id)
        return data
    }


    async updatestatus(user_tg,status,date) {
        const data = await this.#_loginModel.updatestatus(user_tg,status,date)
        return data
    }


    async updatespin(user_tg,balance_winnie,spin_date){
        const data = await this.#_loginModel.updatespin(user_tg,balance_winnie,spin_date)
        return data
        
    }










    

    async updateUser({ email, status }) {
        const data = await this.#_loginModel.updateUser({ email, status });
        const [user] = await this.#_loginModel.userRetrieve({
            email
            
        });

        if (user) {
            return {
                 data:data[0].id,
                message: "User Successfully activated",
                
                status: 201,
            };
        }

        return {
            message: "User not found",
            status: 201,
        };
    }
}

export default new LoginService();
