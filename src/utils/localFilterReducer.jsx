export const localFilterReducer = (state , action)=>{
    const {type , payload} = action ; 
    switch(type){
        case "rating": 
            return {...state , rating: action.payload};
        case 'BudgetChange':
            return {...state , budgetRange: action.payload};
        case 'Sorting':
            return {...state , sortOption: action.payload};
    }

    return state ; 
}