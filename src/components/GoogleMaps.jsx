/* import React, { useEffect } from 'react';
import {GoogleMap} from "react-google-maps"
export default function Map () {
  useEffect(() => {
    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDuvpqA7eloAgc3YjUzbM00kwpx0wJdCrw';
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=default";
    document.head.appendChild(script);

    // Initialize the map when the script has loaded
    script.addEventListener('load', () => {
      initMap();
    });
  }, []);

  return (
    <div>
      <div id="map"></div>
      <input type="text" placeholder="Enter a location" />
      <input type="button" value="Geocode" className="button button-primary" />
      <input type="button" value="Clear" className="button button-secondary" />
      <p id="instructions">
        <strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.
      </p>
      <div id="response-container">
        <pre id="response"></pre>
      </div>
    </div>
  );
};

const initMap = () => {
  let map = new GoogleMap.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeControl: false,
  });
  geocoder = new GoogleMap.maps.Geocoder();

  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.placeholder = 'Enter a location';

  const submitButton = document.createElement('input');
  submitButton.type = 'button';
  submitButton.value = 'Geocode';
  submitButton.classList.add('button', 'button-primary');

  const clearButton = document.createElement('input');
  clearButton.type = 'button';
  clearButton.value = 'Clear';
  clearButton.classList.add('button', 'button-secondary');

  response = document.createElement('pre');
  response.id = 'response';
  response.innerText = '';

  responseDiv = document.createElement('div');
  responseDiv.id = 'response-container';
  responseDiv.appendChild(response);

  const instructionsElement = document.createElement('p');
  instructionsElement.id = 'instructions';
  instructionsElement.innerHTML =
    '<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.';

    map.controls[GoogleMap.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[GoogleMap.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[GoogleMap.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[GoogleMap.maps.ControlPosition.TOP_LEFT].push(instructionsElement);
    map.controls[GoogleMap.maps.ControlPosition.TOP_LEFT].push(responseDiv);
    
    GoogleMap.maps.event.addListener(map, 'click', function (event) {
    geocoder.geocode({
    'latLng': event.latLng
    }, function (results, status) {
    if (status === 'OK') {
    if (results[0]) {
    inputText.value = results[0].formatted_address;
    response.innerText = JSON.stringify(results[0], null, 2);
    } else {
    response.innerText = 'No results found';
    }
    } else {
    response.innerText = 'Geocoder failed due to: ' + status;
    }
    });
    });
    
    submitButton.addEventListener('click', function () {
    geocodeAddress(geocoder, map);
    });
    
    clearButton.addEventListener('click', function () {
    inputText.value = '';
    response.innerText = '';
    });
    };
    
    const geocodeAddress = (geocoder, resultsMap) => {
    const address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === 'OK') {
    resultsMap.setCenter(results[0].geometry.location);
    response.innerText = JSON.stringify(results[0], null, 2);
    } else {
    response.innerText = 'Geocode was not successful for the following reason: ' + status;
    }
    });
    }
    
    
 */