// TODO
// 1. Allocate
//    1. make list
//    2. spread it out in the given time w.r.t BRAC

// 2. Time Block
//    1. DO Allocate on the given time for free events until Time has been Blocked

// 3. Suggestive Time
//    1. Create different Allocations 

// 4. Auto Reschedule
//    1. Allocate just in a future date/time, if not possible then "Time Block" it in future date.

function BRAC(focus){

    const a = -2.5;
    const k = 2.5;
    const b = Math.PI;
    
    const times = (n) => Math.asin((focus - k)/a)/b + Math.PI * n * Math.pow(-1, n);

    // NOTE: The upperbound might change depending on how we're storing time data.
    const slots = [];
    for (let i = 0; i < 24; i++) {
        slots.push(times(i));
    }

}


function Allocate(events, brac = BRAC) {


    
}