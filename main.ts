let melody: number[] = []
input.onButtonPressed(Button.A, function () {
    music.setTempo(110)
    // 4 6 1˙ 3˙
    // 3 5 1˙ 3˙
    // 2 5 7 2˙
    // 1 3 6 1˙
    melody = [
    349,
    440,
    523,
    659,
    330,
    440,
    523,
    659,
    294,
    392,
    494,
    587,
    262,
    330,
    440,
    523,
    349,
    440,
    523,
    659,
    330,
    440,
    523,
    659,
    294,
    392,
    494,
    587,
    262
    ]
    for (let freq of melody) {
        music.play(music.tonePlayable(freq, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})
