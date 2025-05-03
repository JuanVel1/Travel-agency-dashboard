import React from 'react'
import {Link, useLocation} from "react-router";
import {ChipDirective} from "@syncfusion/ej2-react-buttons";
import {cn, getFirstWord} from "../lib/utils";

interface TripCardProps {
    id?: string,
    name?: any,
    imageUrl?: any,
    location?: any,
    tags?: string[],
    price?: any
}

const TripCard = ({id, name, imageUrl, location, tags, price}: TripCardProps) => {
    const path = useLocation();
    return (
        <Link key={id} to={path.pathname === "/" || path.pathname.startsWith(
            "/travel"
        ) ? `/travel${id}` : `trips/${id}`}
        className="trip-card"
        >
            <img src={imageUrl} alt={name}/>
            <article>
                <h2>{name}</h2>
                <figure>
                    <img
                        src={"/assets/icons/location-mark.svg"}
                        alt="location" className="size-4"
                    />
                    <figcaption>{location}</figcaption>
                </figure>
            </article>

            <div className="mt-5 pl-[18xpx] pr-3.5 pb-5">
                <ChipDirective>
                    {tags?.map((tag, index) => (
                        <ChipDirective
                            key={index}
                            text={getFirstWord(tag)}
                            cssClass={cn(index ===1 ? '!bg-pink-50 !text-ping-500 ': '!bg-pink-50 !text-success-700')}
                        />
                    ))}
                </ChipDirective>
            </div>

            <article className="tripCard-pill ">{price}</article>
        </Link>
    )
}
export default TripCard
