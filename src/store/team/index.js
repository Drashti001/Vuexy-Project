import axios from "axios";

export const state = {
    member:[]
}
export const mutations={ 
    GET_MEMBER(state,member){
        state.member = member
    },

    ADD_TEAM:(state,member) => state.member.unshift(member),
   
    // UPDATE_TEAM:(state,members) => (state.member == state.members.map((item)=>{
    //     if(item.id === members.id){
    //         return Object.assign({},item ,members.data);
    //     }
        // return item;
   // })),

}
export const getters={
   
}
export const actions={
    async addTeam({commit},member){
      let response =  await axios.post('http://localhost:4000/member',member);
      console.log(response,'member dataaaaaa');
      commit("ADD_TEAM");
    },
    async getMember({commit}){
        axios.get('http://localhost:4000/member',{

        }).then(response => response.data).then(member =>{
            
            commit("GET_MEMBER",member);
            console.log(member,'member fetch response');
        })
    },
    // async updateTeam({ commit },data ) {
    //     alert('alertttt');
    //     console.log(data.id,'fseddfrereereer');
      
    //     let response = await axios.put(`http://localhost:4000/member/${data.id}`,
    //       data
    //     );
    //     console.log(response,'response');
    //    commit('UPDATE_TEAM', response.data);
    //   }, 
      
    
    
    
}
export default{
    state,
    getters,
    mutations,
    actions
}