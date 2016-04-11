var bio = {
    "name": "Kervin Vasquez",
    "role": "Web Developer",
    "contacts": {
        "location": "Los Angeles, California",
        "mobile": "818-555-5555",
        "email": "kervin@greenjocote.com",
        "github": "kervin5",
        "twitter": "@kervin5"
    },
    "welcomeMessage": "Hola! I am a professional freelance creative Web Developer &amp; Designer<br> involved with latest web design and technologies trends. Coding is my passion, <br> Feel free to reach me out.",
    "skills": ["Ruby", "HTML", "CSS", "Version Control", "JavaScript", "Swift"],
    "biopic": "https://pbs.twimg.com/profile_images/709255394770575360/Knob42PL_400x400.jpg"
    
};

var otherInfo = {

    "location": "Leon, Nicaragua",
    "objective": "As a web designer and developer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. I enjoy working with teams or by myself on projects that involve a mix of web and graphic design, web development, database management and programming. I believe that every problem has a great solution!",
    "whatIdo": "I have been working as a web interface designer since. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS3 and HTML5 for modern websites. I loving creating awesome as per my clients’ need. I think user experience when I try to craft something for my clients. Making a design awesome.",
    "skills": ["90","80","75","70","80","60"],
    
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
        "majors": "General Sciences",
        "degree": "High School Diploma",
        "dates": "2003-2008",
        "url": "http://www.colegiocalasanznic.com/home.htm"
    }, {
        "name": "Pacoima Skill Center",
        "location": "Pacoima, California",
        "majors": "ESL and Microsoft Office Certificate",
        "degree": "ESL Certificate",
        "dates": "2010",
        "url": "http://home.lausd.net/"
    }, {
        "name": "National Autonomous University of Nicaragua",
        "location": "Leon, Nicaragua",
        "majors": "Computer Science Information Systems",
        "degree": "Information Systems Engineering",
        "dates": "2009-2013",
        "url": "http://www.unanleon.edu.ni/"
    }],
    "onlineCourses": [{
        "school": "Bloc",
        "title": "Rails Web Developement",
        "url": "https://www.bloc.io/",
        "dates": "2015"
    }, {
        "school": "LaunchSchool",
        "title": "Ruby Development",
        "url": "https://launchschool.com/",
        "dates": "2015 - 2016"
    }, {
        "school": "Udacity",
        "title": "Front End Web Developer Nanodegree",
        "url": "https://www.udacity.com/",
        "dates": "2016"
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
        "images": ["images/works/bloccit.jpg"]
    }, {
        "title": "Living Grace Wordpress",
        "dates": "Jan 2014 - Feb 2014",
        "description": "A wordpress website built for a non-profit oraganization.",
        "images": ["images/works/living.jpg"]
    }, {
        "title": "Pitch Perfect",
        "dates": "Feb 2016",
        "description": "iOS app that records audio, and applies different effects.",
        "images": ["images/works/pitch.jpg"]
    }, {
        "title": "Simple Portfolio",
        "dates": "Mar 2016",
        "description": "Simple responsive portfolio template build with HTML and CSS.",
        "images": ["images/works/green-portfolio.jpg"]
    }]
};

var projectsGroups = ['["all", "web", "interface"]','["all", "web", "identity"]','["all","ios","design","interface"]','["all","web", "design","identity"]'];

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

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLgenericMsg.replace("%data%", bio.welcomeMessage);

    $(".myphoto").append(formattedImage);

    for (var skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]).replace("%level%", otherInfo.skills[skill]);
        $("#more-skills").append(formattedSkills);
    };

    //Bio Section
    var formattedBioName = HTMLcontactGeneric.replace("%contact%", "Name").replace("%data%", bio.name);
    var formattedGithub = HTMLcontactGeneric.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLcontactGeneric.replace("%contact%", "Twitter").replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLcontactGeneric.replace("%contact%", "Location").replace("%data%", bio.contacts.location);
    var formattedMobile = HTMLcontactGeneric.replace("%contact%", "Phone").replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLcontactGeneric.replace("%contact%", "Email").replace("%data%", bio.contacts.email);

    $(".contact-number").append(bio.contacts.mobile);
    $("address").append(bio.contacts.location, "<br />", otherInfo.location);

    var formattedObjective = HTMLgenericMsg.replace("%data%", otherInfo.objective);

    for (ability in otherInfo.abilities) {
        formattedAbility = HTMLgenericLi.replace("%data%", otherInfo.abilities[ability].name);
        $("#my-abilities").append(formattedAbility);

        formattedAbilityBar = HTMLAbilitybar.replace("%data%", otherInfo.abilities[ability].name).replace("%level%", otherInfo.abilities[ability].level).replace("%level-label%", otherInfo.abilities[ability].level);
        if (ability % 2 === 0) {
            $("#ability-1").append(formattedAbilityBar);
        } else {
            $("#ability-2").append(formattedAbilityBar);
        }

    }

    $(".intro").prepend(formattedName, formattedRole, formattedMessage);
    $("#my-contact-info").append(formattedBioName,formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedMobile);
    $("#my-objective").append(formattedObjective);
    $("#my-experience").children("h3").after(otherInfo.whatIdo);
    
    //FOOTER APPEND - Github - Twitter and Phone only
    
    var footerGithub = HTMLfooterElement.replace("%data%", bio.contacts.github);
    footerGithub = footerGithub.replace("%label%","Github");
    
    var footerPhone = HTMLfooterElement.replace("%data%", bio.contacts.mobile);
    footerPhone = footerPhone.replace("%label%","Phone");
    
    var footerTwitter = HTMLfooterElement.replace("%data%", bio.contacts.twitter);
    footerTwitter = footerTwitter.replace("%label%","Twitter");
    
    $("footer .row").append(footerPhone,footerGithub,footerTwitter);
    
    socialIcons.display();
};

education.display = function() {
    for (school in education.schools) {
        var listElement = '<li class="timeline-inverted">';
        if (school % 2 === 0) {
            listElement = '<li>';
        }

        var formattedDates = listElement + HTMLschooListElement.replace("%dates%", education.schools[school].dates);
        
        var formattedDegree = formattedDates.replace("%majors%", education.schools[school].majors);

        var formattedName = formattedDegree.replace("%name%", education.schools[school].name+"<br />"+education.schools[school].degree);

        var formattedLocation = formattedName.replace("%location%", education.schools[school].location);
        
        $("#education").append(formattedLocation);
    }

    for (course in education.onlineCourses) {
        var listElement = '<li>';
        if (course % 2 === 0) {
            listElement = '<li class="timeline-inverted">';
        }

        var formattedDates = listElement + HTMLschooListElement.replace("%dates%", education.onlineCourses[course].dates);
        var formattedTitle = formattedDates.replace("%majors%", education.onlineCourses[course].title);

        var formattedLocation = formattedTitle.replace("%location%", education.onlineCourses[course].url);

        var formattedSchool = formattedLocation.replace("%name%", education.onlineCourses[course].school);
        $("#online-courses").append(formattedSchool);
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
        formattedGroups = projectElement.replace("%data%", "'" + projectsGroups[item] + "'");
        formattedImage = formattedGroups.replace("%picture%", projects.project[item].images[0]);
        formattedImageLink = formattedImage.replace("%picture2%", projects.project[item].images[0]);
        formattedDates = formattedImageLink.replace("%dates%", projects.project[item].dates);
        formattedTitle = formattedDates.replace("%title%", projects.project[item].title);
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
