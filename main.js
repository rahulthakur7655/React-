let obj = [
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "div",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "span",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    },
    {
        tag : "h1",
        class : "heading",
        content : "hello world"
    }
]

// for ( let num of obj){
//     let hi = document.getElementsByTagName("body")[0]
//     hi.innerHTML +=`<${num.tag} class="${num.class}"> ${num.content}</${num.tag}>`
// }
let hi = document.getElementsByTagName("body")[0]
for (num= 0;num < obj.length;num++){
    hi.innerHTML +=`<${obj[num].tag} class="${obj[num].class}"> ${obj[num].content}</${obj[num].tag}>`
}
let hlo = document.getElementsByTagName("a")[0]
console.dir( hlo)
hlo.classList.add("hi")

console.log(hlo.classList.add("hi"))