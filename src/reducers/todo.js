const todo = (state = {}, action) => {
    switch(action.type){
        case('DETAIL_TODO'):
            return  {
                    id: action.id,
                    text: action.text
                }
        default:
            return state    
    }
}

export default todo

// 使ってない