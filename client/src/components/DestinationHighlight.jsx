import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DestinationCard } from './DestinationCard';

export function DestinationHighlight() {
    const [destinations, setDestinations] = useState([])
    const [inputDestination, setInputDestination] = useState("")

    async function fetchDestinations() {
        try {
            const result = await axios.get(`http://localhost:4001/trips?keywords=${inputDestination}`);
            console.log(result.data.data)
            setDestinations(result.data.data)

        } catch {
            console.error(error);
        }
    }
    fetchDestinations()

    useEffect(() => {
        if (inputDestination.trim() !== "") {
            fetchDestinations();
        } else {
            setDestinations([]); 
        }
    }, [inputDestination]);

    return (
        <section className="w-full justify-center flex mt-8 mb-8 font-sans">
            <div>
                <h1 className=" text-4xl text-sky-500 text-center font-sans">เที่ยวไหนดี</h1>
                <div className=" thisbox flex flex-col w-1/2 mx-auto my-2 font-sans">
                <label htmlFor="search-input" className="text-start">
                ค้นหาที่เที่ยว
                </label>
                <input
                type="text"
                placeholder="หาที่เที่ยวแล้วไปกัน..."
                className="border-b-2 border-b-gray-200 rounded-t text-center"
                onChange={(event)=> {setInputDestination(event.target.value)}}
                >
                </input>
                </div>
                <div className="w-3/4 mx-auto">
                {destinations.map((eachDestination) => {
                    return (<DestinationCard
                                 key={eachDestination.eid} 
                                 image={eachDestination.photos[0]} 
                                 title={eachDestination.title} 
                                 description={eachDestination.description} 
                                 url={eachDestination.url} 
                                 category={eachDestination.tags} 
                                 morePhoto={eachDestination.photos.slice(1)} 
                            />
                            );
            })}

                </div>
            </div>
        </section>
    )
}
