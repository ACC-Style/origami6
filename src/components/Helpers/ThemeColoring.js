const ThemeColoring = {

    methods:{
        br_theme(themeMode){
            let darktheme = "br_white-2";
            let lighttheme = "br_black-2";
            return (themeMode == "Dark")? darktheme : lighttheme;
        },
        c_theme(themeMode){
            let darktheme = "c_white";
            let lighttheme = "c_black";
            return (themeMode == "Dark")? darktheme : lighttheme;
        },
        bg_theme(themeMode){
            let darktheme = "bg_black-2";
            let lighttheme = "bg_black-_05";
            return (themeMode == "Dark")? darktheme : lighttheme;
        },
        c_accent_theme(themeMode){
            let darktheme = "c_accent";
            let lighttheme = "c_accent-1";
            return (themeMode == "Dark")? darktheme : lighttheme;
        }
        ,link_theme_0(themeMode){
            let darktheme = "c_primary-3 h:c_primary-4";
            let lighttheme = " c_primary h:c_primary-n1";
            return (themeMode == "Dark")? darktheme : lighttheme;
        },
        link_theme_n1(themeMode){
            let darktheme = "c_primary-2 h:c_primary-4";
            let lighttheme = " c_primary-n1 h:c_primary-n3";
            return (themeMode == "Dark")? darktheme : lighttheme;
        }
    }
};

export default ThemeColoring;
