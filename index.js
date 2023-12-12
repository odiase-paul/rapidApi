const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a8d8b8361emshda8d6efe709ee3fp1d6292jsn5b5c71c684d1",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const inp = document.querySelector(".input");
const button = document.querySelector(".btn");

let input = "";

const search = () => {
  input = inp.value;
  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${input}`;
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      let outPut = "";
      data.d.map((items) => {
        outPut += `
        <div>
        <img src=${items.i.imageUrl}>
        <p>${items.l}</p>
        <p>${items.s}</p>
        </div>
        `;
      });
      document.querySelector(".element").innerHTML = outPut;
    })
    .catch((err) => console.error(err));
  inp.value = "";
};

button.addEventListener("click", search);
