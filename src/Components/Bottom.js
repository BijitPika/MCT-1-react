function Bottom(){
    let bottomDivStyle={
        width:"100%",
        height:"350px",
        
        display:"flex",
        justifyContent:"space around",
        color:"white",
        background:"black"
    }
    return(
        
        <div style={bottomDivStyle}>
            <div style={{display:"flex",flexDirection:"column",width:"220px",height:"100%",alignItems:"center"}}>
                <h5>ABOUT FLEX BUSINESS PRO</h5>
                <p style={{width:"200px",textAlign:"left",marginLeft:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat quam veniam voluptas ipsum porro eum quidem molestiae provident? Culpa ipsam pariatur aperiam temporibus esse. Possimus dolorem aut quae quibusdam.
                </p>
                
                
            </div>
            <div style={{display:"flex",flexDirection:"column",width:"220px",height:"100%",alignItems:"center",marginLeft:"90px"}}>
                <h5>RECENT POSTS</h5>
                <p style={{width:"200px",textAlign:"left",marginLeft:"105px",lineHeight:"50px"}}>Lorem ipsum dolor sit amet. Possimus dolorem aut quae quibusdam aut quae quibusdam.
                </p>
                
                
            </div>
            <div style={{width:"300px",height:"300px",marginLeft:"300px"}}>
                <h5 style={{textAlign:"left"}}>GALLERY</h5>
                <div style={{width:"90%",height:"70%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",marginLeft:"-5px"}}>
                    <img style={{width:"80px",height:"80px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    <img style={{width:"80px",height:"80px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    <img style={{width:"80px",height:"80px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    <img style={{width:"80px",height:"80px",marginTop:"-40px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    <img style={{width:"80px",height:"80px",marginTop:"-40px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    <img style={{width:"80px",height:"80px",marginTop:"-40px"}} src="https://www.pixelstalk.net/wp-content/uploads/images5/MacBook-Aesthetic-Wallpaper-for-Desktop.jpg"></img>
                    
                </div>


            </div>





        </div>
    )
}

export default Bottom