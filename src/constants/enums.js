import _ from 'underscore';

export const QUERY_FIELDS = Object.freeze({
  song_artist: 1,
  song_name: 2,
  min_bpm: 3,
  max_bpm: 4,
  pack_name: 5,
  difficulty: 6,
});

export const QUERY_FIELDS_INVERTED = Object.freeze(_.invert(QUERY_FIELDS));
