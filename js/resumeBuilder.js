var bio = {
    "name" : "Kervin Vasquez",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "818-555-5555",
        "email": "kervinlvh@gmail.com",
        "github" : "kervin5",
        "twitter" : "kervin5",
        "location" : "Los Angeles"
    },

    "pic"  : "https://pbs.twimg.com/profile_images/709255394770575360/Knob42PL_400x400.jpg",
    "welcome": "Hi, welcome to my personal site. Don't forget to reach me out!",
    skills : ["Ruby", "HTML", "CSS", "Git", "JavaScript", "C#", "SQL", "jQuery", "Rails", "Problem solver", "Abstract thinker"]
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
    "projects" : [
        {
            "name": "Bloccit",
            "dates": "Oct 2015 - Dec 2015",
            "description": "A reddit-like clone built with rails during my bloc.io apprenticeship.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "name": "Living Grace Wordpress",
            "dates": "Jan 2014 - Feb 2014",
            "description": "A wordpress website built for a non-profit oraganization.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "name": "Pitch Perfect",
            "dates": "Feb 2016",
            "description": "iOS app that records audio, and applies different effects.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        },
        {
            "name": "Simple Portfolio",
            "dates": "Mar 2016",
            "description": "Simple responsive portfolio template build with HTML and CSS.",
            "images": ["https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im2.jpeg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im4.jpg", "https://raw.githubusercontent.com/kervin5/simple-portfolio/master/images/im3.jpeg"]
        }
    ]
};



$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[4]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[5]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[6]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[7]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[8]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[9]));
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[10]));
}

function displayWork() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
  }
}

displayWork();

//$(document).click(function(loc) {
//  var x = loc.pageX;
//  var y = loc.pageY;
//  logClicks(pageX,pageY);
//});

$("#main").append(internationalizeButton);

function inName(){
  names = bio.name.split(" ");
  firstName = names[0].toUpperCase()[0] + names[0].slice(1).toLowerCase();
  lastName = names[1].toUpperCase();

  return firstName + " " + lastName;
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].name));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
            }
        }

    }

};

projects.display();

