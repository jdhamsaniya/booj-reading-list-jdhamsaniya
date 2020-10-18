/**
 * API_BASE_URL: base url for connecting to laravel api on the server-side
 */
export const API_BASE_URL = 'http://localhost:8000/api';

/**
 * OPEN_LIBRARY_API_URL: base url to Open Library Books api
 *      Will return empty array if no result found or no parameters entered in bibkeys
 * 
 * OPEN_LIBRARY_FORMAT_JSON_TAG: Formats the response from JavaScript to JSON if added at the end of the base url and bibkey parameters
 * 
 * OPEN_LIBRARY_FORMAT_DATA_TAG: Decides the contents of the JSON object returned
 * 
 * More info on format here: https://openlibrary.org/dev/docs/api/books
 */
export const OPEN_LIBRARY_API_URL = 'https://openlibrary.org/api/books?bibkeys=';

export const OPEN_LIBRARY_FORMAT_JSON_TAG = '&format=json';

export const OPEN_LIBRARY_FORMAT_DATA_TAG = '&jscmd=data';