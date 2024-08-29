import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import PopularMenuItem from "../../Shared/MenuItem/PopularMenuItem";

const ChefRecomendation = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading="Chef Recommendation"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <PopularMenuItem key={item._id} item={item}></PopularMenuItem>
        ))}
      </div>
      <Link to="/menu">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default ChefRecomendation;
