import twemoji from "twemoji";

function runTwemoji(){
    twemoji.parse(document.body, {
        ext: ".svg",
        folder: "svg",
        className: "twemoji",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/"
    });
}

export function onRouteDidUpdate(){
    runTwemoji();
}

if(typeof window !== "undefined") runTwemoji();