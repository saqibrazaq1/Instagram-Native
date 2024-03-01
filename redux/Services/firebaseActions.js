import { addDoc, doc, setDoc, getDoc, collection, getDocs, query, where, deleteDoc, onSnapshot } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,signInWithPopup } from 'firebase/auth';
import { auth, database, googleProvider } from '../../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firebasePost, setPostsError } from "../Slices/postFirebase";
import authSlice, { setCurrentUser } from "../Slices/authSlice";
// import { onSnapshot } from "firebase/firestore";




// Simple signup //
export const HandleSignUp = (values, navigation, setButtonLoading) => async (dispatch) => {
  setButtonLoading(true)
  try {
    const newAcc = await createUserWithEmailAndPassword(auth, values.email, values.password);
    const userId = newAcc?.user?.uid;
    const data = {
      name: values.name,
      email: values.email,
      userId,
    }
    const res = await setDoc(doc(database, 'users',userId),data);

    console.log(res, "respone" ,userId,data);
    // dispatch(authSlice(data));
      navigation.navigate('login')
  } catch (error) {
    console.log(error)
  }
  finally {
    setButtonLoading(false);

  }
};


// Simple login //
export const HandleSignIn = (values, navigation, setButtonLoading) => async (dispatch) => {
  setButtonLoading(true)
  try {
    const resp = await signInWithEmailAndPassword(auth, values.email, values.password);
    const userId =resp?.user.uid
    const docRef =doc(database, "users", userId);
    const userData = await getDoc(docRef)
    const userDetails = userData.data()
    dispatch(setCurrentUser(userDetails));
    navigation.navigate('dashboard')
  } catch (error) {
    console.log(error.code,'error')
  }
  finally {
    setButtonLoading(false);
  }
};


// getting posts from firebase  //
export const getPosts = () => async (dispatch) => {
  try {
    const usersRef = query(collection(database, 'post'));
    const querySnapshot = await getDocs(usersRef);
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data(), postId: doc.id });
    });
    dispatch(firebasePost(posts));
  } catch (error) {
    dispatch(setPostsError(error.message));
  } finally {
  }
};




