/* soph.js */

// This code implements a sophisticated and elaborate application for managing a music playlist.

// Creating a class for a song
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}

// Creating a class for the playlist
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(title, artist, duration) {
    const newSong = new Song(title, artist, duration);
    this.songs.push(newSong);
  }

  removeSong(title) {
    const index = this.songs.findIndex(song => song.title === title);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
  }

  getTotalDuration() {
    let totalDuration = 0;
    this.songs.forEach(song => {
      totalDuration += song.duration;
    });
    return totalDuration;
  }

  printPlaylist() {
    console.log(`Playlist: ${this.name}`);
    this.songs.forEach((song, index) => {
      console.log(`${index + 1}. ${song.title} - ${song.artist} | Duration: ${song.duration}`);
    });
    console.log(`Total Duration: ${this.getTotalDuration()}`);
  }
}

// Creating an instance of the Playlist class
const myPlaylist = new Playlist("My Awesome Playlist");

// Adding songs to the playlist
myPlaylist.addSong("Song 1", "Artist 1", 180);
myPlaylist.addSong("Song 2", "Artist 2", 240);
myPlaylist.addSong("Song 3", "Artist 3", 200);

// Printing the playlist
myPlaylist.printPlaylist();

// Removing a song from the playlist
myPlaylist.removeSong("Song 2");

// Printing the updated playlist
myPlaylist.printPlaylist();

// Adding more songs to the playlist
myPlaylist.addSong("Song 4", "Artist 4", 220);
myPlaylist.addSong("Song 5", "Artist 5", 260);

// Printing the final playlist
myPlaylist.printPlaylist();