import twemoji from "twemoji";

function runTwemoji(){
    twemoji.parse(document.body, {
        ext: ".svg",
        folder: "svg",
        className: "twemoji",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/"
    });
}

export default {onRouteDidUpdate({ location, previousLocation }){
    if (!previousLocation || location.pathname !== previousLocation.pathname) runTwemoji();
}};