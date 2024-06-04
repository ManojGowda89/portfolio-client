import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const Mycontext = createContext(null);

export function useMyContext() {
  const cval = useContext(Mycontext);
  return cval;
}
const firebaseConfig = {
  apiKey: "AIzaSyDvZ0EuXel7mUTuHEFhIU-J6eEjEmqkphU",
  authDomain: "projects-4f71b.firebaseapp.com",
  projectId: "projects-4f71b",
  storageBucket: "projects-4f71b.appspot.com",
  messagingSenderId: "377153325064",
  appId: "1:377153325064:web:1dfd06db8b2a832a2e69bd",
};
export const app = initializeApp(firebaseConfig);

const firebase = getAuth(app);
const firebasestorage = getStorage(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
export function ContextProvider({ children }) {
  const [user, setuser] = useState(false);
  const [resimg, setresimg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTX3cL6TZQrIGDnO9vTMuSpBEQriPB04VidzRANsvdgQ&s"
  );

  useEffect(() => {
    onAuthStateChanged(firebase, (result) => {
      if (result && result.email === "manojgowdabr89@gmail.com") {
        const token = result.stsTokenManager.accessToken;

        localStorage.setItem("token", token);

        setuser(true);
        localStorage.setItem("user",true)

      } else {
        setuser(false);
        result && alert("Only For Admins go back to home");
        result && SignOutfn();
      }
    });
  }, []);
  //setcookies

  function SignOutfn() {
    signOut(firebase);
    localStorage.clear()
  }
  async function googleSignin() {
    await signInWithPopup(firebase, provider);
  }

  async function uploadimg(img, imgname) {
    console.log(imgname);

    const refimg = ref(firebasestorage, `Image/${imgname}`);
    const result = uploadBytesResumable(refimg, img);
    await result;
    const photoUrl = await getDownloadURL(result.snapshot.ref);
    console.log(photoUrl);
    setresimg(photoUrl);
    return photoUrl;
  }

  const [color, setcolor] = useState("#333");
  const [toglemode, settogle] = useState(false);

  function handelbackground() {
    if (color == "#333") {
      setcolor("#fff");
      settogle(false);
    }
    if (color == "#fff") {
      setcolor("#333");
      settogle(true);
    }
  }
  const Data = {
    googleSignin,
    user,
    SignOutfn,
    uploadimg,
    resimg,
    handelbackground,
    color,
    toglemode,
  };

  return <Mycontext.Provider value={Data}>{children}</Mycontext.Provider>;
}
