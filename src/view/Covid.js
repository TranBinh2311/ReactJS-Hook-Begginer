import React, {useState, useEffect} from 'react'
import "../view/Covid.scss"
import axios from "axios"
import moment from "moment"


const Covid = () => {

    const [dataCovid, setDataCovid] =useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
       async function fetchData(){
        setTimeout( async ()=>{
            try{
                let res = await axios.get("https://api.covid19api.com/country/vietnam?from=2021-11-1T00:00:00Z&to=2021-12-1T00:00:00Z")
                let data = res && res.data ? res.data : [];
                if(data && data.length > 0){
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                    data = data.reverse()
                }
                setDataCovid(data);
                setLoading(false);
                setError(false);
            }
            catch(e){
                setLoading(false);
                setError(true);
                
            } 
        }, 100);
       }

       fetchData();
       
    }, [])


    return (
        <>
           <table>
               <thead>
                   <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                   </tr>
               </thead>

               <tbody>
                   {error === false && loading === false && dataCovid && dataCovid.length >0 && 
                   dataCovid.map((item) => {
                       return (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                       );
                   })}

                   { loading === true
                    && <tr> 
                        <td>Loading...</td>
                        <td>Loading...</td>
                        <td>Loading...</td>
                        <td>Loading...</td>
                        <td>Loading...</td>
                      </tr>
                   }
                   { error === true
                    && <tr> 
                        Something's Wrong 
                      </tr>
                   }
                    
               </tbody>
                
                
            </table>
        </>
    )
}

export default Covid
