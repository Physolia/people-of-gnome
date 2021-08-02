const gnomeProjects = Array.from(document.querySelectorAll('.gnome-project'));

const filteredGnomeProjects = gnomeProjects.filter((project) => project.querySelector(".project-members").children.length > 0);

let currentProjectPage = 1;
let currentProjectSearch = '';

const amountOfProjectsPerPage = 10;

const amountOfProjects = filteredGnomeProjects.length - 1;
const amountOfProjectsPages = amountOfProjects >= amountOfProjectsPerPage ? Math.round(amountOfProjects / amountOfProjectsPerPage) : 1;

const filterProjectMethod = () => {
    filteredGnomeProjects.filter((project) => {
        const jqueryProject = jQuery(project);

        const textSearchResultOfMember = jqueryProject.find('.gnome-member-name').text().toLowerCase().indexOf(
            currentProjectSearch) > -1;

        const textSearchResultOfProject = jqueryProject.find('.gnome-project-name').text().toLowerCase().indexOf(
            currentProjectSearch) > -1;

        const currentIndex = parseInt(jqueryProject.attr('data-index-project'));

        const maximumPageNumberResult = currentIndex <= currentProjectPage * amountOfProjectsPerPage;

        const minimalPageNumberResult = currentProjectPage > 1 ? currentIndex > ((currentProjectPage - 1) * amountOfProjectsPerPage) : true;

        jqueryProject.toggle((textSearchResultOfMember || textSearchResultOfProject) && maximumPageNumberResult &&
            minimalPageNumberResult);
    })
}

const showProjectPage = (pagination) => {
    const element = jQuery(pagination);

    currentProjectPage = parseInt(element.text());

    filterProjectMethod();

    jQuery('.page-item').removeClass('active');

    element.addClass('active');
};

const hideProjectsWithoutMaintainers = () => {
    gnomeProjects.forEach((project) => {
        const membersContainer = project.querySelector(".project-members");

        if (membersContainer.children.length === 0) {
            project.classList.add('d-none');
        }
    })
}

const paginationProject = jQuery('.pagination-project');

for (let i = 1; i <= amountOfProjectsPages; i++) {
    paginationProject.append(
        `<li class="page-item" style="cursor: pointer" onClick="showProjectPage(this)"><span class="page-link">${i}</span></li>`
    );
}

jQuery('.gnome-projects-filter').on('keyup', function () {
    currentProjectSearch = jQuery(this).val().toLowerCase();

    filterProjectMethod();
});

jQuery('.page-item').first().addClass('active');

filterProjectMethod();

hideProjectsWithoutMaintainers();