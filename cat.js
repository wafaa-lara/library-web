function showDocuments(category) {
    var documentList = document.getElementById('document-list');
    documentList.innerHTML = "<h3>Liste des documents dans la catégorie " + category + "</h3>";
    // Vous pouvez ajouter ici la logique pour afficher la liste des documents dans la catégorie donnée
    documentList.classList.remove('hidden');
}


function showAllCategories() {
    window.location.href = "info.html"; // Replace "documents.html" with the actual path to your "Documents" page
}

