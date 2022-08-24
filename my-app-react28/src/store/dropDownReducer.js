const initialState = [
    {
        key: 'Diana',
        value: "Diana",
        label: "Diana",
        image: {
            src: "https://cdn-icons-png.flaticon.com/512/4128/4128176.png",
        },
    },
    {
        key: 'Petro',
        label: "Petro",
        value: "Petro",
        image: {
            src: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
    }, {
        key: 'Max',
        label: "Max",
        value: "Max",
        image: {
            src: "https://cdn-icons-png.flaticon.com/512/4874/4874944.png",
        },
    }, {
        key: 'Maria',
        label: "Maria",
        value: "Maria",
        image: {
            src: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
        },
    },];

const dropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dropDownReducer;