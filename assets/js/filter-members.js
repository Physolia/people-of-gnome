const gnomeMembers = Array.from(document.querySelectorAll(".gnome-member"));

let currentMemberPage = 1;
let currentMemberSearch = '';

const amountOfContributors = gnomeMembers.length - 1;
const amountOfMembersPerPage = 10;
const amountOfMemberPages = amountOfContributors >= amountOfMembersPerPage ? Math.round(amountOfContributors / amountOfMembersPerPage) : 1;

const filterMethod = () => {
    gnomeMembers.filter((member) => {
        const jqueryMember = jQuery(member);

        const textSearchResult = jqueryMember.find('.gnome-member-name').text().toLowerCase().indexOf(
            currentMemberSearch) > -1;

        const currentIndex = parseInt(jqueryMember.attr('data-index'));

        const maximumPageNumberResult = currentIndex <= currentMemberPage * amountOfMembersPerPage;

        const minimalPageNumberResult = currentMemberPage > 1 ? currentIndex > ((currentMemberPage - 1) * amountOfMembersPerPage) : true;

        jqueryMember.toggle(textSearchResult && maximumPageNumberResult && minimalPageNumberResult);
    });
};

const showPage = (pagination) => {
    const element = jQuery(pagination);

    currentMemberPage = parseInt(element.text());

    filterMethod();

    jQuery('.page-item').removeClass('active');

    element.addClass('active');
};


const paginationMembers = jQuery('.pagination');

for (let i = 1; i <= amountOfMemberPages; i++) {
    paginationMembers.append(
        `<li class="page-item" style="cursor: pointer" onClick="showPage(this)"><span class="page-link">${i}</span></li>`
    );
}

jQuery('.gnome-members-filter').on('keyup', function () {
    currentMemberSearch = jQuery(this).val().toLowerCase();

    filterMethod();
});

jQuery('.page-item').first().addClass('active');

filterMethod();

if (amountOfContributors < 0) {
    jQuery('.gnome-members-list').append('<span class="text-muted"><strong>No entries found.</strong></span>');
}