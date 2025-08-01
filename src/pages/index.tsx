import { type ReactNode } from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

export default function Home() :ReactNode{
    const { siteConfig } = useDocusaurusContext();
    return(<Layout description="Homepage of CherryGrove Documentations.">
        <header className={styles.banner}>
            <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="cg/overview">
                        <Translate id="homepage.getStarted">Get Started</Translate>
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="https://cherrygrove.dev">
                        <Translate id="homepage.visitMainWebsite">Main Website (Downloads)</Translate>
                    </Link>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.featureContainer}>
                <div>
                    <Heading as="h2"><Translate id="homepage.label1">CherryGrove</Translate></Heading>
                    <div><Translate id="homepage.desc1">Take a deep (or shallow) dive into the core of CherryGrove, the game framework that powers everything.</Translate></div>
                    <div className={styles.buttons} style={{marginTop: "1rem", justifyContent: "normal"}}>
                        <Link className="button button--secondary button--lg" to="cg/overview">
                            <Translate id="homepage.getStarted">Get Started</Translate>
                        </Link>
                    </div>
                </div>
                <div>
                    <Heading as="h2"><Translate id="homepage.label2">Content Pack</Translate></Heading>
                    <div><Translate id="homepage.desc2">Learn about how to create content packs to add or modify gameplay features freely.</Translate></div>
                    <div className={styles.buttons} style={{marginTop: "1rem", justifyContent: "normal"}}>
                        <Link className="button button--secondary button--lg" to="pack/overview">
                            <Translate id="homepage.getStarted">Get Started</Translate>
                        </Link>
                    </div>
                </div>
                <div>
                    <Heading as="h2"><Translate id="homepage.label2">Vanilla</Translate></Heading>
                    <div><Translate id="homepage.desc3">Play the official playthrough of CherryGrove provided by CherryGrove Vanilla. Survive the night, and create anything you can imagine with no interventions.</Translate></div>
                    <div className={styles.buttons} style={{marginTop: "1rem", justifyContent: "normal"}}>
                        <Link className="button button--secondary button--lg" to="vanilla/overview">
                            <Translate id="homepage.getStarted">Get Started</Translate>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    </Layout>);
}