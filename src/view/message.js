import './message.css';

export function init() {
  const widgetContainer = document.createElement('div');
  widgetContainer.classList.add('widget-container');

  const body = document.querySelector('body');
  body.appendChild(widgetContainer);
  body.addEventListener('click', close);

}

export function addMessage(text)  {
  const widgetContainer = document.querySelector('.widget-container');
  const message = document.createElement('p');
  message.innerHTML = text;
  widgetContainer.appendChild(message);
}

export function close() {
  const body = document.querySelector('body');
  body.removeEventListener('click', close);
}