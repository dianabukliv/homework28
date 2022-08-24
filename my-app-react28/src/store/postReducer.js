const defaultState = [
    {
        key: "Roberto",
        name: "Roberto",
        nickName: '@roberto',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3233/3233508.png',
        date: new Date().toLocaleDateString(),
        textPublication: 'Героям Слава!',
        imagePublication:
            "https://kpi.ua/files/images/1125-7.jpg",
        likes: 25,
        valueLike: false,
        repost: 100,
        valueRepost: false,
        comments: 10,
        valueComments: false
    }, {
        key: "Max",
        name: "Max",
        nickName: '@max',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3584/3584411.png',
        date: new Date().toLocaleDateString(),
        textPublication: ' Слава Україні !',
        imagePublication:
            "http://odnb.odessa.ua/img/novini_2022/3593/foto-2.png",
        likes: 50,
        valueLike: false,
        repost: 100,
        valueRepost: false,
        comments: 250,
        valueComments: false
    },

]


const postReducer = (state = defaultState, action) => {
switch (action.type) {
    case "ADD_USER": {
        return [...state, action.payload];
    }
    case "ADD_LIKE":
        state[action.payload].likes += 1;
        state[action.payload].valueLike = true;
        return [...state];

    case "REMOVE_LIKE": {

        state[action.payload].likes -= 1;
        state[action.payload].valueLike = false;
        return [...state];
    }
    case "ADD_REPOST": {

        state[action.payload].repost += 1;
        state[action.payload].valueRepost = true;
        return [...state];
    }
    case "REMOVE_REPOST": {

        state[action.payload].repost -= 1;
        state[action.payload].valueRepost = false;
        return [...state];
    }
    case "ADD_COMMENT": {

        state[action.payload].comments += 1;
        state[action.payload].valueComments = true;
        return [...state];
    }
    case "REMOVE_COMMENT": {

        state[action.payload].comments -= 1;
        state[action.payload].valueComments = false;
        return [...state];
    }
    default:
        return state;
}
}

export default postReducer;