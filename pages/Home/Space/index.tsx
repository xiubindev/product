import React from 'react';
import { SpaceSection, Planet } from './styles';
import StarBackground from '@components/StarBackground';

import star01 from '@assets/image/star01.png';
import star02 from '@assets/image/star02.png';
import star03 from '@assets/image/star03.png';
import planet from '@assets/image/planet.png';

const Space = () => {
  return (
    <SpaceSection>
      <Planet className="star_left">
        <div className="wrap_star">
          <img src={star01} alt="star" />
          <div className="wrap_svg">
            <StarBackground width={130} height={60} className="pc" />
            <StarBackground width={75} height={30} className="mobile" />
          </div>
        </div>
      </Planet>
      <Planet className="star_top">
        <div className="wrap_star">
          <img src={star02} alt="star" />
          <div className="wrap_svg">
            <StarBackground width={130} height={60} className="pc" />
            <StarBackground width={75} height={30} className="mobile" />
          </div>
        </div>
      </Planet>
      <Planet className="star_bottom">
        <div className="wrap_star">
          <img src={star03} alt="star" />
          <div className="wrap_svg">
            <StarBackground width={130} height={60} className="pc" />
            <StarBackground width={75} height={30} className="mobile" />
          </div>
        </div>
      </Planet>
      <Planet className="planet">
        <div className="wrap_star">
          <img src={planet} alt="planet" className="planet" />
        </div>
      </Planet>
    </SpaceSection>
  );
};

export default Space;
