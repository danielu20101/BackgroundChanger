var images = document.getElementsByTagName('img');

// Loop through all images on the page and replace them with kittens
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}