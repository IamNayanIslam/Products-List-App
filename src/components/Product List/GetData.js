const getDataFromLocalStorage = (getFrom) => {
  return JSON.parse(localStorage.getItem(getFrom)) || [];
};

export default getDataFromLocalStorage;
