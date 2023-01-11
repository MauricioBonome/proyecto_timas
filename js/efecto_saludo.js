let text = document.querySelector('.hidden-text');
setTimeout(() => {
  text.style.visibility = "visible";
  let message = text.innerHTML;
  text.innerHTML = "";
  for (let i = 0; i < message.length; i++) {
    text.innerHTML += "<span>" + message.charAt(i) + "</span>";
  }
  let char = 0;
  let timer = setInterval(onTick, 50);
  function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.style.display = 'inline';
    char++;
    if (char === message.length) {
      clearInterval(timer);
    }
  }
}, 2000);