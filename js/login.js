 document.getElementById('checkbox').addEventListener('change', function(e) {
      if (e.target.checked) {
        setTimeout(function() {
          var video = document.createElement('video');
          video.src = 'video/starting.mp4';
          video.autoplay = true;
          video.removeAttribute('controls');
          video.style.position = 'fixed';
          video.style.top = '0';
          video.style.left = '0';
          video.style.width = '100vw';
          video.style.height = '100vh';
          video.style.backgroundColor = 'black';
          video.style.objectFit = 'cover';
          video.style.zIndex = '9999';
          video.setAttribute('playsinline', '');
          video.setAttribute('webkit-playsinline', '');
          document.body.appendChild(video);

          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }

          video.play();

          video.addEventListener('ended', function() {
            video.remove();
            document.getElementById('login-container').style.display = 'flex';
            
            const bottomMenu = document.querySelector('.bottom-menu');
            bottomMenu.style.display = 'flex';

            setTimeout(() => {
              bottomMenu.classList.add('show');
              document.querySelector('.login-content').classList.add('fade-in');
            }, 100);
          });
        }, 2000);
      }
    });