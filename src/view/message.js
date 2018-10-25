import './message.css';

export function addMessage(text)  {
  const widgetContainer = document.querySelector('.widget-container');
  const message = document.createElement('p');
  message.innerHTML = text;
  widgetContainer.appendChild(message);
}