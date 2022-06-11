import React, {useEffect, useState} from "react";
import MainSection from "../components/main/mainsection";
import IllustrationCard from "../components/illustrations/illustration-card";
import Styles from "../components/illustrations/illustrations.module.scss";

/*
description: "American Gothic"
id: "18uni2kmF_9I2DKVnCX6R7kSHX6bcsOIX"
name: "American_Gothic.PNG"
thumbnailLink: "https://lh4.googleusercontent.com/I5oY4PfT2wYWipGYilO5uCKOzKEhzzOJsH5y44xxGKJ8alxuUF2VD9VB6FoX7DtUBGXoEslraP5Vfu0=s220"
url: "https://lh4.googleusercontent.com/I5oY4PfT2wYWipGYilO5uCKOzKEhzzOJsH5y44xxGKJ8alxuUF2VD9VB6FoX7DtUBGXoEslraP5Vfu0"
 */
interface ImageObj {
    description: string,
    id: string,
    name: string,
    thumbnailLink: string,
    url: string
}

export default function Illustrations() {

    const [images, setImages] = useState<ImageObj[]>([])

    useEffect(() => {
        fetch("api/listPhotos")
            .then((res) => {
                res.json().then(
                    (data) => {
                        console.log({data})
                        setImages(data)
                    }
                )
            })
    }, [])

    return (
        <MainSection title={"Illustrations"}>
            <div className={Styles.illustrationContainer}>
                {
                    images.map((image: ImageObj) => {
                        return (
                            <React.Fragment>
                                <IllustrationCard name={image.name} description={image.description} imageUrl={image.url}/>
                                <IllustrationCard name={image.name} description={image.description} imageUrl={image.url}/>
                            </React.Fragment>

                        )
                    })
                }
            </div>
        </MainSection>
    )
}