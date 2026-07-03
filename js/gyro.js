window.addEventListener("load", () => {

    const button = document.getElementById("startButton");

    button.addEventListener("click", async () => {

        // iPhone
        if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof DeviceOrientationEvent.requestPermission === "function"
        ) {

            const permission =
                await DeviceOrientationEvent.requestPermission();

            if (permission === "granted") {

                document.querySelector("a-scene").style.display = "block";
                document.getElementById("startScreen").style.display = "none";

            }

        }

        // Android
        else {

            document.querySelector("a-scene").style.display = "block";
            document.getElementById("startScreen").style.display = "none";

        }

    });

});