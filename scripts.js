const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const musicToggle = document.getElementById('musicToggle');
const youtubePlayer = document.getElementById('youtubePlayer');
let musicStarted = false;
let musicPlaying = false;

function startMusic() {
  if (!musicStarted) {
    youtubePlayer.innerHTML = `
      <iframe
        width="1"
        height="1"
        src="https://www.youtube.com/embed/UmQPiX2oI7Q?autoplay=1&loop=1&playlist=UmQPiX2oI7Q&controls=0&modestbranding=1&rel=0"
        title="Arka plan müziği"
        frameborder="0"
        allow="autoplay; encrypted-media"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `;
    musicStarted = true;
  }

  musicPlaying = true;
  musicToggle.textContent = '⏸️ Müziği kapat';
}

function stopMusic() {
  youtubePlayer.innerHTML = '';
  musicStarted = false;
  musicPlaying = false;
  musicToggle.textContent = '🎵 Şarkıyı başlat';
}

if (musicToggle) {
  musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });
}
