import axios from "axios";

export const state = {
    owner:[]
}
export const mutations={

    
    GET_OWNER(state, owner){
        state.owner = owner
    },
    ADD_OWNER:(state,owner) => state.owner.unshift(owner),
    UPDATE_OWNER:(state,owners) => (state.owner == state.owners.map((item)=>{
        if(item.id === owners.id){
            return Object.assign({},item ,owners.data);
        }
        // return item;
    })),
    
}
export const getters={
   
}
export const actions = {

  
    async addOwner({commit},owner){
        let response = await axios.post('http://localhost:4000/owner',owner);
          console.log('add');
          commit("ADD_OWNER");
        console.log(response,'data');
      },
      async getOwner({commit}){
        axios.get('http://localhost:4000/owner',{

        }).then(response => response.data).then(owner =>{
            
            commit('GET_OWNER',owner);
            console.log(owner,'response');
        })
    },
    async updateOwner({ commit },data ) {
        alert('alertttt');
        console.log(data.id,'fseddfrereereer');
      
        let response = await axios.put(`http://localhost:4000/owner/${data.id}`,
          data
        );
        console.log(response,'response');
        commit('UPDATE_OWNER', response.data);
      }, 
    
 
}


export default{
    state,
    getters,
    mutations,
    actions
}