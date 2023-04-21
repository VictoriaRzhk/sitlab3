function showModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
}

window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
}