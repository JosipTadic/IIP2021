export const createPost = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: profile.firstName,
            authortLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERR', err });
        })
        
      }
}