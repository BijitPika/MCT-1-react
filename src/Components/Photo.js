function Photo(){
    let photoDivStyle={
        height:"450px",
        width:"100%",
        
        color:"white"
    }
    return(
        <div style={photoDivStyle}>
            <img style={{width:"100%",height:"100%"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
            <div style={{marginTop:"-350px"}} >
                <h1>Your Awesome Business Theme</h1>
                <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat quam veniam voluptas <br></br> ipsum porro eum quidem molestiae provident.
    
                </p>
                <button style={{height:"40px",width:"100px",borderRadius:"200px",background:"#28adeb",border:"none",boxShadow:"0 0  2px white"}}>Read More</button>
            </div>

        </div>
    )
}

export default Photo