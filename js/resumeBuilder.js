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
  skills : ["Ruby","HTML","CSS","Git","JavaScript","C#","SQL","jQuery","Rails", "Problem solver", "Abstract thinker"],
};

var education = {
  "schools": [
    {
      "name": "Colegio Calasanz",
      "city": "Leon, Nicaragua",
      "degree": "High School Diploma",
      "major" : ["N/A"],
      "years" : "2003-2008",
      "web" : "http://www.colegiocalasanznic.com/home.htm"
    },
    {
      "name": "National Autonomous University of Nicaragua",
      "city": "Leon, Nicaragua",
      "degree": "Computer Science Information System",
      "major" : ["Information System Engineering"],
      "years" : "2009-2013",
      "web" : "http://www.unanleon.edu.ni/"
    },
    {
      "name": "Pacoima Skill Center",
      "city": "Pacoima, California",
      "degree": "ESL and Microsoft Office Certificate",
      "major" : ["N/A"],
      "years" : "2010",
      "web" : "http://home.lausd.net/"
    }
  ],
  "onlineCourses" : [
    {
      "name": "Bloc",
      "title": "Fullstack Web Developer Certificate",
      "url" : "https://www.bloc.io/",
      "dates" : "Oct 2015 - Nov 2015"
    },
    {
      "name": "LaunchSchool",
      "title": "Fullstack Web Developer",
      "url" : "https://launchschool.com/",
      "dates" : "Dec 2015 - Feb 2016"
    },
    {
      "name": "Udacity",
      "degree": "Front End Web Developer Nanodegree",
      "url": "https://www.udacity.com/",
      "years" : "Feb 2016-Present"
    }
  ]
};

var work = {
  "jobs" : [
    {
       "position": "Graphics coordinator",
       "description": "Videos and static images controller for live performances.",
       "employer": "Freelance",
       "dates": "2010 - 2013",
       "location": "Leon, Nicaragua"
    },
    {
       "position": "Wordpress Admin",
       "employer": "Lucky U Design",
       "description": "Wordpress sites builder and customer service",
       "dates": "May 2014 - Jun 2014",
       "location": "Sylmar, California"
    },
    {
       "position": "Computer Sales Associate",
       "description": "Sales and customer support. Specialist in apple products.",
       "employer": "Best Buy",
       "dates": "Jun 2014 - Oct 2014",
       "location": "West Hollywood, California"
    },
    {
       "position": "Computer and Tablets Sales Associate",
       "description": "Sales and customer support. Specialist in laptops and mobile devices.",
       "employer": "Curacao",
       "dates": "Oct 2014 - Apr 2015",
       "location": "Panorama City, California"
    },
    {
       "position": "IT Tech",
       "employer": "Sherman Oaks Hospital",
       "description": "Staff support. Troubleshooting of network, hardware or software related issues. Data processor. Jr system admin.",
       "dates": "Apr 2015 - Present",
       "location": "Sherman Oaks, California"
    }
  ]
};

var projects = {
  "projects" : [
    {
       "name": "Bloccit",
       "dates": "Oct 2015 - Dec 2015",
       "description": "A reddit-like clone built with rails during my bloc.io apprenticeship.",
       "image": "#"
    },
    {
       "name": "Living Grace Wordpress",
       "dates": "Jan 2014 - Feb 2014",
       "description": "A wordpress website built for a non-profit oraganization.",
       "image": "#"
    },
    {
       "name": "Pitch Perfect",
       "dates": "Feb 2016",
       "description": "iOS app that records audio, and applies different effects.",
       "image": "#"
    },
    {
       "name": "Simple Portfolio",
       "dates": "Mar 2016",
       "description": "Simple responsive portfolio template build with HTML and CSS.",
       "image": "#"
    }
  ]
};



$("#header").append(HTMLheaderName.replace("%data%", "My Portfolio"));

if (bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[3]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[4]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[5]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[6]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[7]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[8]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[9]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[10]));
}
