export const state = () => ({
    cars: [],
});

export const mutations = {
    saveCars(state, cars){
        for(let i = 0; i < cars.length; i++){
            for(let j = 0; j < cars[i].length; j++){
                state.cars.push(cars[i][j]);
            }
        }
    }
}

export const getters = {
    getCar: (state) => (id) => {
        return state.cars.filter(car => car.sku == id);
    },
}

