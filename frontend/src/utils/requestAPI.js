/* eslint-disable import/prefer-default-export */
export const getAllDayOneRover = (rover) => fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1&page=1&api_key=DEMO_KEY`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
