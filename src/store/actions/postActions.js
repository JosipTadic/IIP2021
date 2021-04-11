export const createPost = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: 'D',
            authortLastName:'Wiz',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERR', err });
        })
        
      }
}