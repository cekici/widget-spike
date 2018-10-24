import { init, addMessage } from './view/message'

const supportedAPI = ['message'];

/**
 The main entry of the application
 */
function app() {
  console.log('Widget inited');
  init();
  window['wsp'] = apiHandler;
}

/**
 Method that handles all API calls
 */
function apiHandler(api, text) {
  if (!api) {
    throw Error('API method required');
  }

  api = api.toLowerCase();

  if (supportedAPI.indexOf(api) === -1) {
    throw Error(`Method ${api} is not supported`);
  }

  console.log(`Handling API call ${api}`, text);

  switch (api) {
    case 'message':
      addMessage(text);
      break;
    default:
      console.warn(`No handler defined for ${api}`);
  }
}

app();