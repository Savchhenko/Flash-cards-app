import React, { Component } from "react";
import ContentBlock from "./components/content-block/content-block";
import FooterBlock from "./components/footer-block/footer-block";
import HeaderBlock from './components/header-block/header-block';

class App extends Component {
    render () {
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
}

export default App;
