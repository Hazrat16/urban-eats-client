import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import PopularMenuItem from "../../Shared/MenuItem/PopularMenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <PopularMenuItem
                        key={item._id}
                        item={item}
                    ></PopularMenuItem>)
                }
            </div>
            {title && title ?
            <Link to={`/order/${title}`}  >
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>:
            <Link to={`/order/salad`}  >
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>}
        </div>
    );
};

export default MenuCategory;