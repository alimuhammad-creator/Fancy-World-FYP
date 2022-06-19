import "./mainhome.css";
import Maintopbar from "../../components/maintopbar/Maintopbar";


export default function Mainhome () {
 

  return (
    <>
    <Maintopbar/>
    <div className="mainhome">

     <span className="maintitle">SULTANABAD FANCY FARM</span>
     <span className="slogan">Bringing Growth, Ingenuity, and Experience to Market</span>
         <img className="mainphoto" src="/assets/mainphoto.jpg" alt="" />
         <p className="firstpara">We started our journey as ordinary farmers and with time we realized that our market 
          needs quality over quantity. Sultanabad Fancy Farm’s mission is to bring quality to the Fancy 
          farming Business. The purity of every breed at our farm is our first priority and customer satisfaction 
          matters greatly. </p>
         <img className="homelogo" src="/assets/homelogo.jpg" alt="" />
         <h1 className="titleone">Fancy Breeds at Our Farm</h1>
         <img className="breed1" src="/assets/breed1.jpg" alt="" />
         <img className="breed2" src="/assets/breed2.jpg" alt="" />
         <img className="breed3" src="/assets/breed3.jpg" alt="" />
         <img className="breed4" src="/assets/breed4.jpg" alt="" />
         <img className="breed5" src="/assets/breed5.jpg" alt="" />
         <img className="breed6" src="/assets/breed6.jpg" alt="" />
         
         <img className="footer" src="/assets/footter.jpg" alt="" />
         <div className="footerback"> </div>

         {/* <span className="contactus">Contact Info</span>
         </div>
         <img className="phoneicon" src="/assets/phoneicon.png" alt="" />
         <span className="footerphone">Phone</span>
         <span className="footernum">03360120098</span>
         <img className="emailicon" src="/assets/emailicon.png" alt="" />
         <span className="footerem">Email</span>
         <span className="footeremail">contact@ssf.com</span>
         <img className="addressicon" src="/assets/addressicon.png" alt="" />
         <span className="footeraddress">Address</span>
         <span className="footeraddre">Sultanabad Village Near MirpurKhas Sindh Pakistan</span> */}
         
         
         
    </div>
    </>
  );
}
