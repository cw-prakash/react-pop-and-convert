import { useState } from "react";
import Icon from "../../../components/Icon";

function Pagination(props) {
  const { numberOfItems, perPage, onPageChange, currentPage } = props;

  const [activePage, setActivePage] = useState(currentPage || 1);

  const handleClick = (currentPage) => () => {
    setActivePage(currentPage);
    typeof onPageChange == "function" && onPageChange(currentPage);
  };

  const length = Math.ceil(numberOfItems / perPage);
  const counters = Array.from({ length }, (el, index) => {
    return (
      <button
        key={index}
        className={`px-3 py-2 text-sm rounded ${
          activePage === index + 1 && "bg-blue-500 text-white"
        }`}
        onClick={handleClick(index + 1)}
      >
        {index + 1}
      </button>
    );
  });

  const offset = activePage * perPage - perPage;
  const nextOffset = activePage * perPage;

  return (
    <div className="flex gap-3 justify-between items-center">
      <div className="text-gray-400">
        <strong className="text-black">Showing</strong>
        {` ${
          numberOfItems ? `${offset + 1} - ${nextOffset}` : 0
        } of ${numberOfItems} Notifications`}
      </div>
      <div className="flex">
        <button className="px-2" onClick={handleClick(activePage - 1 || 1)}>
          <Icon icon="double-arrow-left" />
        </button>
        {counters}
        <button
          className="px-2"
          onClick={handleClick(activePage >= length ? length : activePage + 1)}
        >
          <Icon icon="double-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
