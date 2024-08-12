import LoginService from "./auth.service.js";
class LoginController{


    async getAll(req,res){
        const data = await LoginService.getAll()
        res.status(200).json(data)
    }


    async signUp(req,res){
        const {user_tg} = req.body        
        const data = await LoginService.signUp(user_tg)
        res.status(200).json(data)  
         
    }

    async updateStatus(req,res){
        const {user_tg,status} = req.body
        const data = await LoginService.updateStatus(user_tg,status)
        res.status(200).json(data)
    }

    async updateByBalance(req,res){
        const {user_tg,balance_winnie,date} = req.body
        const data = await LoginService.updateByBalance(user_tg,balance_winnie,date)
        res.status(200).json(data)
    }

    async updateDate(req,res){
        const {user_tg,lastdate,bonuses,balance_winnie} = req.body
        const data = await LoginService.updateDate(user_tg,lastdate,bonuses,balance_winnie)
        res.status(200).json(data)
    }

    async getTournament(req,res){
        const {user_tg} = req.body
        const data = await LoginService.getTournament(user_tg)
        res.status(200).json(data)
    }

    async getTasks (req,res){
        const {user_tg} = req.body
        const data = await LoginService.getTasks(user_tg)
        res.status(200).json(data)

        
    }
    
     async postcompletedTasks(req,res){
         const {user_tg,task_id} = req.body      
         const data = await LoginService.postcompletedTasks(user_tg,task_id)
         res.status(200).json(data)
     }

     async getcompletedtasks(req,res){
         const {user_tg} = req.body
         const data = await LoginService.getcompletedtasks(user_tg)
         res.status(200).json(data)
     }

     async updatestatus(req, res){
         const {user_tg,status,date} = req.body      
         const data = await LoginService.updatestatus(user_tg,status,date)
         res.status(200).json(data)
     }



     async updatespin(req, res) {
         const {user_tg,balance_winnie,spin_date} = req.body
         const data = await LoginService.updatespin(user_tg,balance_winnie,spin_date)
         return data
     }




    // async updateUser(req,res){
    //     const {email,status} = req.body

    //     const data = await LoginService.updateUser({email,status})
    //     res.status(200).json(data)
    // }

   

}

export default new LoginController();
