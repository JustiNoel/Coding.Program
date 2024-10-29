from pytube import YouTube # type: ignore
link="https://youtu.be/ijUiM775KRI"
yt=YouTube(link)
yt.streams.first().download()
