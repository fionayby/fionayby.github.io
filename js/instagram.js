document.addEventListener("DOMContentLoaded", function() {
  var feed = new Instafeed({
      get: 'user',
      userId: '294138773',
      tagName: 'awesome',
      clientId: 'a009d9ab303449348234ff0b47d6b3c9',
      accessToken: '294138773.ba4c844.e96b32e327834ee5ae206a2ea7a28834',
      sortBy: 'most-recent',
      limit: '100',
      resolution: 'low_resolution'
  });
  feed.run();
});
