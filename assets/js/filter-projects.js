const gnomeProjects = jQuery('.gnome-project');

let currentProjectPage = 1;
let currentProjectSearch = '';

const amountOfProjectsPerPage = 10;

const amountOfProjects = gnomeProjects.length - 1;
const amountOfProjectsPages = amountOfProjects >= amountOfProjectsPerPage ? Math.round(amountOfProjects / amountOfProjectsPerPage) : 1;

const filterProjectMethod = () => {
  gnomeProjects.filter(function () {
    const textSearchResultOfMember = jQuery(this).find('.gnome-member-name').text().toLowerCase().indexOf(
      currentProjectSearch) > -1;
    const textSearchResultOfProject = jQuery(this).find('.gnome-project-name').text().toLowerCase().indexOf(
      currentProjectSearch) > -1;

    const currentIndex = parseInt(jQuery(this).attr('data-index-project'));

    const maximumPageNumberResult = currentIndex <= currentProjectPage * amountOfProjectsPerPage;

    const minimalPageNumberResult = currentProjectPage > 1 ? currentIndex > ((currentProjectPage - 1) * amountOfProjectsPerPage) : true;

    jQuery(this).toggle((textSearchResultOfMember || textSearchResultOfProject) && maximumPageNumberResult &&
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

for (let i = 1; i <= amountOfProjectsPages; i++) {
  jQuery('.pagination-project').
  append(
    `<li class="page-item" style="cursor: pointer" onClick="showProjectPage(this)"><span class="page-link">${i}</span></li>`
    );
}

jQuery('.gnome-projects-filter').on('keyup', function () {
  currentProjectSearch = jQuery(this).val().toLowerCase();

  filterProjectMethod();
});

jQuery('.page-item').first().addClass('active');

filterProjectMethod();