function Features(){
    let featureStyle={
        width:"100%",
        height:"450px",
        
    }
    return (
            <div style={featureStyle}>
                <h2>Our Features</h2>
                <div style={{display:"flex",justifyContent:"space-around",paddingTop:"20px"}}>
                    <div style={{width:"350px",height:"300px"}}>
                    <i class="fa-solid fa-desktop " style={{color:"white",background:"#28adeb",padding:"20px",borderRadius:"50%"}}></i>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <span style={{color:"skyblue"}}>Read More</span>
                    </div>
                    <div style={{width:"350px",height:"300px"}}>
                    <i class="fa-solid fa-user" style={{color:"white",background:"#28adeb",padding:"20px",borderRadius:"50%"}}></i>
                    <h4>Trusted Author</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <span style={{color:"skyblue"}}>Read More</span>

                    </div>
                    <div style={{width:"350px",height:"300px"}}>
                    <i class="fa-solid fa-recycle " style={{color:"white",background:"#28adeb",padding:"20px",borderRadius:"50%"}}></i>
                    <h4>Reusable Elements</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <span style={{color:"#28adeb"}}>Read More</span>

                    </div>
                </div>
               
            </div>
    )
}

export default Features