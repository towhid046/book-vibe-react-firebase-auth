const sortArr = (arr, sortVal) => {
    if (sortVal === "" || sortVal === 'sortBy') {
      return arr;
    }
    if (sortVal === "rating") {
      const resultArr = arr.sort((a, b) => b.rating - a.rating);
      return resultArr;
    }
    if (sortVal === "totalPages") {
      const resultArr2 = arr.sort((a, b) => b.totalPages - a.totalPages);
      return resultArr2;
    }
    if (sortVal === "yearOfPublishing") {
      const resultArr3 = arr.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      return resultArr3;
    }
  };

  export {sortArr}