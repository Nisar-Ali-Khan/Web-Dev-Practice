import { useState } from 'react'

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false)

    const toggleLike = () => setIsLiked((v) => !v)

    return (
        <div className="like-wrapper">
            <button
                type="button"
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={toggleLike}
                aria-pressed={isLiked}
            >
                <span className="heart" aria-hidden>
                    {isLiked ? '❤️' : '🤍'}
                </span>
                <span className="label">{isLiked ? 'Liked' : 'Like'}</span>
            </button>
        </div>
    )
}