function Stats(){

    let statsDivStyle={
        width:"100%",
        height:"300px",
        
        color:"white"
        
    }
    return(
        <div style={statsDivStyle}>
            <img style={{width:"100%",height:"100%"}} src="https://wallpaperaccess.com/full/31189.jpg"></img>
           <div style={{marginTop:"-300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{width:"350px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <i class="fa-solid fa-trophy fa-4x " style={{color:"white"}}></i>
                    <h1>22</h1>
                    <p style={{marginTop:"-20px"}}>Awards</p>

                    </div>
                    <div style={{width:"350px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <i class="fa-solid fa-briefcase  fa-4x" style={{color:"white"}}></i>
                    <h1>145</h1>
                    <p style={{marginTop:"-20px"}}>Finished Projects</p>
                    </div>
                    <div style={{width:"350px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <i class="fa-solid fa-car  fa-4x" style={{color:"white"}}></i>
                    <h1>349</h1>
                    <p style={{marginTop:"-20px"}}>Project Sold</p>
                    </div>
                    <div style={{width:"350px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <i class="fa-solid fa-twitter fa-4x" style={{color:"white"}}></i>
                    <h1>2456</h1>
                    <p style={{marginTop:"-20px"}}>Twitter Fans</p>
                    </div>
            
            
            
            </div> 
        </div>
    )
}

export default Stats