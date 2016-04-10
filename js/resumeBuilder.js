var bio = {
    "name": "Kervin Vasquez",
    "role": "Web Developer",
    "nationality": "Nicaraguan-American",
    "dateOfBitrh": "May 1992",
    "welcomeMessage": "Hola! I am a professional freelance creative Web Developer &amp; Designer<br> involved with latest web design and technologies trends. Coding is my passion, <br> Feel free to reach me out.",
    "objective": "As a web designer and developer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. I enjoy working with teams or by myself on projects that involve a mix of web and graphic design, web development, database management and programming. I believe that every problem has a great solution!",
    "whatIdo": "I have been working as a web interface designer since. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS3 and HTML5 for modern websites. I loving creating awesome as per my clients’ need. I think user experience when I try to craft something for my clients. Making a design awesome.",
    "image": "https://pbs.twimg.com/profile_images/709255394770575360/Knob42PL_400x400.jpg",
    "contacts": {
        "address": "Los Angeles, California",
        "address2": "Leon, Nicaragua",
        "mobile": "818-555-5555",
        "email": "kervin@greenjocote.com"
    },
    "skills": [{
        "name": "Ruby",
        "level": "90"
    }, {
        "name": "HTML",
        "level": "80"
    }, {
        "name": "CSS",
        "level": "75"
    }, {
        "name": "Version Control",
        "level": "70"
    }, {
        "name": "JavaScript",
        "level": "80"
    }, {
        "name": "Swift",
        "level": "60"
    }],

    "abilities": [{
        "name": "User Experience",
        "level": "70"
    }, {
        "name": "Frontend Coding",
        "level": "85"
    }, {
        "name": "Wordpress",
        "level": "90"
    }, {
        "name": "Web Branding",
        "level": "75"
    }, {
        "name": "Content Admin",
        "level": "85"
    }, {
        "name": "Video Editing",
        "level": "70"
    }]
};


var education = {
    "schools": [{
        "name": "Colegio Calasanz",
        "location": "Leon, Nicaragua",
        "degree": "High School Diploma",
        "description": "NA",
        "dates": "2003-2008",
        "url": "http://www.colegiocalasanznic.com/home.htm"
    }, {
        "name": "Pacoima Skill Center",
        "location": "Pacoima, California",
        "degree": "ESL and Microsoft Office Certificate",
        "description": "NA",
        "dates": "2010",
        "url": "http://home.lausd.net/"
    }, {
        "name": "National Autonomous University of Nicaragua",
        "location": "Leon, Nicaragua",
        "degree": "Computer Science Information Systems",
        "description": "Software Engineering",
        "dates": "2009-2013",
        "url": "http://www.unanleon.edu.ni/"
    }],
    "onlineCourses": [{
        "school": "Bloc",
        "title": "Rails Web Developement",
        "url": "https://www.bloc.io/",
        "dates": "2015",
        "description": " "
    }, {
        "school": "LaunchSchool",
        "title": "Ruby Development",
        "url": "https://launchschool.com/",
        "dates": "2015 - 2016",
        "description": " "
    }, {
        "school": "Udacity",
        "title": "Front End Web Developer Nanodegree",
        "url": "https://www.udacity.com/",
        "dates": "2016",
        "description": " "
    }]
};

var work = {
    "jobs": [{
        "title": "Graphics coordinator",
        "description": "Videos and static images controller for live performances.",
        "employer": "Freelance",
        "dates": "2010 - 2013",
        "location": "Leon, Nicaragua"
    }, {
        "title": "Wordpress Admin",
        "employer": "Lucky U Design",
        "description": "Wordpress sites builder and customer service",
        "dates": "2014",
        "location": "Sylmar, California"
    }, {
        "title": "Computer Sales Associate",
        "description": "Sales and customer support. Specialist in apple products.",
        "employer": "Best Buy",
        "dates": "2014",
        "location": "West Hollywood, California"
    }, {
        "title": "Computer and Tablets Sales Associate",
        "description": "Sales and customer support. Specialist in laptops and mobile devices.",
        "employer": "Curacao",
        "dates": "2014 - 2015",
        "location": "Panorama City, California"
    }, {
        "title": "IT Tech",
        "employer": "Sherman Oaks Hospital",
        "description": "Staff support. Troubleshooting of network, hardware or software related issues. Data processor. Jr system admin.",
        "dates": "2015 - Present",
        "location": "Sherman Oaks, California"
    }]
};

var projects = {
    "project": [{
        "title": "Bloccit",
        "dates": "Oct 2015 - Dec 2015",
        "description": "A reddit-like clone built with rails during my bloc.io apprenticeship.",
        "images": ["images/works/bloccit.jpg"],
        "groups": '["all", "web", "interface"]'
    }, {
        "title": "Living Grace Wordpress",
        "dates": "Jan 2014 - Feb 2014",
        "description": "A wordpress website built for a non-profit oraganization.",
        "images": ["images/works/living.jpg"],
        "groups": '["all", "web", "identity"]'
    }, {
        "title": "Pitch Perfect",
        "dates": "Feb 2016",
        "description": "iOS app that records audio, and applies different effects.",
        "images": ["images/works/pitch.jpg"],
        "groups": '["all","ios","design","interface"]'
    }, {
        "title": "Simple Portfolio",
        "dates": "Mar 2016",
        "description": "Simple responsive portfolio template build with HTML and CSS.",
        "images": ["images/works/green-portfolio.jpg"],
        "groups": '["all","web", "design","identity"]'
    }]
};

