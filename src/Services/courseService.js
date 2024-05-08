import Http from "./http";

class CourseService extends Http {

    static async createCourse(data) {
        try {
            const resp = await this.post("course", data);
            // const resp = await this.post("course", {...data,role:"user"});

            return resp;
        } catch (error) {
            console.error(error.message)
        }
    }

}

export default CourseService