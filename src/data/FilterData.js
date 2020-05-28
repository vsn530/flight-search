import moment from 'moment';

// console.log(moment('2020-06-15').valueOf())
// console.log(moment('06/15/2020').valueOf())
export default (flightData,searchData)=>{
    if(searchData.sourceCity === ""|| searchData.destCity === "" || searchData.startDate === undefined){
        return [];
    }
    let returnFlights = []
    let source = searchData.sourceCity;
    let destCity = searchData.destCity;
    let departure = searchData.startDate;
    let filters = {
        source,
        destCity,
        departure
    }
    const matchedFlights = getMatchingFlights(flightData,filters)



    //Handling returndate 
    if(searchData.returnDate){
        source = searchData.destCity;
        destCity = searchData.sourceCity;
        departure = searchData.returnDate;
        filters = {
            source,
            destCity,
            departure
        }
       returnFlights = getMatchingFlights(flightData,filters); 
    }

    const totalMatchedFlights = [...matchedFlights,...returnFlights]

    // console.log(data)
    return totalMatchedFlights
}

const getMatchingFlights=(flightData,filters)=>{    
    
    const tempdata = flightData.filter((flight)=>{
        let tempFlight1 = [...flight.route]
        let tempFlight2 = [...flight.route]
        tempFlight1.pop()
        tempFlight2.shift()
        const scityMatch = tempFlight1.includes(filters.source.toLowerCase())
        const destCityMatch = tempFlight2.includes(filters.destCity.toLowerCase())

        return scityMatch && destCityMatch ;
    })

    const data = tempdata.filter((flight)=>{
        const dateMatch = moment(flight.departure).valueOf() === filters.departure;
        return dateMatch;
    })

    return data;
}