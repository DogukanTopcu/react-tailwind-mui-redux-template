export const _blank = (_blank = "", action) => {
    switch (action.type) {
        case "HELLO":
            return "hello";
            break;
        case "HI":
            return action.payload;
            break;

        default:
            return _blank;
            break;
    }
}