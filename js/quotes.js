const quote = document.querySelector("#quote span");

const quotesFetch = async () => {
  const { slip } = await (
    await fetch("https://api.adviceslip.com/advice")
  ).json();
  quote.innerText = slip.advice;
};
quotesFetch();
