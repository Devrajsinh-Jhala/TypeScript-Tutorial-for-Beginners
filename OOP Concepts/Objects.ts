
// Objects
let skills = {
    name: 'VS Code',
    level: 'Intermediate',
    theme: 'One Dark Pro',
};
// These attributes also behave as variables so once its type is declared it cannot be changed later.

skills.name = 'ReactJS'
// skills.name = 30; You can't do this
// You can override the object but number of attributes must be same
skills={
    name: "NodeJs",
    level: "Begineer",
    theme: "Backend",
}
// skills={
//     name: "NodeJs",
//     level: "Begineer",
// } This will give error