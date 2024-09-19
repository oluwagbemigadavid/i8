import { Cloud, Developer, Integration, RealTime } from "src/assets"
import { HowItWorksType, NavType } from "./types"

export const links: NavType[] = [
    {
        link: 'Home',
        url: '/'
    }, {
        link: 'About us',
        url: '#about-us'
    }, {
        link: 'How it works',
        url: '#how-it-works'
    }, {
        link: 'Pricing',
        url: '#pricing'
    }, {
        link: 'FAQs',
        url: '#faqs'
    }
]

export const howItWorks: HowItWorksType[] = [
    {
        title: 'Shared Cloud Libraries',
        description: "Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.",
        icon: Cloud
    },
    {
        title: 'Free developer handoff, right inside',
        description: "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
        icon: Developer
    },
    {
        title: 'Real-time collaborative editing',
        description: "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
        icon: RealTime

    },
    {
        title: 'Integrations with the Cloud API',
        description: "Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. ",
        icon: Integration
    },
]