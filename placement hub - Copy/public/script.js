// script.js
const colleges = [
    "Heritage Institute of Technology / HITK",
    "Jadavpur University / JU",
    "IIT Kharagpur / IIT KGP",
    "University of Engineering and Management / UEM",
    "IIEST Shibpur",
    "NIT Durgapur",
    "Institute of Engineering and Management / IEM",
    "Haldia Institute of Technology / HIT",
    "Techno India (Main)"
];

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (value.length === 0) return;

    const filteredColleges = colleges.filter(college => college.toLowerCase().includes(value.toLowerCase()));
    filteredColleges.forEach(college => {
        const div = document.createElement('div');
        div.textContent = college;
        div.onclick = () => selectCollege(college);
        suggestions.appendChild(div);
    });
}

function selectCollege(college) {
    document.getElementById('collegeSearch').value = college;
    document.getElementById('suggestions').innerHTML = '';
}