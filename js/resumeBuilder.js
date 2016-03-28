var bio = {
  "name" : "Kervin Vasquez",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "818-555-5555",
    "email": "kervinlvh@gmail.com",
    "github" : "kervin5",
    "twitter" : "kervin5",
    "location" : "Los Angeles",
  },

  "pic"  : "https://pbs.twimg.com/profile_images/709255394770575360/Knob42PL_400x400.jpg",
  "welcome": "Hi, welcome to my personal site. Don't forget to reach me out!",
  skills : ["Ruby","HTML","CSS","Git","JavaScript","C#","SQL","jQuery","Rails"],
};

//Work object
var work = {};

work.position = "IT Tech";
work.employer = "Hospital Medical Center";
work.years = 1 ;
work.city = "Los Angeles";

//Education
var education = {};

education["school"] = "National Autonomous University of Nicaragua";
education["years"] = 2010 - 2014 ;
education["city"] = "Leon" ;

var formattedPic = HTMLbioPic.replace("%data%", bio.pic)
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedSkills = HTMLskills.replace("%data%", bio.skills)

//Format work and education

var formattedWork = HTMLworkTitle.replace("%data%", work.position);
var formattedEducation = HTMLschoolName.replace("%data%", education.school);

/////////////////////////

$("#topContacts").append(formattedPic);
$("#topContacts").append(formattedWelcome);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGitHub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Education and Work information

$("#main").append("<a href=#>" + formattedWork);
$("#main").append(formattedEducation + "</a>");

console.log(formattedEducation + "</a>");
