
const initState = {
    id : 3,
    todos: [
        {content: "Watching Tv",details: "I will watch TV at 5:00pm",time: "5:00pm",id: 1},
        {content: "Playing Computer Game",details: "I will Play Computer Gamges at 9:00pm",time: "9:00pm",id: 2}
        ],
    matchTodos:[],
    keyword : ""
};
const rootReducer = (state = initState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            var id = state.id;
            let {todo} = action;
            let {todos} = state;
            todo.id = id;
            let todosNew = [...todos,todo];
            return({
                ...state,
                id : state.id + 1,
                todos : todosNew
            });
        case "DELETE_TODO":
            id = action.id;
            todosNew = state.todos.filter(
                todo => id !== todo.id
            );
            let matchNew = state.matchTodos.filter(
                todo => id !== todo.id
            );
            return({
                ...state,
                todos : todosNew,
                matchTodos : matchNew
            });
        case "MATCH_TODO":
            let keyword = action.keyword;
            let rgx = new RegExp(keyword);
            let matches = state.todos.filter(
                todo => rgx.test(todo.content)
            );
            console.log(matches);
            return ({
                ...state,
                matchTodos : matches
            });
        case "INPIT_UPDATE":
            keyword = action.value;
            return ({
                ...state,
                keyword : keyword
            });
        default:
            break;
    }
    return state;
};

export default rootReducer;