import tv4 from 'tv4';
//github.com/geraintluff.tv4
import stateSchema from './stateSchema';

//this file is to validate
//using stateSchema as a form of comparison for validation
  //validating against stateSchema

export default ({ dispatch, getState }) => next => action => {
  next(action);

  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
