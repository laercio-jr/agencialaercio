import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
	prop1: function(state, action) {
	return {
        nome : "AgênciaLJ"
    }
	},

	prop2: function(state, action) {
	return {
        viagens: "Disponiveis"
    }
    }
});


function store() {
	return createStore(reducers)
}

export default store