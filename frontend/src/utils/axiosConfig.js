
export const base_url = "http://localhost:5000/api/"


export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};


// export const base_url = "http://localhost:5000/api/"

// export const getTokenFromLocalStorage = localStorage.getItem("token")
  
 
//   console.log(getTokenFromLocalStorage)
// export const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage!== null ? getTokenFromLocalStorage : ""
//     }`,
//     Accept: "application/json",
//   },
// };