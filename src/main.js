import { addMessage } from './view/message';
const supportedAPI = ['init', 'message'];

function app(window) {
  let configurations = {
    someDefaultConfiguration: false
  };

  let globalObject = window['cbo-widget'];
  let queue = window[globalObject].q;

  if (queue) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i][0].toLowerCase() === 'init') {
        configurations = extendObject(configurations, queue[i][1]);
      }
      else {
        apiHandler(queue[i][0], queue[i][1]);
      }
    }
  }

  window[globalObject] = apiHandler;
  window[globalObject].configurations = configurations;
}

function apiHandler(api, params) {
  if (!api) {
    throw Error('API method required');
  }

  api = api.toLowerCase();

  if (supportedAPI.indexOf(api) === -1) {
    throw Error(`Method ${api} is not supported`);
  }

  switch (api) {
    case 'message':
      addMessage(params);
      break;
    default:
      console.warn(`No handler defined for ${api}`);
      break;
  }
}

function extendObject(a, b) {
  for (let key in b)
    if (b.hasOwnProperty(key))
      a[key] = b[key];
  return a;
}

app(window);