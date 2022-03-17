// Data files allow us to create reusable components 
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true, 
    topLine: 'Proper Greetings',
    headLine: 'Make a good first impression',
    description: 'Other translation websites will translate greetings incorrectly, often leading to a rude sounding message. Sakuki does not do this.',
    // buttonLink: 'about',
    buttonLink: '/signup',
    buttonLabel: 'Sign Up',
    imgStart: true,
    img: require('../../images/workchat.png'),
    alt: 'Car',
    dark: true, 
    primary: true, 
    darkText: false 
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false, 
    topLine: 'Formalities fulfilled',
    headLine: 'Meet their expectations',
    description: 'Sakuki makes sure that your translated messages use the appropriate formal tone (keigo). It replaces any casual words with the formal equivalent.',
    // buttonLink: 'discover',
    buttonLink: '/signup',
    buttonLabel: 'Get started',
    imgStart: true,
    img: require('../../images/chat.png'),
    alt: 'Chat',
    dark: false, 
    primary: false, 
    darkText: true 
}

export const homeObjThree = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: false, 
    topLine: 'Join Us',
    headLine: 'Create an account today',
    description: 'Sign up for an account to improve the quality of your company\'s Japanese language replies.',
    buttonLink: '/signup',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/japan.png'),
    alt: 'Car',
    dark: true, 
    primary: false, 
    darkText: false 
}

