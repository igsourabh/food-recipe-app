import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getalldetails } from "./redux/features/foodSlice";
import { fetchasyncrecipedetails } from "./redux/features/foodSlice";
import { useSelector } from "react-redux";
import Cardlist from "./Cardlist";
const FoodDetails = () => {
  const [first, setfirst] = useState([]);
  const { foodid } = useParams();
  
  const dispatch = useDispatch();
  const reipedetails=useSelector(getalldetails)
  

  useEffect(() => {
    dispatch(fetchasyncrecipedetails(foodid))
    setfirst(reipedetails)
  }, [dispatch,foodid]);
  
  return( <>
  <div className="container">
  <div className="row">
    <div className="col-md-6"><img src="" alt="" srcset="" style={{width:"18rem"}}/></div>
    <div className="col-md-6" style={{margin:"auto 0px"}}> <h1></h1></div>
  </div>
  <div className="row">
    <div className="col-12">
      <sec>
<p></p>
     
      </sec>
    </div>
  </div>
  </div>
  </>)
};

export default FoodDetails;
