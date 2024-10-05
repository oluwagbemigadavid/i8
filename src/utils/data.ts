import { Cloud, Developer, Integration, RealTime } from "src/assets"
import { HowItWorksType, LinkType, PricingCardType } from "./types"
import { FacebookIcon, GooglePlusIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from 'src/assets'

export const links: LinkType[] = [
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

export const pricing: PricingCardType[] = [
    {
        price: 49,
        description: 'A pay-one icense, just for you',
        features: [
            'The Mac app - yours to keep',
            'Beautiful White_level',
            'One year of saving to Cloud'
        ]
    }, 
    {
        price: 99,
        description: 'Pro account, just for you',
        features: [
            'The Mac app - yours to keep',
            'Beautiful White_level',
            'One year of saving to Cloud',
            'A personal Cloud workspace',
            'All tools, just for you'
        ]
    }, 
    {
        price: 299,
        description: 'A pay-one icense, just for you',
        features: [
            'Access to the  Mac app for all',
            'A shared cloud workspace',
            'Free Cloud access for unlim',
            'Easy team management',
            'No license key required'
        ]
    }, 
]

export const footerLinks: LinkType[][] = [
    [
        {
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
    ],
    [
        {
            link: 'Load generation',
            url: '/'
        }, 
        {
            link: 'Customer engagment',
            url: '#about-us'
        }, 
        {
            link: 'Customer support',
            url: '#faqs'
        },
        {
            link: 'Help Center Articles',
            url: '#how-it-works'
        }, 
        {
            link: 'Outbound Messages',
            url: '#pricing'
        }, 
    ],
]

export const socialIcons = [
  { Icon: FacebookIcon, fill: '#ffffff' },
  { Icon: TwitterIcon, fill: '#ffffff' },
  { Icon: GooglePlusIcon, fill: '#ffffff' },
  { Icon: LinkedInIcon, fill: '#ffffff' },
  { Icon: YoutubeIcon, fill: '#ffffff' },
];