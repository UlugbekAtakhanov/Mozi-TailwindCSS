module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xxs': '320px',
            'xs': '520px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1150px',
            '2xl': '1536px',
        },
        extend: {

            // FONT FAMILY
            fontFamily: {
                open: "'Open Sans', sans- serif",
            },


            // CUSTOM COLORS
            colors: {
                "blueColor": " #1A2578",
                "grayColor": "#484C63",
                "redColor": "#BF0830",
                "darkColor": "#3A3A3C",
            },

            backgroundImage: {
                "heroBgColor": "linear-gradient(252.91deg, #E3E7F6 3.68%, rgba(227, 231, 246, 0) 97.82%);",
                "awardBgColor": "linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%);",
                "questionBgColor": "linear-gradient(342.12deg, #E3E7F6 -6.53%, rgba(227, 231, 246, 0) 87.81%);",

                "aboutHeroBgColor": "linear-gradient(247.11deg, #E3E7F6 3.56%, rgba(227, 231, 246, 0) 115.17%);",
                "aboutCultureBgColor": "linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%);",
            },

            boxShadow: {
                'customShadow': '0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.08)',
            }

        },
    },
    plugins: [],
}