

import { combineReducers } from 'redux';


import session from './session_reducer';


const rootReducer = combineReducers({
  session
});

export default rootReducer;






// import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import sessionReducer from './session_reducer';
// import errorsReducer from './errors_reducer';

// const rootReducer = combineReducers({
//   entities,
//   session: sessionReducer,
//   errors: errorsReducer,
// });

// export default rootReducer;