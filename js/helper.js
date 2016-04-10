/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLgenericMsg = '<p>%data%</p>';
var HTMLgenericLi = '<li>%data%</li>';

var HTMLheaderName = '<div class="intro-sub">I am %data%</div>';
var HTMLrole = '<h1>%data% <span>%data2%</span></h1>';
var HTMLsocialIcon = '<li><a href="%url%"><i class="%data%"></i></a></li>';

var HTMLcontactGeneric = '<li><strong>%contact%:</strong> %data%</li>';

var HTMLbioPic = '<img src="%data%" alt="My Picture">';

var HTMLskills =  '<div class="col-xs-12 col-sm-4 col-md-2"><div class="chart" data-percent="%level%" data-color="e74c3c"><span class="percent"></span><div class="chart-text"><span>%data%</span></div></div></div>';

var HTMLAbilitybar = '<div class="skill-progress"><div class="skill-title"><h3>%data%</h3></div><div class="progress"><div class="progress-bar six-sec-ease-in-out" role="progressbar" aria-valuenow="%level%" aria-valuemin="0" aria-valuemax="100" ><span>%level-label%%</span></div></div></div>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-img" src="%data%">';

var HTMLschooListElement = '<div class="posted-date"><span class="month">%dates%</span></div><div class="timeline-panel wow fadeInUp"><div class="timeline-content"><div class="timeline-heading"><a href="#"><h3>%degree%</h3></a><span>%location%</span></div><div class="timeline-body"><p>%description%</p></div></div> </div></li>';

var HTMLjobListElement = '<div class="posted-date"><span class="month">%dates%</span></div><div class="timeline-panel wow fadeInUp"><div class="timeline-content"><div class="timeline-heading"><h3>%position%</h3><span>%location%</span></div><div class="timeline-body"><p>%description%</p></div></div></div></li>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var oldName = $('#name').html() || '';
    var iName = inName(oldName) || function(){};
    $('#name').html(iName);
  });
});

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX,loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/

function initializeMap(){
  var locations = [];
  locations.push(bio.contacts.address);
  for(var loc in education.schools){
    locations.push(education.schools[loc].location);
  }

  for(var loc in work.jobs){
    locations.push(work.jobs[loc].location);
  }

  var myLatlng = new google.maps.LatLng(12.431553, -86.872215);
  var styles = [
                  {
                      featureType: "landscape",
                      stylers: [
                          { color: '#f7f7f7' }
                      ]
                  },{
                      featureType: "natural",
                      stylers: [
                          { hue: '#00ffe6' }
                      ]
                  },{
                      featureType: "road",
                      stylers: [
                          { hue: '#fff' },
                          { saturation: -70 }
                      ]
                  },{
                      featureType: "building",
                      elementType: "labels",
                      stylers: [
                          { hue: '' }
                      ]
                  },{
                      featureType: "poi", //points of interest
                      stylers: [
                          { hue: '' }
                      ]
                  }
              ];

              var mapOptions = {
                  zoom: 3,
                  scrollwheel: false,
                  center: myLatlng,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  disableDefaultUI: false,
                  styles: styles
              }
              map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);


  var geocoder;
  geocoder = new google.maps.Geocoder();

      function codeAddress(location) {
      var address = location;
      geocoder.geocode( { 'address': address}, function(results, status) {
            var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location
              });

          });
        }
  function loadMap() {
              var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  animation: google.maps.Animation.DROP,
                  title: 'Hello World!'
              });

              var contentString = '' +
                      '' +
                      '';

              var infowindow = new google.maps.InfoWindow({
                  content: contentString
              });

              google.maps.event.addListener(marker, 'click', function () {
                  infowindow.open(map, marker);
              });
              for(loc in locations){
                  codeAddress(locations[loc]);
              }


    }
    loadMap();

}

window.addEventListener('load', initializeMap);
