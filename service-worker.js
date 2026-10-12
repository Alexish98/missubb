
self.addEventListener("install", function(event) {
    console.log("Aplicación preparada para instalarse.");
});

self.addEventListener("activate", function(event) {
    console.log("Service worker activado.");
});