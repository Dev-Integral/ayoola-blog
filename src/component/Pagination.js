const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderEarlyPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i  === 1 ||
        i === 2 ||
        i === 3
      )
        pageNumbers.push(
          <li
            key={i}
            className={
              i === currentPage ? "font-bold cursor-pointer" : "cursor-pointer"
            }
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
    }

    return pageNumbers;
  };
  const renderLatePageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === totalPages - 2 ||
        i === totalPages - 1 ||
        i === totalPages
      )
        pageNumbers.push(
          <li
            key={i}
            className={
              i === currentPage ? "font-bold cursor-pointer" : "cursor-pointer"
            }
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <ul className="flex gap-3">
        <li className="cursor-pointer" key={"prev"} onClick={()=> handlePageChange(currentPage - 1)}>Prev</li>
        {renderEarlyPageNumbers()}
        <li>. . . </li>
        {renderLatePageNumbers()}
        <li className="cursor-pointer" key={"next"} onClick={()=> handlePageChange(currentPage + 1 )}>Next</li>
      </ul>
      <input type="number" className="appearance-none w-1/3 border" onChange={(e)=>handlePageChange(e.target.value)} placeholder="jump to..." />
    </div>
    
  );
};

export default Pagination;
