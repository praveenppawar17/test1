import axios from "axios"

const url="http://localhost:3002"

export const getAllJobs = async (searchText) => {
    try {
        if(searchText){
            const jobResponse = await axios.get(`${url}/jobs?location=${searchText}`)
            return {
                isSuccess:true,
                jobResponse
            }
        }
        const jobResponse = await axios.get(`${url}/jobs`)
        return {
            isSuccess:true,
            jobResponse
        }
    } catch (error) {
        return {
            isSuccess:false,
            error
        }
    }
}