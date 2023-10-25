import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./user.scss";

const user = () => {
  return (
    <div className="user">
      <Single {...singleProduct}/>
    </div>
  );
};

export default user;
