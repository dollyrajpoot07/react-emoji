import "./styles.css";
import axios from 'axios';
import { URL_SEND_SELECTION, URL_GET_EMOJIS } from '../../urls';
import { useEffect, useState } from "react";

export const EmojiList = () => {

    const [emojis, setEmojis] = useState([]);

    useEffect(()=> {
        axios.get(URL_GET_EMOJIS).then(function(response){
            console.log(response.data);
            setEmojis(response.data.data);
        }).catch(function(er){
            console.log(er);
        });
    }, []);


    return (
        <div className={'emojis'}>
            {
                emojis.map( (emoji, index) => {
                    return <Emoji key={`${index}`} {...emoji} />
                })
            }
        </div>
    )
}

function sendSelection({ emoji, text }){
    axios.post(URL_SEND_SELECTION, {
        emoji,
        text
    }).then(function(response) {
        console.log(response);
        
    }).catch(function(err){
        console.log(err);
    });
}

const Emoji = ({ emoji, text }) => {
    return(
        <div className={'emoji'} onClick={() => sendSelection({ emoji, text })}>
            <span className={'emoji-icon'}>
                {emoji}
            </span>
            
            <span className={'emoji-txt'}>
                {text}
            </span>
        </div>
    )
}