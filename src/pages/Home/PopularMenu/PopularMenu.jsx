import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import PopularMenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/order/salad");
  };
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {popular.map((item) => (
          <PopularMenuItem key={item._id} item={item}></PopularMenuItem>
        ))}
      </div>
      <Link to="/menu">
        <button
          className="btn btn-outline border-0 border-b-4 mt-4"
          onClick={handleMenu}
        >
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
