const GETBuilder = require('.');

//OAuth login URL example
let OAuth = new GETBuilder('http://example.com/login')
					.add('openid.ns', 'http://specs.openid.net/auth/2.0')
					.add('openid.mode', 'checkid_setup')
					.add('openid.return_to', 'http://mydomain.com/login')
					.add('openid.realm', 'http://mydomain.com')
					.add('openid.ns.sreg', 'http://openid.net/extensions/sreg/1.1')
					.add('openid.claimed_id', 'http://specs.openid.net/auth/2.0/identifier_select')
					.add('openid.identity', 'http://specs.openid.net/auth/2.0/identifier_select')
					.getURL();
					
console.log(OAuth);
