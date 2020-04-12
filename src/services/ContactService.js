import axios from "axios";

const BASE_URL = "http://localhost:5555";

export function contactCreate(data) {
  return axios
    .post(`${BASE_URL}/contact/create`, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      fullText: data.fullText,
      
    })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err.message));
}

export function getContact() {
  return axios
    .get(`${BASE_URL}/contact/list`)
    .then(response => response.data)
    .catch(err => Promise.reject(err.message));
}