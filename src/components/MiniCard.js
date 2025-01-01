import '../styles/main.css'
import {Image} from "@mantine/core";

export default function MiniCard({icon, title}) {
    return (
        <div className='miniCard'>
            <div className='icon-container' >
                <Image src={icon} alt='logo'/>
            </div>
            <div className="text-container">
                <p>{title}</p>
            </div>
        </div>
    );
}