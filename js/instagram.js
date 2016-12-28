document.addEventListener("DOMContentLoaded", function() {
  var feed = new Instafeed({
      get: 'user',
      userId: '294138773',
      tagName: 'awesome',
      clientId: 'a009d9ab303449348234ff0b47d6b3c9',
      accessToken: '294138773.a009d9a.14f8f389b0bc41cb8823c940fdd04b0e',
      sortBy: 'most-recent',
      limit: '100',
      resolution: 'low_resolution'
  });
  feed.run();
});
