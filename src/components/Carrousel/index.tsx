import { Carousel } from 'react-responsive-carousel';
import YotubeEmbed from '../Trailer/YotubeEmbed';


const Carrousel = () => {
  return (
    <Carousel
      emulateTouch={true}
      swipeable
      infiniteLoop
      autoPlay
      showThumbs={false}
      showIndicators
      showStatus={false}
      showArrows={false}
    >
      <div>
      <YotubeEmbed embedId="rokGy0huYEA" />
      </div>
      <div>
        <img src='/images/pearceF4_fighter.webp' />
      </div>
      <div>
        <img src='/images/commerce_star_Atlas.webp' />
      </div>
    </Carousel>
  );
};

export default Carrousel;
