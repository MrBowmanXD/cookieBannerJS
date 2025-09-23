const cookieBanner = document.querySelector(".cookies-banner");
if (localStorage.getItem("cookiesBannerApproved") === "true") {
    // Code if cookie Banner is approved
    cookieBanner.remove();
}

if (localStorage.getItem("cookiesBannerReject") === "true") {
    // Code if cookie Banner is rejected
    cookieBanner.remove();
}

if (document.getElementById("cookies-reject")) {

document.getElementById("cookies-reject").addEventListener("click", function () {
// Code to remove cookie banner
if (localStorage.getItem("cookiesBannerReject") !== "true") {
    localStorage.setItem("cookiesBannerReject", true);
}
if (localStorage.getItem("cookiesBannerReject") === "true" && localStorage.getItem("cookiesBannerApproved") === null) {
cookieBanner.remove();
}
});
}

if (document.getElementById("cookies-accept")) {

document.getElementById("cookies-accept").addEventListener("click", function () {
    localStorage.setItem("cookiesBannerApproved", true);
if (localStorage.getItem("cookiesBannerApproved") === "true" && localStorage.getItem("cookiesBannerReject") === null) {
    // Code to add for google analytics for example (this is activated if user accepts cookies)
    cookieBanner.remove();
}
})
};

document.getElementById('reset-cookies-btn').onclick = function() {
localStorage.removeItem("cookiesBannerApproved");
localStorage.removeItem("cookiesBannerReject");
location.reload();
};