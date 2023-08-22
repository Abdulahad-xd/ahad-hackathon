import { client } from "./lib/client";

export  default async function FetchData() {
 
       
const data = await client.fetch(`https://fsfe6hdd.api.sanity.io/v2023-08-18/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D`)
return data
}