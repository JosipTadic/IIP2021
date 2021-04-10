export const createPost = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_POST', project });
      }
}