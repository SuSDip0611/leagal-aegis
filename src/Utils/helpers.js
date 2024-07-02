export const API_URL = process.env.REACT_APP_BACKEND_URL;

export const removeHTMLtags = (text) => {
    if (text) {
        const regex = /(<([^>]+)>)/ig;
        const result = text.replace(regex, '');
        return result;        
    }else{
        return false;
    }
}

export const headerMenus = [
    {
        menu: "HOME",
        url: "/"
    },
    {
        menu: "SERVICES",
        url: "/services"
    },
    /*{
        menu: "BLOGS",
        url: "/blogs"
    },*/
    {
        menu: "ABOUT US",
        url: "/about"
    },
    {
        menu: "CONTACT US",
        url: "/contact"
    },
];

export const footerMenus = [
    {
        menu: "FAQ",
        url: "/faq"
    },
    {
        menu: "TERMS & CONDITION",
        url: "/terms"
    },
    {
        menu: "PRIVACY & POLICY",
        url: "/privacy"
    },
];

export const services = [
    {
        id: 1,
        service: "Affadavit Sevices",
        image: "/assets/icons/icon1.png",
        desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
        id: 2,
        service: "Noterised Services",
        image: "/assets/icons/icon1.png",
        desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
        id: 3,
        service: "Marraige registration",
        image: "/assets/icons/icon1.png",
        desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
        id: 4,
        service: "Company Registration",
        image: "/assets/icons/icon1.png",
        desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
];