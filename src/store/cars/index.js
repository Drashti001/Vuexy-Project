import axios from "axios";

export const state ={
    cars:[]
}

export const mutations={
    ADD_CAR:(state,cars) => state.cars.unshift(cars),
    
    GET_CARS(state, cars){
        state.cars = cars
    },
    UPDATE_CARS:(state,car) => (state.cars == state.car.map((item)=>{
        if(item.id === car.id){
            return Object.assign({},item ,car.data);
        }
        // return item;
    })),
    DELETE_CARS(state,id){
        console.log(id,'commit');
        let index = state.cars.filter(car => car.id != id)
        //let index = state.cars.find(car => car.id != id)
        state.cars = index;
    }
}
export const getters={
   
}
export const actions = {

    async addCars({commit},cars1){
      let response = await axios.post('http://localhost:3000/car',cars1);
        console.log('add');
        commit("ADD_CAR");
      console.log(response.data,'data');
    },

    async getCars({commit}){
        axios.get('http://localhost:3000/car',{

        }).then(response => response.data).then(cars =>{
            commit('GET_CARS',cars)
        })
    },
    
    async updateCars({ commit },data ) {
      
        let response = await axios.put(`http://localhost:3000/car/${data.id}`,
          data
        );
        console.log(response,'response');
       commit('UPDATE_CARS', response.data);
      }, 
      
      async deleteCars({commit},id) {
       // console.log(id,'delete id');
        await axios.delete(`http://localhost:3000/car/${id}`);
       //console.log(id,'id fetch');
        commit('DELETE_CARS',id);
      }
 
}


export default{
    state,
    getters,
    mutations,
    actions
}