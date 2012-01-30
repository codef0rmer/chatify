$(function() {
    contactOauth = ChromeExOAuth.initBackgroundPage({
        'request_url'     : 'https://www.google.com/accounts/OAuthGetRequestToken',
        'authorize_url'   : 'https://www.google.com/accounts/OAuthAuthorizeToken',
        'access_url'      : 'https://www.google.com/accounts/OAuthGetAccessToken',
        'consumer_key'    : 'anonymous',
        'consumer_secret' : 'anonymous',
        'scope'           : 'https://www.google.com/m8/feeds/contacts/default/full',
        'app_name'        : 'Chatify',
        'callback_page'   : 'html/chrome_ex_oauth.html'
    });
});

function authorize(callback) {
    contactOauth.authorize(function() {
		
    });
}

function hasAuthorization() {
    return contactOauth.hasToken();
}

function deauthorize() {
  contactOauth.clearTokens();
}

/*function getContacts()
{
	var url = 'https://www.google.com/m8/feeds/contacts/default/full';
	var request = {
		'method': 'GET',
		'parameters': {'alt': 'json'}
	};
	contactOauth.sendSignedRequest(url, onContacts, request);
}

function onContacts(text, xhr) {console.log('amit');
  contacts = [];
  var data = JSON.parse(text);
  for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
    var contact = {
      'name' : entry['title']['$t'],
      'id' : entry['id']['$t'],
      'emails' : []
    };

    if (entry['gd$email']) {
      var emails = entry['gd$email'];
      for (var j = 0, email; email = emails[j]; j++) {
        contact['emails'].push(email['address']);
      }
    }

    if (!contact['name']) {
      contact['name'] = contact['emails'][0] || "<Unknown>";
    }
    contacts.push(contact);
  }
	console.log(contacts);
}*/
