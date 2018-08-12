function addClientTokens(url) {
  url.searchParams.set('client_id', 'NWVFW0FB23Z0GOQT3CSVDCXMWTN2JXORM2POAEB2TCYJX5DJ');
  url.searchParams.set('client_secret', 'CI1FY1HX2P2VKFSHQAKJKABRRFEBQATNTEX0RD5PP0FHQJ31');
  url.searchParams.set('v', '20180810');

  return url;
}


export async function getLocation(venueId) {
  const url = new URL(`https://api.foursquare.com/v2/venues/${venueId}/tips`);
  return fetch(addClientTokens(url))
    .then(res => res.json())
    .then(res => res.response.tips.items[0]);
}
