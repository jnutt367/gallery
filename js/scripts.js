function searchPhotos() {
    let input = document.getElementById('search').value // value in the search field is stored in input
    input = input.toLowerCase(); // And changed to lower case
    let images = document.querySelectorAll('.gallery a'); // The element to search for
    
    // Looping through attribute ('data-title') in each imageLink[i] array)
    for (let i = 0; i < images.length; i++) {
      let imageLink = images[i]; 
      let caption = imageLink.getAttribute('data-title');
      caption = caption.toLowerCase();
    
      //  if variable input is included in the captions then, display the image(s)
      if (caption.includes(input)) {
        imageLink.style.display = 'block';
      } else {
        imageLink.style.display = 'none';
      }
    }
  }
 