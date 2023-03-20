import axios from "axios";

export const state = {
    user:[]
}
export const mutations={

    
    GET_USER(state, user){
        state.user = user
    },
    
}
export const getters={
   
}
export const actions = {

  
    async getUser({commit}){
        axios.get('http://localhost:4000/user',{

        }).then(response => response.data).then(user =>{
            commit('GET_USER',user)
          
        })
     
    },
    async deleteUser({commit,id}){
        await axios.delete(`http://localhost:4000/user/${id}`);
        commit('DELETE_USER');
    }
 
}


export default{
    state,
    getters,
    mutations,
    actions
}