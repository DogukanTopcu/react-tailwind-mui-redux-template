export default (_default = [], action) => {
    switch (action.type) {
        case "DEFAULT":
            return action.payload;
            break;

        case "DON":
            return "don";
            break;
        
        default:
            return _default;
            break;
    }
}