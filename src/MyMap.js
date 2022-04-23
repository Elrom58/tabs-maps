import React from "react"
import { Map, Marker } from "pigeon-maps"


export default function MyMap({ lat, lng }) {
  return (
    <div> 
    <Map height={600} defaultCenter={[lat,lng]} defaultZoom={16}>
      <Marker width={50} anchor={[lat,lng]} />
    </Map>
    </div>
  )
}
