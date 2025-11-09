import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Admonition from "@theme/Admonition";
import React from "react";

const fallback :string = "The API reference in this language is not available yet.";

type UmiFeatureProps = {
    children :React.ReactNode;
    exclude? :string | string[];
}

export function UmiFeature({children, exclude} :UmiFeatureProps){
    //console.log(children);
    const realChildren = React.isValidElement(children) ? [children] : children;
    return(<Tabs groupId="language">
        {exclude && (exclude == "json" || (typeof exclude == "object" && exclude.includes("json"))) ? null : <TabItem value="json" label="JSON">{realChildren[0] ?? fallback}</TabItem>}
        {exclude && (exclude == "js" || (typeof exclude == "object" && exclude.includes("js"))) ? null : <TabItem value="js" label="JavaScript">{realChildren[1] ?? fallback}</TabItem>}
        {exclude && (exclude == "wasm" || (typeof exclude == "object" && exclude.includes("wasm"))) ? null : <TabItem value="wasm" label="WebAssembly">{realChildren[2] ?? fallback}</TabItem>}
        {exclude && (exclude == "lua" || (typeof exclude == "object" && exclude.includes("lua"))) ? null : <TabItem value="lua" label="Lua">{realChildren[3] ?? fallback}</TabItem>}
    </Tabs>);
}

type OnlyInProps = {
    children :React.ReactNode;
    lang :string | string[];
    level? :"info" | "note" | "tip" | "warning" | "danger";
}

export function OnlyIn({children, level, lang} :OnlyInProps){
    return(<Admonition type={level ?? "info"} title={lang ? typeof lang == "string" ? `ONLY IN ${lang}` : `ONLY IN ${lang.join(", ")}` : ""}>{children}</Admonition>);
}

type StartInProps = {
    children :React.ReactNode;
    version :string;
}

export function StartingInVersion({children, version} :StartInProps){
    return(<div className="">

    </div>);
}

export function DeprecatedInVersion({children, version} :StartInProps){
    return(<div className="">
        
    </div>);
}