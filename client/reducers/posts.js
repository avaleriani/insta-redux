function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_TYPE':
            const i = action.indexOf;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ];
            break;
        default:
            return state;
            break;
    }
}
export default posts;