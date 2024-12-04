// Function to show selected e-paper based on dropdown selection
function showEpaper() {
    var selectedNewspaper = document.getElementById('newspaper-select').value;
    var epaperItems = document.querySelectorAll('.epaper-item');
    
    // Hide all e-paper items initially
    epaperItems.forEach(function(epaper) {
        epaper.style.display = 'none';
    });

    // Show the selected e-paper
    if (selectedNewspaper) {
        document.getElementById(selectedNewspaper).style.display = 'block';
    }
}
