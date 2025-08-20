import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config :Config = {
    title: "CherryGrove Documentation",
    tagline: "🌸🌳 Documentation for all about CherryGrove.",
    favicon: "img/logo.png",

    url: "https://docs.cherrygrove.dev",
    baseUrl: "/",

    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en", "zh-hans"]
    },

    markdown: {
        mermaid: true
    },

    clientModules: [
        require.resolve("./src/twemoji.ts")
    ],

    themes: ["@docusaurus/theme-mermaid"],

    presets: [[
        "classic", {
            docs: {
                routeBasePath: "/",
                sidebarPath: "./sidebars.ts"
            },
            blog: {
                routeBasePath: "/blog",
                showReadingTime: true
            },
            theme: { customCss: "./src/custom.css" }
        } satisfies Preset.Options
    ]],

    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false
        },
        navbar: {
            logo: {
                alt: "CherryGrove Logo",
                src: "img/logo.png",
                style: {
                    WebkitUserDrag: "none"
                }
            },
            items: [
                {
                    position: "left",
                    label: "CherryGrove",
                    to: "cg/overview"
                },
                {
                    position: "left",
                    label: "Content Pack Guide",
                    to: "pack/overview"
                },
                {
                    position: "left",
                    label: "CherryGrove Vanilla",
                    to: "vanilla/overview"
                },
                {
                    type: "localeDropdown",
                    position: "right",
                    dropdownItemsAfter: [
                        {
                            type: "html",
                            value: "<div style='margin:.4rem .2rem;border-top:solid 1px var(--ifm-toc-border-color)'/>"
                        },
                        {
                            label: "Help Us Translate!",
                            to: "cg/contributing#translating-documentation"
                        }
                    ]
                },
                {
                    position: "right",
                    label: "Main Site",
                    href: "https://cherrygrove.dev"
                },
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "CherryGrove",
                    items: [
                        {
                            label: "Overview",
                            to: "cg/overview"
                        },
                        {
                            label: "Roadmap",
                            to: "cg/roadmap"
                        },
                        {
                            label: "Releasing",
                            to: "cg/releasing"
                        },
                        {
                            label: "Design",
                            to: "cg/design"
                        },
                        {
                            label: "References",
                            to: "cg/references"
                        },
                        {
                            label: "Contributing",
                            to: "cg/contributing"
                        },
                        {
                            label: "FAQ",
                            to: "cg/faq"
                        }
                    ],
                },
                {
                    title: "Content Pack",
                    items: [
                        {
                            label: "Overview",
                            to: "pack/overview"
                        },
                        {
                            label: "Getting Started",
                            to: "pack/getting-started"
                        },
                        {
                            label: "Toolchain",
                            to: "pack/toolchain"
                        },
                        {
                            label: "References",
                            to: "pack/umi"
                        }
                    ]
                },
                {
                    title: "Vanilla",
                    items: [
                        {
                            label: "Overview",
                            to: "vanilla/overview",
                        },
                        {
                            label: "Game Design",
                            to: "vanilla/design"
                        },
                        {
                            label: "Contributing",
                            to: "vanilla/contributing"
                        },
                        {
                            label: "Tutorial",
                            to: "vanilla/tutorial",
                        },
                        {
                            label: "Wiki",
                            to: "vanilla/wiki"
                        }
                    ]
                },
                {
                    title: "Accounts & Contact",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/cherryridge",
                        },
                        {
                            label: "Discord Server",
                            href: "https://discord.gg/AxhSNgD637"
                        },
                        {
                            label: "r/CherryGrove",
                            href: "https://reddit.com/r/CherryGrove"
                        },
                        {
                            label: "Telegram",
                            href: "https://t.me/cherrygrove_dev"
                        },
                        {
                            label: "Youtube",
                            href: "https://youtube.com/@cherrygrove_dev"
                        },
                        {
                            label: "BlueSky",
                            href: "https://bsky.app/profile/cherrygrove.dev"
                        },
                        {
                            label: "Twitch",
                            href: "https://twitch.tv/cherryridgehq"
                        },
                        {
                            label: "X",
                            href: "https://x.com/cherrygrove_dev"
                        }
                    ]
                }
            ],
            copyright: `
                <div style="padding-top:1rem">
                    <div>Copyright © ${new Date().getFullYear()} CherryGrove Contributors.</div>
                    <div><a href="/legal#terms-of-use">Terms of Use</a>&emsp;<a href="/legal-for-docs">Documentation License</a></div>
                </div>
            `
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;