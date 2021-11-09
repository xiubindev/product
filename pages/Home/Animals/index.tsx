import React from 'react';
import { Animal, AnimalsSection } from './styles';

import animal01 from '@assets/image/animal01.png';
import animal02 from '@assets/image/animal02.png';
import animal03 from '@assets/image/animal03.png';
import animal04 from '@assets/image/animal04.png';

const Animals = () => {
  return (
    <AnimalsSection>
      <Animal className="wrap_animal01">
        <img src={animal01} className="animal01" alt="zoozclub animal" />
      </Animal>
      <Animal className="wrap_animal02">
        <img src={animal02} className="animal02" alt="zoozclub animal" />
      </Animal>
      <Animal className="wrap_animal03">
        <img src={animal03} className="animal03" alt="zoozclub animal" />
      </Animal>
      <Animal className="wrap_animal04">
        <img src={animal04} className="animal04" alt="zoozclub animal" />
      </Animal>
    </AnimalsSection>
  );
};

export default Animals;
