const scene = document.querySelector("a-scene");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    scene.style.display = "block";

    if (typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function") {

        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === "granted") {
                    console.log("Gyroscope aktif");
                }
            })
            .catch(console.error);
    }
});