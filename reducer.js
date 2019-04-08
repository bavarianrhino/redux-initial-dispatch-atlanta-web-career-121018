// let state = {counter: 0};
let state;

function changeState(state = { count: 0 }, action) {
    switch (action.type) {

        case 'INCREASE_COUNT':
            return { count: state.count + 1 }

        case 'INCREASE_COUNTX5':
            return { count: (state.count)*5 }

        case 'INCREASE_COUNTX100':
            return { count: (state.count)*100 }

        default:
            return state;
    }
}

function dispatch(action) {
    state = changeState(state, action)
    render()
}

function render() {
    document.innerHTML = state.count
}

dispatch({ type: '@@INIT' })
dispatch({ type: 'INCREASE_COUNT' }), console.log(state)
dispatch({ type: 'INCREASE_COUNTX5' }), console.log(state)
dispatch({ type: 'INCREASE_COUNTX100' }), console.log(state)
dispatch({ type: 'INCREASE_COUNT' }), console.log(state)
dispatch({ type: 'INCREASE_COUNTX100' }), console.log(state)
