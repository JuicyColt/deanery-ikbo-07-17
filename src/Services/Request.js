const Request = {
    server: "http://localhost:8080/",

    getStudents() {
        return fetch(this.server + "student/all").then(res => res.json());
    }
};
export default Request