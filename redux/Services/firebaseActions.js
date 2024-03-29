import {
  addDoc,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, database, googleProvider } from "../../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebasePost, setPostsError } from "../Slices/postFirebase";
import authSlice, { setCurrentUser } from "../Slices/authSlice";
import { useSelector } from "react-redux";
import { allUsersData } from "../Slices/allusersposts";
// import { onSnapshot } from "firebase/firestore";

// Simple signup //
export const HandleSignUp =
  (values, navigation, setButtonLoading) => async (dispatch) => {
    setButtonLoading(true);
    try {
      const newAcc = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const userId = newAcc?.user?.uid;
      const data = {
        name: values.name,
        email: values.email,
        userId,
      };
      const res = await setDoc(doc(database, "users", userId), data);

      console.log(res, "respone", userId, data);
      // dispatch(authSlice(data));
      navigation.navigate("login");
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  };

// Simple login //
export const HandleSignIn =
  (values, navigation, setButtonLoading) => async (dispatch) => {
    setButtonLoading(true);
    try {
      const resp = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const userId = resp?.user.uid;
      const docRef = doc(database, "users", userId);
      const userData = await getDoc(docRef);
      const userDetails = userData.data();
      console.log(userDetails, "user details");
      dispatch(setCurrentUser(userDetails));
      navigation.navigate("dashboard");
    } catch (error) {
      console.log(error.code, "error");
    } finally {
      setButtonLoading(false);
    }
  };

// getting posts from firebase  //
export const getUserPosts = () => async (dispatch, getState) => {
  try {
    const currentUser = getState().auth.currentUser;

    if (!currentUser) {
      return;
    }
    const userId = currentUser.userId;
    const postsRef = query(
      collection(database, "post"),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(postsRef);
    const userPosts = [];
    querySnapshot.forEach((doc) => {
      userPosts.push({ ...doc.data(), postId: doc.id });
    });
    dispatch(firebasePost(userPosts));
  } catch (error) {
    dispatch(setPostsError(error.message));
  }
};
//  get all users //

export const getAllPosts = () => async (dispatch) => {
  try {
    const postsRef = collection(database, "post");
    
    const querySnapshot = await getDocs(postsRef);
    const allPosts = [];
    // console.log(querySnapshot , "allposts");
    querySnapshot.forEach((doc) => {
      allPosts.push({ ...doc.data(), postId: doc.id });
    });

    dispatch(allUsersData(allPosts));
  } catch (error) {
    console.log(error);
  }
};
