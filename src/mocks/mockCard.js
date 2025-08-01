import cabbage from '@assets/images/cabbage.png';
import carrot from '@assets/images/carrot.png';
import cauliflower from '@assets/images/cauliflower.png';
import pepper from '@assets/images/pepper.png';
import tomatoes from '@assets/images/tomatoes.png';
import tomatoes2 from '@assets/images/tomatoes_2.png';
import tomatoes3 from '@assets/images/tomatoes_3.png';
import tomatoes4 from '@assets/images/tomatoes_4.png';
import tomatoes5 from '@assets/images/tomatoes_5.png';

const images = [
  cabbage,
  carrot,
  cauliflower,
  pepper,
  tomatoes,
  tomatoes2,
  tomatoes3,
  tomatoes4,
  tomatoes5,
];

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

export const mockCard = {
  name: 'Tomato',
  price: 6.22,
  kcal: 110,
  description: 'Ecologically clean, grown on our farm with love',
  imageUrl: getRandomImage(),
};
