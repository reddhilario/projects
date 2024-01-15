const arr1 = [1,10,100,1000,'avc',-4,-4.1];
function bullcrap(stuff) 
{
    
    let lowest = stuff[0];
    let highest = 0;
    for (let i = 0; i <= stuff.length; i++) {
        let container = arr1[i];

        if(container <= lowest) {
            lowest = container;
        }
        if(container >= highest) {
            highest = container;
        }
    };
   //return highest;
    return("highest: " + highest + "lowest: " + lowest);
    
};
console.log(bullcrap(arr1));
