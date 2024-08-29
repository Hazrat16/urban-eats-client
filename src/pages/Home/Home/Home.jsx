import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomendation from "../ChefRecomendation/ChefRecomendation";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div >
      <Banner />
      <Category />
      <ChefRecomendation />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
