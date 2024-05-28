var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
    };
    console.log(course.title);
    // Show the course title
   document.getElementById("coursetitle").innerHTML = course.title;
    
    // Show the main category
    document.getElementById("maincategory").innerHTML = course.categories;

    //Show percentage
    var per = (420/557)*100;
    document.getElementById("percentage").innerHTML=Math.round(per);
