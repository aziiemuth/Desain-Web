const images = [
    'gambar.jpg',
    'gambar.jpg',
    'gambar.jpg',
    'https://via.placeholder.com/200x200?text=Canvas+4',
    'https://via.placeholder.com/200x200?text=Canvas+5'
  ];
  
  for (let i = 0; i < images.length; i++) {
    const canvas = document.getElementById('canvas' + (i + 1));
    const ctx = canvas.getContext('2d');
  
    const image = new Image();
    image.src = images[i];
  
    image.onload = function() {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }
  