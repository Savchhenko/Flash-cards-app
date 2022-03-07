import React from "react";
import * as firebase from "firebase";
import ContentBlock from "./components/content-block/content-block";
import FooterBlock from "./components/footer-block/footer-block";
import HeaderBlock from './components/header-block/header-block';

const firebaseConfig = {
    apiKey: "AIzaSyBk6FD_idmMj_EelsyLzd51e7gajfooQHo",
    authDomain: "flash-cards-68c66.firebaseapp.com",
    databaseURL: "https://flash-cards-68c66-default-rtdb.firebaseio.com",
    projectId: "flash-cards-68c66",
    storageBucket: "flash-cards-68c66.appspot.com",
    messagingSenderId: "626798737774",
    appId: "1:626798737774:web:f0ff7cfd77aefcb044a97f"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref("/cards").once("value").then(res => {
    console.log("db res: ", res.val());
})

const App = () => {
    return (
      <>
          <HeaderBlock 
              title="Учите слова онлайн" 
              descr="Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов"
          />
          <ContentBlock 
              title="Ваши карточки"
              descr="Создавайте свои карточки, чтобы учить новые слова"
          />
          <FooterBlock />
      </>
    );
}

export default App;
