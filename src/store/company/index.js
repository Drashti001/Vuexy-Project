import axios from "axios";
export const state={
    company:[]
}
export const mutations={
    ADD_COMPANY:(state,company) =>state.company.unshift(company),
    GET_COMPANY(state, company){
        state.company = company
    },

}
export const getters={
   
}
export const actions={
    async addCompany({commit},company){
      let response =  await axios.post('http://localhost:4000/company',company);
      console.log(response,'company dataaaaaa');
      commit("ADD_COMPANY");
    },
    async getCompany({commit}){
        axios.get('http://localhost:4000/company',{

        }).then(response => response.data).then(company =>{
            
            commit('GET_COMPANY',company);
            console.log(company,'response');
        })
    },
    
    
}
export default{
    state,
    getters,
    mutations,
    actions
}