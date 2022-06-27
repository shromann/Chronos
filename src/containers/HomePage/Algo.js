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

function times(a, k, b, focus, n){
    return Math.asin((focus - k)/a)/b + Math.PI * n * Math.pow(-1, n)
}

function BRAC(focus){

    const a = -2.5;
    const k = 2.5;
    const b = Math.PI;
    

    // NOTE: The upperbound might change depending on how we're storing time data.
    const slots = [];
    for (let i = 0; i < 24; i++) {
        slots.push(times(a, k, b, focus, i));
    }

}

function Allocate(events, brac = BRAC) {

    // 1. Remove the 12-2pm or any other another, thats usually time to take a break / recover. eg Blocked Events +-25mins

    // 2. Pick a High Focus Event
    // 3. Assign it's StartTime to an available High Focus Time
    // 4. Assign it's EndTime 25 mins later its StartTime
    // 5. Continue till all High Focus Event are assigned
    // 6. Repeat steps 3-5 for the lower focus events.

    // 7. NOTE: Include Spread and other paramters to decide the best fit.

    for (let focus = 5; focus >= 0; focus--) {
        let times = brac(focus);
        let toAssign = events.filter(event => event.focus === focus);
        toAssign.forEach(e => {
            e.start_time= times[0];
            events.remove(e);
            times.remove(times[0]);
        });
    }
    
}


const Algo = () => {
        <button onClick={BRAC}>
            RUN Algo
        </button>
};

export default Algo;