var socialIcons = {
    "icons": [{
        "url": "http://facebook.com",
        "class": "fa fa-facebook"
    }, {
        "url": "#",
        "class": "fa fa-behance"
    }, {
        "url": "http://twitter.com",
        "class": "fa fa-twitter"
    }, {
        "url": "http://linkedin.com",
        "class": "fa fa-dribbble"
    }, {
        "url": "#",
        "class": "fa fa-pinterest"
    }]
};

socialIcons.display = function () {
    for (var icon in socialIcons.icons) {
        var formattedIcon = HTMLsocialIcon.replace("%data%", socialIcons.icons[icon].class).replace("%url%", socialIcons.icons[icon].url);
        $(".social-icons").children(".list-inline").append(formattedIcon);
    }
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var roleWords = bio.role.split(" ");
    var formattedRole = HTMLrole.replace("%data%", roleWords[0]).replace("%data2%", roleWords[1]); // Role header designed for 2 words only

    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLgenericMsg.replace("%data%", bio.welcomeMessage);

    $(".myphoto").append(formattedImage);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill].name).replace("%level%", bio.skills[skill].level);
        $("#more-skills").append(formattedSkills);
    };

    //Bio Section
    var formattedBioName = HTMLcontactGeneric.replace("%contact%", "Name").replace("%data%", bio.name);
    var formattedDateOfBirth = HTMLcontactGeneric.replace("%contact%", "Date of birth").replace("%data%", bio.dateOfBitrh);
    var formattedAddress = HTMLcontactGeneric.replace("%contact%", "Address").replace("%data%", bio.contacts.address);
    var formattedNationality = HTMLcontactGeneric.replace("%contact%", "Nationaly").replace("%data%", bio.nationality);
    var formattedMobile = HTMLcontactGeneric.replace("%contact%", "Phone").replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLcontactGeneric.replace("%contact%", "Email").replace("%data%", bio.contacts.email);

    $(".contact-number").append(bio.contacts.mobile);
    $("address").append(bio.contacts.address, "<br />", bio.contacts.address2);

    var formattedObjective = HTMLgenericMsg.replace("%data%", bio.objective);

    for (ability in bio.abilities) {
        formattedAbility = HTMLgenericLi.replace("%data%", bio.abilities[ability].name);
        $("#my-abilities").append(formattedAbility);

        formattedAbilityBar = HTMLAbilitybar.replace("%data%", bio.abilities[ability].name).replace("%level%", bio.abilities[ability].level).replace("%level-label%", bio.abilities[ability].level);
        if (ability % 2 === 0) {
            $("#ability-1").append(formattedAbilityBar);
        } else {
            $("#ability-2").append(formattedAbilityBar);
        }

    }

    $(".intro").prepend(formattedName, formattedRole, formattedMessage);
    $("#my-contact-info").append(formattedBioName, formattedDateOfBirth, formattedAddress, formattedNationality, formattedMobile, formattedEmail);
    $("#my-objective").append(formattedObjective);
    $("#my-experience").children("h3").after(bio.whatIdo);
    socialIcons.display();
};

education.display = function() {
    for (school in education.schools) {
        var listElement = '<li class="timeline-inverted">';
        if (school % 2 === 0) {
            listElement = '<li>';
        }

        var formattedDates = listElement + HTMLschooListElement.replace("%dates%", education.schools[school].dates);
        var formattedDegree = formattedDates.replace("%degree%", education.schools[school].degree);

        var completeLocation = education.schools[school].name + ", " + education.schools[school].location;
        var formattedLocation = formattedDegree.replace("%location%", completeLocation);

        var formattedDescription = formattedLocation.replace("%description%", education.schools[school].description);
        $("#education").append(formattedDescription);
    }

    for (course in education.onlineCourses) {
        var listElement = '<li>';
        if (course % 2 === 0) {
            listElement = '<li class="timeline-inverted">';
        }

        var formattedDates = listElement + HTMLschooListElement.replace("%dates%", education.onlineCourses[course].dates);
        var formattedDegree = formattedDates.replace("%degree%", education.onlineCourses[course].title);

        var formattedLocation = formattedDegree.replace("%location%", education.onlineCourses[course].url);

        var formattedDescription = formattedLocation.replace("%description%", education.onlineCourses[course].description);
        $("#online-courses").append(formattedDescription);
    }

};

work.display = function() {
    for (job in work.jobs) {
        var listElement = '<li class="timeline-inverted">';
        if (job % 2 === 0) {
            listElement = '<li>';
        }

        var formattedDates = listElement + HTMLjobListElement.replace("%dates%", work.jobs[job].dates);
        var formattedTitle = formattedDates.replace("%position%", work.jobs[job].title);

        var completeLocation = work.jobs[job].employer + ", " + work.jobs[job].location;
        var formattedLocation = formattedTitle.replace("%location%", completeLocation);

        var formattedDescription = formattedLocation.replace("%description%", work.jobs[job].description);
        $("#work-experience").append(formattedDescription);
    }
};

projects.display = function() {
    for (item in projects.project) {
        projectElement = HTMLproject;
        formattedGroups = projectElement.replace("%data%", "'" + projects.project[item].groups + "'");
        formattedImage = formattedGroups.replace("%picture%", projects.project[item].images[0]);
        formattedImageLink = formattedImage.replace("%picture2%", projects.project[item].images[0]);
        formattedTitle = formattedImageLink.replace("%title%", projects.project[item].title);
        $("#grid").append(formattedTitle);

    }
};

function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
