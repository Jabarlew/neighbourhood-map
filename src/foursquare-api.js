function addClientTokens(url) {
  url.searchParams.set('client_id', 'VMPYSRCSWKMQZ0A4NG4KEO55EEFW0ERS4JY3OQX4MHDBT4T5');
  url.searchParams.set('client_secret', 'DZT1UCZNDCOJW4XJJV5UGEQ4U44ZKTYMJGYD3HXAZFG0022Y');
  url.searchParams.set('v', '20180323');

  return url;
}


export async function getLocation(venueId) {
  const url = new URL(`https://api.foursquare.com/v2/venues/${venueId}/tips`);
  return fetch(addClientTokens(url))
    .then(res => res.json())
    .then(res => res.response.tips.items[0]);
}
