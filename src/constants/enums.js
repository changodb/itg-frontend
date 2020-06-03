import _ from 'underscore';

export const QUERY_FIELDS = Object.freeze({
  song_artist: 1,
  song_name: 2,
  // bpm: 3,
  // packName: 4,
  // packLink: 5,
  // difficulty: 6,
});

export const QUERY_FIELDS_INVERTED = Object.freeze(_.invert(QUERY_FIELDS));
