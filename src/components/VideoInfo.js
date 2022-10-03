function VideoInfo({videoInfo, changeVotes}) {
    return (
        <div className = "video-info">
            <h1>{videoInfo.title}</h1>
            <p>{videoInfo.views} Views | Uploaded {videoInfo.createdAt}</p>
            <div>
                <button onClick = {() => changeVotes(true)}>{videoInfo.upvotes} 👍</button>
                <button onClick = {() => changeVotes(false)}>{videoInfo.downvotes} 👎</button>
            </div>
        </div>
    )
}

export default VideoInfo