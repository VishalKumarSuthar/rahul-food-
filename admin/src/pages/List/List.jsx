import React, { useEffect, useState, useCallback } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Error fetching list");
    } finally {
      setLoading(false);
    }
  }, [url]);

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("Error removing food");
    }
  };

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className='list add flex-col'>
      <p>All Items List</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
