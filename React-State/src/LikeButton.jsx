import {useState} from 'react'

export default function LikeButton() {
    const [likes, setLikes] = useState(false);

    let toggleLike = () => {
        let newVal = !isLiked;
        setIsLiked(!isLiked);
    }

    let clicked = () => {
        console.log("clicked");
        setLikes(!likes);
    };


    return (
        <div>
            <p onClick={toggleLike}>Like
                {isLiked ? (
                 <i class="fa-solid fa-heart" > </i>
                ) : (
                 <i class="fa-regular fa-heart" ></i>)}
            </p>
        </div>
    );
}