function capitalizeLetter(str) {
  //! using for loop
  // const newArr = str.toLowerCase().split(" ");

  // for (let i = 0; i < newArr.length; i++) {
  //   newArr[i] =
  //     newArr[i].substring(0, 1).toUpperCase() + newArr[i].substring(1);
  // }

  // return newArr.join(" ");

  //! Using Map
  return str
    .toLowerCase()
    .split(" ")
    .map((item) => {
      return item.substring(0, 1).toUpperCase() + item.substring(1);
    })
    .join(" ");
}

console.log(capitalizeLetter("i love pizza"));
