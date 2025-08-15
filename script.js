function message() {
  let message = document.getElementById("message").value;

  const webhook =
"https://puppy38.github.io/webhooks";
  const contents = '\nMessage: ${message}';
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}
