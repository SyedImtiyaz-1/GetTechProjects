const Footer=()=>{
  return(
<>
<footer>
        <div className="footer_container">
            <div className="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Sanitary</a>
                <a href="#">Pregnancy</a>
                <a href="#">Baby Care</a>
                <a href="#">Medicine</a>
                <a href="#">Beauty</a>
                <a href="#">Help</a>
                
            </div>

            <div className="footer_column">
                <h3>KNOW ABOUT US</h3>

                <a href="#">Careers</a>
                <a href="#">Stores</a>
                <a href="#">Send Feedback</a>
                <a href="#">Help us improve</a>
                <a href="#">Our Motto</a>

            </div>

            {/* <div className="footer_column">
                <h3></h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Our motto</a>
            </div> */}
        </div>
        <hr/>

        <div className="copyright">
            © 2023 www.she.com. All rights reserved.
        </div>
    </footer>
</>
  )
}
export default Footer