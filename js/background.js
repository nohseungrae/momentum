const bgImage = document.createElement("img");

const imgFetch = async () => {
  const { url } = await fetch("https://picsum.photos/seed/picsum/200/300");
  console.log(url);
  bgImage.src = url;
  document.body.appendChild(bgImage);
};

imgFetch();
