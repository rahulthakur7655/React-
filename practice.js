// function one (){
//     let first = new Promise((resolve , reject ) => {
//         setTimeout(()=>{
//             console.log("one")
//             resolve()
//         },2000)
        
//     })
//     return first
// }
// function two (){
//     let second = new Promise((resolve , reject ) => {
//         setTimeout(()=>{
//             console.log("two")
//             resolve()
//         },1000)
        
//     })
//     return second
// }
// function three (){
//     let three= new Promise((resolve , reject ) => {
//         setTimeout(()=>{
//             console.log("three")
//             resolve()
//         },3000)
        
//     })
//     return three
// }
// one().then(()=>two()).then(()=>three())


// let GF = (name,message) => {
//     console.log(`me:${message}`)
// setTimeout(()=>{
//     console.log("message seen")
// },2000)
// setTimeout(()=>{
//     console.log(`she:${message} too ${name} `)
// },5000)
// }
// GF("rahul","i love you")

function Me(fn){
    console.log("bannu: kake")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function she(fn){
    console.log("kashish: bugu")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function Me1(fn){
    console.log("bannu: kake ak baar i love you bolo na ")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function she1(fn){
    console.log("kashish: i love you , bugu")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function Me2(fn){
    console.log("bannu: I love you too , kake ")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function she2(fn){
    console.log("kashish: bas i love you tooooo")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function Me3(fn){
    console.log("bannu: hnji kakeeeeeeeee")

    setTimeout(()=>{
        console.log("message seen")

        setTimeout(()=>{
            console.log("typing...")

            setTimeout(()=>{
                fn()
            },1500)

        },1000)

    },1000)
}

function she3(){
    console.log("kashish: buguuuuuuuuuu ")
}

// call
Me(()=>{
    she(()=>{
        Me1(()=>{
            she1(()=>{
                Me2(()=>{
                    she2(()=>{
                        Me3(()=>{
                            she3()
                        })
                    })
                })
            })
        })
    })
})