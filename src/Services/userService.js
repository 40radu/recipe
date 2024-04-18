import Http from "./http";

class UserService extends Http {
    static async createUser (data){
        try {
            const res = await this.post("user", {
                ...data,
                role: "user"
            });
            // const res = await this.post("todo", data);

            return res;
        } catch (error) {
            console.error(error.message)
        }


    }

    static async getAllUsers () {
        try {
            const rest = await this.get ("user");
            return rest;
        } catch (error) {
            console.log(error.message)
        }
    }

    static async loginUsers (data){
        try {
            const resp = await this.post("user/login",data)
            return resp
        } catch (error) {
            console.log(error.message)
        }
    }

    static  async updateUser (data){
        try {
            const resp = await this.put("user", data);
            return resp;
        } catch (error) {
            console.log (error.message)
            
        }
    }
}



export default UserService