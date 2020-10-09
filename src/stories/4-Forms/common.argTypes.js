export const commonArgs ={
    defaultvalue:{description:'the defualt or value of the input onload. '},
icon:{description:'font-awesome icon for use with decorationg the input like a dollar sign, or user',
control:{type:'select', options:['','fa-lock','fa-user','fa-heart','fa-cog','fa-key','fa-dollar-sign']}},
state:{control:{type:'select', options:['','alert','requiredAlert','warning','success','info','accent','disabled']}},
inputType:{control:{type:'select', options:['text','email','password']}}
};