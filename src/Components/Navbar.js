function Navbar(){

    let navDivStyle={
        display:"flex",
        justifyContent:"space-around",
        height:"50px",
        
    }

   
    return (
        <div style={navDivStyle}>
            <div style={{display:"flex",flexDirection:"column",height:"100%",width:"500px", marginLeft:"10px",marginTop:"-20px",alignItem:"center"}}>
                <h2 style={{height:"50px"}}>Flex Business Pro</h2>
                <span style={{marginTop:"-25px",marginLeft:"55px"}}>Clean and Modern Business Theme</span>
            </div>
            <div style={{display:"flex", justifyContent:"space-around",width:"500px",marginLeft:"200px"} }>
                <p>Home</p>
                <p>About us</p>
                <p>Style guide</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>

        </div>
    )
        
    
}

export default Navbar