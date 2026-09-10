/**
 * Tutorial: https://www.youtube.com/watch?v=jZiZs8cZAKU
 * project-filters = container for buttons
 * project-filter-button = individual buttons
 * active = active filter 
 */
const filterList = document.querySelector('.project-filters');                // container for buttons
const filterButtons = document.querySelectorAll('.project-filter-button');    // all buttons
const projects = document.querySelectorAll('.project');                       // all projects

// debugs:
//console.log("Filter list:", filterList);
//console.log("Filter buttons:", filterButtons);
//console.log("Projects:", projects);

/* Count # of Projects */
let projectIndex = 0;
projects.forEach((project) => {
    project.style.viewTransitionName = `proj-${++projectIndex}`;
});


/* Use filter buttons */
filterButtons.forEach((button) => {
    //console.log("wa");

    button.addEventListener("click", (e) => {
        let projectCategory = button.getAttribute("data-filter");
        //console.log("A filter button Clicked:", projectCategory);

        if (!document.startViewTransition) {
            //console.log("Getting things ready to filter...");
            updateActiveButton(button);
            filterProjects(projectCategory);
            return;
        }

        document.startViewTransition(() => {
            console.log("Getting things ready to filter...");
            updateActiveButton(button);
            filterProjects(projectCategory);
        });
    });
});



function updateActiveButton(newButton) {
    console.log("Updating Active Button...");
    filterList.querySelector(".active").classList.remove("active");
    newButton.classList.add("active");
}


function filterProjects(filter) {
    console.log("Filtering Projects...");
    /** 
     * Go through each project in list 
     * see if the data-category matches our given variable 'filter'
     * Set hidden or remove it based on match results.  
     * */
    projects.forEach((project) => {
        let projectCategory = project.getAttribute("data-category");
        if (filter === "all" || filter === projectCategory) {  
            project.removeAttribute("hidden");   
        } 
        else {  
            project.setAttribute("hidden", "");  
        }
    });
}