import React, { FC, useState, useEffect } from "react";

interface HomeProms {
    name?:string
}




const Greeting: FC<HomeProms> = ({name}:HomeProms) => {
    const [message, setMessage]=useState("");

    useEffect(()=>{
        if (name){
            setMessage(`Witaj, ${name}`);
        }
        },[name])
        if (!name){
            return <div> nie podano imienia</div>
        }
return <div>
    {message}
</div>
        }
    

export default Greeting;