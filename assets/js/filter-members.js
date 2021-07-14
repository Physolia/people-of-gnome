const gnomeMembers = jQuery('.gnome-member');

let currentMemberPage = 1;
let currentMemberSearch = '';

const amountOfContributors = gnomeMembers.length - 1;
const amountofMembersPerPage = 10;
const amountOfMemberPages = amountOfContributors >= amountofMembersPerPage ? Math.round(amountOfContributors / amountofMembersPerPage) : 1;

const filterMethod = () => {
  gnomeMembers.filter(function () {
    const textSearchResult = jQuery(this).find('.gnome-member-name').text().toLowerCase().indexOf(
      currentMemberSearch) > -1;

    const currentIndex = parseInt(jQuery(this).attr('data-index'));

    const maximumPageNumberResult = currentIndex <= currentMemberPage * amountofMembersPerPage;

    const minimalPageNumberResult = currentMemberPage > 1 ? currentIndex > ((currentMemberPage - 1) * amountofMembersPerPage) : true;

    jQuery(this).toggle(textSearchResult && maximumPageNumberResult && minimalPageNumberResult);
  });
};

const showPage = (pagination) => {
  const element = jQuery(pagination);

  currentMemberPage = parseInt(element.text());

  filterMethod();

  jQuery('.page-item').removeClass('active');

  element.addClass('active');
};

for (let i = 1; i <= amountOfMemberPages; i++) {
  jQuery('.pagination').
  append(
    `<li class="page-item" style="cursor: pointer" onClick="showPage(this)"><span class="page-link">${i}</span></li>`
    );
}

jQuery('.gnome-members-filter').on('keyup', function () {
  currentMemberSearch = jQuery(this).val().toLowerCase();

  filterMethod();
});

jQuery('.page-item').first().addClass('active');

filterMethod();

if (amountOfContributors <= 0) {
  jQuery('.gnome-members-list').append('<span class="text-muted"><strong>No entries found.</strong></span>');
}