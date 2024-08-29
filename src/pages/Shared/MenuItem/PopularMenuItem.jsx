import { useNavigate } from "react-router-dom";

const PopularMenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/menu");
  };
  return (
    <div className="card lg:card-side shadow-xl bg-opacity-15 hover:bg-opacity-5 hover:bg-black hover:scale-105 transform hover:transition duration-300">
      <figure className="w-full">
        <img
          className="w-full h-4/5 px-2 rounded "
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="italic">{recipe}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary hover:bg-transparent hover:border hover:text-black" onClick={handleMoreClick}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularMenuItem;
