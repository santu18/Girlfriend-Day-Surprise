/* ==========================================
   PASSWORD
========================================== */

const passwordInput =
    document.getElementById("secretPassword");

const unlockButton =
    document.getElementById("unlockButton");

const passwordError =
    document.getElementById("passwordError");


if (passwordInput && unlockButton) {

    function unlockDiary() {

        const enteredPassword =
            passwordInput.value.trim();

        const correctPassword =
            "191825";


        if (enteredPassword === correctPassword) {

            passwordError.textContent = "";

            unlockButton.textContent =
                "Opening Our Story... ❤️";

            unlockButton.disabled = true;

            document
                .querySelector(".password-card")
                .style.opacity = "0";


            setTimeout(function () {

                window.location.href =
                    "cover.html";

            }, 700);


        } else {

            passwordError.textContent =
                "That's not our secret... try again ❤️";

            passwordInput.value = "";

            passwordInput.focus();

        }

    }


    unlockButton.addEventListener(
        "click",
        unlockDiary
    );


    passwordInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                unlockDiary();

            }

        }
    );

}


/* ==========================================
   COVER
========================================== */

const openDiary =
    document.getElementById("openDiary");


if (openDiary) {

    openDiary.addEventListener(
        "click",
        function() {

            const cover =
                document.querySelector(".cover-content");


            cover.style.transition =
                "all 0.8s ease";

            cover.style.opacity =
                "0";

            cover.style.transform =
                "scale(1.08)";


            setTimeout(function() {

                window.location.href =
                    "pages/beginning.html";

            }, 800);

        }
    );

}


/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer =
    document.querySelector(".hearts");


if (heartsContainer) {

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.classList.add(
            "heart-float"
        );

        heart.innerHTML = "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 6) + "s";


        heartsContainer.appendChild(
            heart
        );


        setTimeout(function() {

            heart.remove();

        }, 12000);

    }


    setInterval(
        createHeart,
        700
    );

}