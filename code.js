
const dynamicSearch = () => {

  const valueSearch = document.getElementById("search").value.toUpperCase();
  const boxItems = document.querySelectorAll(".box");

  const title = document.getElementsByClassName("title");

  for (let i = 0; i < title.length; i++) {
    let match = boxItems[i].getElementsByClassName("title")[0];

    if (match) {
      let textValue = match.textContent;
      if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
        boxItems[i].style.display = "";
      } else {
        boxItems[i].style.display = "none";
      }
    }
  }
};
