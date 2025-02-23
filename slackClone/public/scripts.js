const userName = prompt("What is your Username?");
const password = prompt("What is your password?");

const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected");
  socket.emit("clientConnect");
});

socket.on("nsList", (nsData) => {
  console.log(nsData);
  const namespaceDiv = document.querySelector(".namespaces");
  nsData.forEach((ns) => {
    namespaceDiv.innerHTML += `<div class="namespace" ns="/${ns.name}"><img src="${ns.image}"></div>`;
  });
});
