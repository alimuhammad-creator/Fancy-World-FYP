import "./about.css";
import Maintopbar from "../../components/maintopbar/Maintopbar";


export default function About () {
 

  return (
    <>
    <Maintopbar/>
    <div className="about">
       <div>
       <span className="abouttitle">About FANCY WORLD</span>
      {/* <p  className="paraabout">FANCY WORLD is a marketplace that is unique and dedicated to Fancy Farming Business. 
        Our goal is to create a platform where Importers, Exporters, Local buyers and sellers 
        of fancy breeds can connect with each other and directly make purchases avoiding any 
        third-party commissions. This will bring quality and fair competition to this business. 
        We believe this business has huge potential and in near future, it will contribute a lot 
        to the economic development of the country.</p> */}
        {/* <img className="aboutmainphoto" src="/assets/aboutmainphoto.jpg" alt="" /> */}
       </div>
      
        <div> 
        <p  className="paraabout">FANCY WORLD is a marketplace that is unique and dedicated to Fancy Farming Business. 
        Our goal is to create a platform where Importers, Exporters, Local buyers and sellers 
        of fancy breeds can connect with each other and directly make purchases avoiding any 
        third-party commissions. This will bring quality and fair competition to this business. 
        We believe this business has huge potential and in near future, it will contribute a lot 
        to the economic development of the country.</p>
        <img className="aboutmainphoto" src="/assets/aboutmainphoto.jpg" alt="" />
          <span className="ourteamtitle">Meet Our Team</span> 
          
          <div className="teamdiv">
          <img className="sirabout" src="/assets/sirirfanabout.jpeg" alt="" />
          <img className="sirabout" src="/assets/sakshiabout.jpeg" alt="" />
          <img className="sirabout" src="/assets/ali.jpeg" alt="" />
          </div>
          <div className="taemname"> 
          <span className="teamirfan">
            Dr. Irfan Khan Tanoli
          </span>
          <span className="teamsakshi">
            Sakshi Budhani
          </span>
          <span className="teamali">
            Ali Muhammad Khowaja
          </span>
          </div>

          <div className="taemdesc"> 
          <span className="irfandesc">
            Project Supervisor
          </span>
          <span className="sakshidesc">
            Designer and Developer
          </span>
          <span className="alidesc">
            Designer and Developer
          </span>
          <img className="footer" src="/assets/footter.jpg" alt="" />
         <div className="footerback"> </div>
          </div>
          
          
          
        </div>
        
        
        
      
    </div>
    </>
  );
}
