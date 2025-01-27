// Add JavaScript below
import WaveSurfer from 'wavesurfer.js'

<script src="https://unpkg.com/wavesurfer.js@7"></script>

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    url: '/audio.mp3',
  })

  <script src="https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.min.js"></script>