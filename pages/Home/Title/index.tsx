import React from 'react';
import { TitleSection, TopSupport } from './styles';
import logo_main from '@assets/image/logo_main.png';
import comingsoon from '@assets/image/comingsoon.png';
import bg_title from '@assets/image/bg_title.png';

const Title = () => {
  return (
    <TitleSection>
      <div className="wrap_images">
        <img src={bg_title} className="bg_title" alt="background" />
        <div className="group_title">
          <img src={logo_main} className="logo_main" alt="zoozclub" />
          <img src={comingsoon} className="comingsoon" alt="coming soon" />
          <TopSupport>help@zooz.club</TopSupport>
        </div>
      </div>
    </TitleSection>
  );
};

export default Title;
