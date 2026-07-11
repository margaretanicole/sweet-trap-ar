const scene = document.querySelector("a-scene");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    startScreen.style.display = "none";
    scene.style.display = "block";

    // Jalankan video
    const video = document.getElementById("videoDiabetes");

    video.muted = false;
    video.volume = 1;

    video.play().catch(err => {
        console.log("Video gagal diputar:", err);
    });

    // Izin gyroscope untuk iPhone
    if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
    ) {

        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === "granted") {
                    console.log("Gyroscope aktif");
                }
            })
            .catch(console.error);
    }

});