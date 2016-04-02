var bio = {
	"name" : "Kervin Vasquez",
	"role" : "Web Developer",
	"welcomeMessage" : "Hi, welcome to my personal site. Don't forget to reach me out!",
	"image" : "https://pbs.twimg.com/profile_images/709255394770575360/Knob42PL_400x400.jpg",
	"contacts" : [
        {
            "mobile" : "818-555-5555",
            "email" : "kervinlvh@gmail.com",
            "email" : "kervinlvh@gmail.com",
            "twitter" : "kervin5",
            "location" : "Los Angeles",
	   }
                 ],
	"skills" : ["Ruby", "HTML", "CSS", "Git", "JavaScript", "C#", "SQL", "jQuery", "Rails", "Problem solver", "Abstract thinker"]
};


var education = {
	"schools" : [
        {
            "name": "Colegio Calasanz",
            "location": "Leon, Nicaragua",
            "degree": "High School Diploma",
            "majors" : "NA",
            "dates" : "2003-2008",
            "url" : "http://www.colegiocalasanznic.com/home.htm"
        },
        {
            "name": "National Autonomous University of Nicaragua",
            "location": "Leon, Nicaragua",
            "degree": "Computer Science Information System",
            "majors" : "Software Engineering",
            "dates" : "2009-2013",
            "url" : "http://www.unanleon.edu.ni/"
        },
        {
            "name": "Pacoima Skill Center",
            "location": "Pacoima, California",
            "degree": "ESL and Microsoft Office Certificate",
            "majors" : "NA",
            "dates" : "2010",
            "url" : "http://home.lausd.net/"
        }
    ],
	"online courses" : [
		{
            "school": "Bloc",
            "title": "Fullstack Web Developer",
            "url" : "https://www.bloc.io/",
            "dates" : "Oct 2015 - Nov 2015"
        },
        {
            "school": "LaunchSchool",
            "title": "Fullstack Web Developer",
            "url" : "https://launchschool.com/",
            "dates" : "Dec 2015 - Feb 2016"
        },
        {
            "school": "Udacity",
            "degree": "Front End Web Developer Nanodegree",
            "url": "https://www.udacity.com/",
            "years" : "Feb 2016-Present"
        }
    ]
};

var work = {
	"jobs" : [
        {
            "title": "Graphics coordinator",
            "description": "Videos and static images controller for live performances.",
            "employer": "Freelance",
            "dates": "2010 - 2013",
            "location": "Leon, Nicaragua"
        },
        {
            "title": "Wordpress Admin",
            "employer": "Lucky U Design",
            "description": "Wordpress sites builder and customer service",
            "dates": "May 2014 - Jun 2014",
            "location": "Sylmar, California"
        },
        {
            "title": "Computer Sales Associate",
            "description": "Sales and customer support. Specialist in apple products.",
            "employer": "Best Buy",
            "dates": "Jun 2014 - Oct 2014",
            "location": "West Hollywood, California"
        },
        {
            "title": "Computer and Tablets Sales Associate",
            "description": "Sales and customer support. Specialist in laptops and mobile devices.",
            "employer": "Curacao",
            "dates": "Oct 2014 - Apr 2015",
            "location": "Panorama City, California"
        },
        {
            "title": "IT Tech",
            "employer": "Sherman Oaks Hospital",
            "description": "Staff support. Troubleshooting of network, hardware or software related issues. Data processor. Jr system admin.",
            "dates": "Apr 2015 - Present",
            "location": "Sherman Oaks, California"
        }
    ]
};

var projects = {
	"project" : [
        {
            "title": "Bloccit",
            "dates": "Oct 2015 - Dec 2015",
            "description": "A reddit-like clone built with rails during my bloc.io apprenticeship.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "title": "Living Grace Wordpress",
            "dates": "Jan 2014 - Feb 2014",
            "description": "A wordpress website built for a non-profit oraganization.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "title": "Pitch Perfect",
            "dates": "Feb 2016",
            "description": "iOS app that records audio, and applies different effects.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "title": "Simple Portfolio",
            "dates": "Mar 2016",
            "description": "Simple responsive portfolio template build with HTML and CSS.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        }
    ]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
