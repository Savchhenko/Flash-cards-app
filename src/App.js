import React from "react";
import ContentBlock from "./components/content-block/content-block";
import FooterBlock from "./components/footer-block/footer-block";
import HeaderBlock from './components/header-block/header-block';

const App = () => {
    return (
      <>
          <HeaderBlock 
              title="Учите слова онлайн" 
              descr="Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов"
          />
          <ContentBlock 
              title="Ваши карточки"
              descr="Создайте свои карточки, чтобы учить новые слова"
          />
          <FooterBlock />
      </>
    );
}

export default App;
