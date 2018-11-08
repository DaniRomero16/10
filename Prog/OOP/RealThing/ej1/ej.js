
function hola() {
    // let print = document.getElementById("pepe").children[1].children[0].children[2].children[1].innerHTML;

    // document.getElementById("pepe").children.forEach(element => {
    //     if (element.innerHTML == "Re") {
    //         print = element.innerHTML;
    //     } else {
    //         element.children.forEach(element => {
    //             if (element.innerHTML == "Re") {
    //                 print = element.innerHTML;
    //             } else {
    //                 element.children.forEach(element => {
    //                     if (element.innerHTML == "Re") {
    //                         print = element.innerHTML;
    //                     } else {
    //                         element.children.forEach(element => {
    //                             if (element.innerHTML == "Re") {
    //                                 print = element.innerHTML;
    //                             }
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });
    let print;
    let array = document.getElementById("pepe").children;
    for (let i = 0; i < array.length; i++) {
        if (array[i].innerHTML == "Re") {
            print = array[i].innerHTML;
        }else {
            for (let j = 0; j < array[i].children.length; j++) {
                if (array[i].children[j].innerHTML == "Re") {
                    print = array[i].children[j].innerHTML;
                }else {
                    for (let k = 0; k < array[i].children[j].children.length; k++) {
                        if (array[i].children[j].children[k].innerHTML == "Re") {
                            print = array[i].children[j].children[k].innerHTML;
                        }else {
                            for (let l = 0; l < array[i].children[j].children[k].children.length; l++) {
                                if (array[i].children[j].children[k].children[l].innerHTML == "Re") {
                                    print = array[i].children[j].children[k].children[l].innerHTML;
                                }                              
                            }
                        }                       
                    }
                }                
            }
        }       
    }
    console.log(print);
}
