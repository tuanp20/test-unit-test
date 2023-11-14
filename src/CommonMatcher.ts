const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.title;
    });
};

export { fetchData };
