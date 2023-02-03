let btn = document.querySelector("button");
let form = document.querySelector("form");

btn.addEventListener("click", () => {
  let input = document.createElement("input");
  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/><path d="M6 6L14 14" stroke="#C4C4C4"/><path d="M6 14L14 6" stroke="#C4C4C4"/></svg>';
  div.setAttribute('class', 'input')
    div.append(input, span);
  form.append(div);
});
