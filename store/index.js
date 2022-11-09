export const state = () => ({
    cars: [],
    filtered_cars: null,
    brands: null,
});

export const mutations = {
    saveCars(state, cars){
        for(let i = 0; i < cars.length; i++){
            for(let j = 0; j < cars[i].length; j++){
                state.cars.push(cars[i][j]);
            }
        }
    },
    setBrands(state){
        state.brands = [...new Set(state.cars.map(x => x.brandName).sort())];
    },
    setFilteredCars(state){
        state.filtered_cars = state.cars;
    },
    saveFilter(state, brand){
        if(brand == false){
            state.filtered_cars = state.cars;
        }else if(brand.length == 1){
            state.filtered_cars = state.cars.filter(car => car.brandName == brand);
        }else{
            let array = [];
            for(let i = 0; i < brand.length; i++){
                array.push(state.cars.filter(car => car.brandName == brand[i]));
            }
            state.filtered_cars = [];
            for(let i = 0; i < array.length; i++){
                for(let j = 0; j < array[i].length; j++){
                    state.filtered_cars.push(array[i][j]);
                }
            }

        }

    }
}

export const getters = {
    getCar: (state) => (id) => {
        return state.cars.filter(car => car.id == id);
    },
}

