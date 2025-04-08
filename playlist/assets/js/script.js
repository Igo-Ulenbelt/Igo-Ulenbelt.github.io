let songs = [];
let currentId = 0;

function init() {
    fetch('assets/json/songs.json')
        .then(response => response.json())
        .then(data => {
            songs = data;
            currentId = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
            currentId = Math.max(1, Math.min(currentId, songs.length)) - 1;
            render();
        })
        .catch(error => console.error("Fout bij laden van songs.json:", error));
}

init();

function render() {
    const audioPlayer = document.getElementById("audioPlayer");
    const imageRow = document.getElementById("imageRow");
    const songTable = document.getElementById("songTable");

    imageRow.innerHTML = "";
    songTable.innerHTML = "";

    const getIndex = (offset) => (currentId + offset + songs.length) % songs.length;

    [getIndex(-2), getIndex(-1), getIndex(0), getIndex(1), getIndex(2)].forEach((i, idx) => {
        const img = document.createElement("img");
        img.src = "assets/img/" + songs[i].image;
        img.alt = songs[i].title;

        const fig = document.createElement("figure");
        fig.className = ["edge", "nextToCenter", "center", "nextToCenter", "edge"][idx];
        fig.appendChild(img);
        imageRow.appendChild(fig);
    });

    audioPlayer.src = "assets/songs/" + songs[currentId].audio;
    audioPlayer.onended = () => {
        currentId = getIndex(1);
        render();
        history.pushState(null, "", "?id=" + (currentId + 1));
    };

    songs.forEach((song, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="opacity-7-hover"><a href="?id=${idx + 1}">${String(idx + 1).padStart(2, '0')}</a></td>
            <td class="opacity-7-hover"><a href="?id=${idx + 1}">${song.title}</a></td>
            <td class="opacity-7-hover"><a class="me-3" href="?id=${idx + 1}">${song.length}</a></td>
        `;
        songTable.appendChild(tr);
    });
}

function goToPrev() {
    currentId = (currentId - 1 + songs.length) % songs.length;
    render();
    history.pushState(null, "", "?id=" + (currentId + 1));
}

function goToNext() {
    currentId = (currentId + 1) % songs.length;
    render();
    history.pushState(null, "", "?id=" + (currentId + 1));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev').addEventListener('click', goToPrev);
    document.querySelector('.next').addEventListener('click', goToNext);
});
