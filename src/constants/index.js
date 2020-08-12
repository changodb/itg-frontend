import { QUERY_FIELDS } from './enums';


export const API_URL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3001/' : 'https://api.fitupyourstyle.com/';

export const DEFAULT_QUERY_FILTER = {
  field: QUERY_FIELDS.artist,
  value: ''
};
