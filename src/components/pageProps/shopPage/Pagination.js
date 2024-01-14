import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import axios from 'axios'; // Import axios for making HTTP requests

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="w-full">
            <Product
              _id={item.id}
              img={item.image}
              productName={item.name}
              price={item.price}
              // color={item.color} // Ensure your API returns a color field, or adjust accordingly
              // badge={item.badge} // Ensure your API returns a badge field, or adjust accordingly
              des={item.desc}
            />
          </div>
        ))}
    </>
  );
};

const Pagination = ({ itemsPerPage }) => {
  const [items, setItems] = useState([]); // State to store items from API
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  useEffect(() => {
    // Fetch items from API on component mount
    axios.get("http://127.0.0.1:8000/api/products")
      .then(response => {
        setItems(response.data); // Update state with fetched items
        console.log('Fetched Items:', response.data); // Add this line to log the response

      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1); // Update starting item number for display
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {Math.min(endOffset, items.length)} of {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
