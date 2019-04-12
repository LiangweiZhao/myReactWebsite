/*
    Init state For Components:
        todoDetails ---> id
        todo ---> todos list, todos match list
 */
const initState = {
    id : 3,
    todos: [
        {content: "Watching Tv",details: "I will watch TV at 5:00pm",time: "5:00pm",id: 1},
        {content: "Playing Computer Game",details: "I will Play Computer Gamges at 9:00pm",time: "9:00pm",id: 2}
        ],
    matchTodos:[],
    keyword: ""
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
            //console.log(keyword);
            let matches = [];
            if(keyword !== "" && keyword !== undefined){
                let rgx = new RegExp(keyword);
                matches = state.todos.filter(
                    todo => rgx.test(todo.content)
                );
            }
            return ({
                ...state,
                keyword:keyword,
                matchTodos : matches
            });
        case "DETAILS_UPDATE":
            id = action.id;
            todosNew = state.todos.find(
                todo => id+"" === todo.id+""
            );
            return ({
                ...state,
                todos : todosNew
            });
        default:
            break;
    }
    return state;
};

export default rootReducer;