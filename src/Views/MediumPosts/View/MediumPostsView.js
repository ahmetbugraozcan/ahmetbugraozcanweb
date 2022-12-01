import React, { useEffect } from 'react'
import { getUserPosts } from '../../../Service/Medium/MediumService'
export default function MediumPostsView() {
    useEffect(() => {
        getUserPosts()

    }, [])
    return (
        <div className='medium-posts-container'>
            <h1 className="medium-posts-title">Medium Posts</h1>
        </div>
    )
}
