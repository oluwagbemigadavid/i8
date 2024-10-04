import React from 'react'

export type NavType = {
    link: string;
    url: string
    className?: string;
    style?: any
}

export type HowItWorksType = {
    title: string;
    description: string;
    icon: any
    className?: string;
}

export type PricingCardType = {
    price: number,
    description: string,
    features: string[]
}

export type FAQsType = {
    header: {
        title: string,
        image?: any
        imageAlt?: string
    };
    content: any
};