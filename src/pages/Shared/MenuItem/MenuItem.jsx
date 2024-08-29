import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/order/salad");
  };
  return (
    // <div className="flex space-x-2">
    //   <div className="card w-96 bg-base-100 shadow-xl ">
    //     <figure className="px-10 pt-10">
    //       <img src={image} alt="item" className="rounded-xl" />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{name}</h2>
    //       <p>{recipe}</p>
    //       <div className="card-actions">
    //         <button className="btn btn-primary" onClick={handleCart}>ADD TO CART</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="bg-gray-100 rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      <figure class="mb-2">
        <img src={image} alt="" class="h-64 ml-auto mr-auto rounded" />
      </figure>
      <div class="rounded-lg p-4 bg-white  flex flex-col">
        <div>
          <h5 class="text-black text-2xl font-bold leading-none">{name}</h5>
          <span class="text-xs text-black leading-none">{recipe}</span>
        </div>
        <div class="flex items-center">
          <div class="text-lg  font-light">${price}</div>
          <button
            href="javascript:;"
            class="rounded-full bg-[#197BFD] text-white hover:bg-white hover:text-red-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
            onClick={handleCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-current m-auto"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
