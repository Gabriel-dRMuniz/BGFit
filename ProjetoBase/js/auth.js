import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

async function login(email,password){
    try{
        await signInWithEmailAndPassword(auth,email,password)
        return{success:true}
    }catch(error){
        return{success:false,message:error.message}
    }
}
async function cadastrarUsuario(email,password){
    try{
        await createUserWithEmailAndPassword(auth,email,password)
        return{success:true}
    }catch(error){
        return{success:false,message:error.message}
    }
}
async function logOut(){
    await signOut(auth)
}
export{logOut,login,cadastrarUsuario}