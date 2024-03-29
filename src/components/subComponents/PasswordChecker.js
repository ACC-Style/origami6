export default {
    methods: {
        //Password length
        characterMin: function(password1, requiredLength){
            return password1.length >= requiredLength;

        },
        //Contains at least one number
        containsNumber: function(password1){
            const regex1Num = /\d/;
            return regex1Num.test(password1);
        },
        //Contains at least on letter
        containsLetter: function(password1){
            const regex1Letter = /[a-zA-Z]/;
            return regex1Letter.test(password1)
        },
        //Confirm new password
        matchPasswords: function(password1, password2){
            return password1 === password2;
        }
    }
}