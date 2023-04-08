//understanding callback hell and basics

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};



let order = (Fruit_name, call_production) => {


    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]}`)
        call_production(), 2000
    })
};

//the callback hell , its literally hell so hard , so the solution is promises!
let production = () => {

    setTimeout(() => {
        console.log("production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)

};


order(0, production)


//Promises were invented to solve the problem of callback hell and to better handle our tasks.
