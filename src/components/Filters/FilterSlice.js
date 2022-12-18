const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    case 'filter/statusFilterChange':
      //console.log(state, action)
      return {
        ...state,
        status: action.payload,
      };
    
    case 'filter/priorityFilterChange':
      return {
        ...state,
        priority: action.payload
      }
    default:
      return state;
  }
};

export default filtersReducer;
