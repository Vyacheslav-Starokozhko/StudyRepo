import axios from "axios";

export const getPosts = ():Promise<IPost[]>=>{
    return axios.get(`http://localhost:5000/posts`)
        .then(function (response) {
            // handle success
            console.log("response", response);

            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
        });
}