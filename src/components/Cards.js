import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';



function Cards({ flag, name, population, region, capital, isDark }) {

    const darkBackgroundColor = "hsl(207, 26%, 17%)"
    const lightBackgroundColor = "hsl(0, 0%, 98%)"
    const darkTextColor = "hsl(0, 0%, 100%)"
    const lightTextColor = "hsl(200, 15%, 8%)"
    const darkElementColor = "hsl(209, 23%, 22%)"
    const lightElementColor = "hsl(0, 0%, 100%)"


    return (
        <Link to={`/Country/${name}`} style={{ textDecoration: "none" }}>
            <Card style={{ width: '18rem', flexBasis: "calc((100% - 60px)/4)", minWidth: "250px", height: "400px", border: "none", borderColor: isDark ? "black" : "#d9d9d9", boxShadow: isDark ? "0 0 5px rgba(0, 0, 0, .25) " : "0px 0px 2px #909090" }}>
                <Card.Img variant="top" src={flag} style={{ objectFit: "fill", height: "220px" }} />
                <Card.Body style={{ backgroundColor: isDark ? darkElementColor : lightElementColor, borderRadius: " 0 0 5px 5px", color: isDark ? darkTextColor : lightTextColor }} >
                    <Card.Title className='title' >{name}</Card.Title>
                    <Card.Title className='title'><b>Population :</b> {population}</Card.Title>
                    <Card.Title className='title'><b>Region :</b> {region}</Card.Title>
                    <Card.Title className='title'> <b>Capital :</b> {capital}</Card.Title>

                </Card.Body>
            </Card>
        </Link >

    )
}

export default Cards
