import React, {useEffect, useState} from "react";
import MainSection from "../components/main/mainsection";
import IllustrationCard from "../components/illustrations/illustration-card";
import Styles from "../components/illustrations/illustrations.module.scss";

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
                            <IllustrationCard key={image.name} name={image.name} description={image.description}
                                              imageUrl={image.url}/>
                        )
                    })
                }
            </div>
        </MainSection>
    )
}