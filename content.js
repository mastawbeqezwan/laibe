// Just a small firefox extention that hides WhatsApp sidebar.
// Written by @mastawbeqezwan on github on 5 Gelarêzan 2725

function toggleSidebar() {
    const contacts_list = document.querySelector("#side")?.parentElement;
    if (contacts_list) {
        contacts_list.style.display = contacts_list.style.display === "none" ? "" : "none";
        const status_bar = contacts_list.parentElement?.querySelector("header");
        if (status_bar) {
            status_bar.style.display = status_bar.style.display === "none" ? "" : "none";
        }
        const bar = status_bar.nextSibling.firstChild;
        if (bar) {
            bar.style.borderLeftWidth = bar.style.borderLeftWidth === "0px" ? "1px" : "0px";
        }
    }
}
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'x') {
        toggleSidebar();
    }
});
