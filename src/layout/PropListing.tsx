import React from 'react'
import { propertys } from '../consts'
import PropCard from '../components/PropCard'

function PropListing() {
    return (
        <section className="max-w-[1140px] mx-auto container py-12">
            {/* top section  */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* left side  */}
                <div className="lg:w-1/2 px-6 mb-12">
                    <h1 className="text-[30px] lg:text-[40px] mb-4 text-accent font-inter font-bold">Property Listing</h1>
                    <p className="text-base mb-4 lg:mb-0 text-text font-hebbo">Eirmod sed ipsum dolor sit rebum labore magna erat.
                        Tempor ut dolore lorem kasd vero ipsum sit eirmod sit
                        diam justo sed rebum.</p>
                </div>
                {/* right side  */}
                <div className="lg:w-1/2 px-6 flex lg:items-end lg:justify-end">
                    <div className="mb-12 flex ">
                        <button
                            className="text-white border mr-2 border-primary text-base bg-primary rounded-md py-[6px] px-3">Feature</button>
                        <button
                            className="text-text mr-2 hover:bg-primary hover:text-white text-base border py-[6px] px-3 border-primary rounded-md">For
                            Sell</button>
                        <button
                            className="text-text mr-2 hover:bg-primary hover:text-white text-base border py-[6px] px-3 border-primary rounded-md">For
                            Rent</button>
                    </div>
                </div>
            </div>

            {/* list of cards  */}
            <div className="flex flex-wrap">
                {propertys.map((data, i) => <PropCard key={i} data={data} />)}
                <button className="animation__bottom bg-primary text-white rounded-md block mx-auto mt-6 py-4 px-12 font-hebbo">Browes
                    More
                    Property</button>
            </div>
        </section>
    )
}

export default PropListing