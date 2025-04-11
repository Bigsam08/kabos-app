/**
 * create an axios instance to fetch api
 */

import axios from "axios";

const apiFetch = axios.create({
    baseURL: "http://localhost:5006/api",
    withCredentials: true
});

export  { apiFetch };