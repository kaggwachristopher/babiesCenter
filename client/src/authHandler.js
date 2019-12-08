import axios from "axios";

const url = "http://localhost/api/accounts/";

class authHandler {
  //   static loginUser1(user) {
  //     const res = await axios.post(`${url}register`, user);
  //   }
  static loginUser() {
    // debugger;
    this.axios
      .post(`${url}login`, this.loginData)
      .then(() => {
        this.$router.push({ name: "DisplayItem" });
      })
      .catch(() => {
        this.$router.push({ name: "Register" });
      });
  }
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}users`);
        const data = res.data;
        resolve(
          data.map(user => ({
            ...user
          }))
        );
      } catch (err) {
        reject(err.message);
      }
    });
  }
  static insertAppoitment(user) {
    return axios.post(`${url}register`, user);
  }
  static deleteuser(id) {
    return axios.delete(`${url}users/${id}`);
  }
}
export default authHandler;
