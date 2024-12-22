import DiscountSection from "@/components/home/DiscountSection";
import SwiperSlider from "@/components/home/SwiperSlider";

const Home = () => {
  return (
    <>
      <div className="mt-10">
        <SwiperSlider />
      </div>
      <div className="mt-10">
        <DiscountSection />
      </div>
    </>
  );
};

export default Home;
