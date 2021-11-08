import axios from "axios"
import React from "react"
import { getCookie } from "../DocumentHelpers"

interface Headers{
    [key:string]:string|JSON
}

const BaseURL:string|undefined = process.env.BACKEND_URL
let headers:Headers = {} as Headers
const AuthTokens:string|null = getCookie("AuthTokens")
if(AuthTokens){
    headers.Authorization = AuthTokens
}

const axiosInstance = axios.create({
    baseURL:BaseURL,
    headers
})