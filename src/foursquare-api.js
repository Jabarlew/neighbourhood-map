function addClientTokens(url) {
  url.searchParams.set('client_id', 'Q4CQO0TK32S4WEABREC2TGPEI1WZ5ZJ5M4SMSDNA0SFC330E');
  url.searchParams.set('client_secret', '1KTYUZ45UICGSBTOSNRJEBLXWWP2RPOWYQAK0DGLGRFVURKI');
  url.searchParams.set('v', '20180815');

  return url;
}


export async function getLocation(venueId) {
  const url = new URL(`https://api.foursquare.com/v2/venues/${venueId}/tips`);
  return fetch(addClientTokens(url))
    .then((res) => {
      if (!res.ok) throw new Error('Invalid request.');
      return res.json();
    })
    .then(res => res.response.tips.items[0]);
}
