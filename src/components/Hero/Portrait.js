import './index.css';
import {Image} from "@mantine/core";
import MyPic from '../../../public/portrait2.png';
import NextImage from "next/image";

export default function Portrait() {
    return (
        <div className="outer">
            <div className="dot"></div>
            <div className="structure">
                <Image src={MyPic} alt="Portrait" component={NextImage} className="card-image"/>
                <div className="shine"></div>
                <div className="ray"></div>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
            </div>
        </div>
    );
}