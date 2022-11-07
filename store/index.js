export const state = () => ({
    cars: null,
});

export const mutations = {
    saveCars(state, cars){
        state.cars = cars;
    }
}

export const getters = {
    getCar: (state) => (id) => {
        return state.cars.filter(car => car.sku == id);
    },
}