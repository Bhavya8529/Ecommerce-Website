import React from 'react';
import './style.css';


const Grid = props =>{
    return(
        <div>
        <div class="container">
           <div class="pic1"><img className="myimg" src="https://images.unsplash.com/photo-1474585628895-4579822e21a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" height="950px" width="690px" /></div>
           <span className="collection">"Our<br/> Collection"</span>
           <div class="pic2"><img className="myimg2" src="https://images.unsplash.com/photo-1511253819057-5408d4d70465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="pic2" height="450px" width="710px"  />
           <span className="design">"New Arrivals"</span>
           </div>
           
           <div class="pic3"><img className="myimg1" src="https://images.unsplash.com/photo-1475179593777-bd12fd56b85d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" alt="pic3" height="450px" width="710px" />
           <span className="design2">"Design Your Dream Product"</span>
           </div>
    
        </div>
        <div className="igift">
            <img src="https://images6.alphacoders.com/406/406888.jpg" alt="gift" width="1519px" height="400px"/>
            <span className="itext">We Care For Your Loved Ones</span>
            <button className="gift">Gift Your Loved Ones</button>
        </div>
        <div class="about">
             
            <h1>Our Vision</h1>
            
            <p>
                "Good things come in small packages<br/> especially when it's JEWELRY"
            </p>
            
            <button className="btn">
                Know More
            </button>
            
        </div>
        <div className="signup">
            <h2>Sign Up to be an Insider</h2>
            <input className="inp" type="text" placeholder="E-mail address"/>
            <button className="sbtn">Submit</button>
            
        </div>
        </div>
    );
}
export default Grid;