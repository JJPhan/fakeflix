import { RECEIVE_SNEAKERS, RECEIVE_SNEAKER} from '../actions/sneaker_actions'


const SneakersReducer = (state = {}. action) => {
    Object.freeze(state);
    let nextState = Object.assign(state, {})

    switch (action.type) {
        case RECEIVE_SNEAKERS:
            return action.sneakers
        case RECEIVE_SNEAKER:
            return nextState[action.sneaker.id] = action.sneaker
        default:
            state
    }
}

export default SneakersReducer
