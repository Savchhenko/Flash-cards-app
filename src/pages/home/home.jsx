import React, { Component } from "react";
import ContentBlock from "../../components/content-block/content-block";
import FooterBlock from "../../components/footer-block/footer-block";
import HeaderBlock from '../../components/header-block/header-block';

class HomePage extends Component {
    render() {
        // console.log("user id: ", this.props.user.uid);

        return (
            <>
              <HeaderBlock 
                  title="Учите слова онлайн" 
                  descr="Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов"
              />
              <ContentBlock 
                  title="Ваши карточки"
                  descr="Создавайте свои карточки, чтобы учить новые слова"
                //   user={this.props.user}
              />
              <FooterBlock />
          </>
        )
    }
}

export default HomePage;