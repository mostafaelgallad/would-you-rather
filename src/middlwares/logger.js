const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action is : ", action);
  const returnedValue = next(action);
  console.log("the new state is : ", store.getState());
  console.groupEnd();
  return returnedValue;
};
export default logger;
