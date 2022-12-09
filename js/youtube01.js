$('#main_video').YTPlayer({
    videoURL: 'https://youtu.be/rMJ8qLe6q3A',
    containment: '.video_wrap',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true
});

$('.pause').on('click', function () {
    $('#main_video').YTPPause();
});

$('.play').on('click', function () {
    $('#main_video').YTPPlay();
});