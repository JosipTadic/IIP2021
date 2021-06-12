export const createPost = (project) => {
    return (dispatch, getState, { getFirestore}) => {
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
/*export const updatePost = (stars) => {
    return (dispatch, getState, { getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const id = getFirestore().collection('projects').id;
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;  
        firestore.collection('star').add({
            ...stars,    
            authorFirstName: profile.firstName,
            authortLastName: profile.lastName,
            authorId: authorId,
            projectId: id,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPDATE_POST', stars });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_POST_ERR', err });
        })
        
      }
}*/