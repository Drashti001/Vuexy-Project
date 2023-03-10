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
        return item;
    }))
}
export const getters={
   
}
export const actions={
    async addCars({commit},cars1){
      let response = await axios.post('http://localhost:3000/cars',cars1);
        console.log('add');
        commit("ADD_CAR");
      console.log(response.data,'data');
    },

    async getCars({commit}){
        axios.get('http://localhost:3000/cars',{

        }).then(response => response.data).then(cars =>{
            commit('GET_CARS',cars)
        })
    },
    async updateCars({ commit }, car) {
        let response = await axios.put(
          `http://localhost:3000/cars/${car.id}`,
          car
        );
        commit('UPDATE_CARS', response.data);
      },   
 
}


export default{
    state,
    getters,
    mutations,
    actions
}