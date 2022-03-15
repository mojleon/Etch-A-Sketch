function construct() {
  let body = document.getElementsByTagName("body");

  let section = document.createElement("section");
  body[0].appendChild(section);

  let div = document.createElement("div");
  div.style.cssText =
    "width: 16px; height: 16px; background: #333; display: block;";

  for (let r = 0; r <= 16; r++) {
    console.log(r);
    section.appendChild(div);
  }
}

construct();
