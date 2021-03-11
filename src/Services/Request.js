const Request = {
    server: "http://localhost:8080/",

    getStudents() {
        return fetch(this.server + "student/all").then(res => res.json());
    },

    getCourseType() {
        return fetch(this.server + "journal/types").then(res => res.json());
    },

    getCourseMark() {
        return fetch(this.server + "journal/mark").then(res => res.json());
    }
};
export default Request