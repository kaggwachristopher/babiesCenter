import axios from "axios";

const url = "http://localhost:3000/api/appoitments/";

class AppoitmentsHandler {
  static getAppoitments() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(appoitment => ({
            ...appoitment,
            createdAt: new Date()
          }))
        );
      } catch (err) {
        reject(err.message);
      }
    });
  }
  static insertAppoitment(appoitment) {
    return axios.post(url, appoitment);
  }
  static deleteAppoitment(id) {
    return axios.delete(`${url}${id}`);
  }
}
export default AppoitmentsHandler;
