import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "../styles/Country.module.css"


const Country = () => {
    let nav=useNavigate();
    
    const { country } = useParams();
    interface IData {
        capital: string;
        latlng: any;
        population: number;
        flag: string;
    }

    const [{ capital, latlng, population, flag }, setdata] = useState<IData>({ capital: '', latlng: [], population: 0, flag: '' });

    var handleClick=()=>
    {
        nav(`/weather/${capital}`)
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
            .then((res) => res.json())
            .then((res) => setdata(res[0]))
    }, [country])

    return (
        <>
            <Box className={styles.main}>
                <Box className={styles.box}>
                    <Box className={styles.image}>
                        <img src={flag} alt="" width="150px" height="100px" style={{border:'1px solid'}} />
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
                            <span style={{ fontWeight: '600' }}>Capital: </span>
                            {capital}
                        </Typography>
                        <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
                            <span style={{ fontWeight: '600' }}>Latitude: </span>
                            {latlng[0]}
                        </Typography>
                        <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
                            <span style={{ fontWeight: '600' }}>Longitude: </span>
                            {latlng[1]}
                        </Typography>
                        <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
                            <span style={{ fontWeight: '600' }}>Population: </span>
                            {population}
                        </Typography>
                    </Box>
                    <Box>
                        <Button data-testid="submitButton" variant='contained' onClick={handleClick}>Country Capital</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Country