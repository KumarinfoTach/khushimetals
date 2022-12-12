import OwlCarousel from "react-owl-carousel";

export default function MySlider({ sliders }) {
  return (
    <section>
        <OwlCarousel
          loop={true}
          items={1}
          responsiveRefreshRate={0}
          autoplay={true}
          autoplayTimeout={7000}
          autoplayHoverPause={true}
          nav={true}
          navText={[
            "<i class='icon-arrow-prev'></i>",
            "<i class='icon-arrow-next'></i>"
          ]}
          dots={false}
          margin={20}
        >
          <div class="item"></div>
          <div class="item"></div>
        </OwlCarousel>
    </section>
  );
}