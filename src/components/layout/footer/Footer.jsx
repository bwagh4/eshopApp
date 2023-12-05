import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className='bg-[url("https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI")] bg-no-repeat bg-cover h-40 blur-[2px] bg-center'></div>
      <div className="xs:hidden sm:hidden md:hidden lg:flex justify-between px-20">
        <div className="text-1.8rem w-1/3">
          <h6 className="text-2.4rem my-10">ABOUT US</h6>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
          <ul className="flex justify-start gap-6 mb-10">
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
        </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">ABOUT US</h6>
          <ul className="leading-loose">
            <li><a href="">About</a></li>
            <li><a href="">Delivery information</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sales</a></li>
            <li> <a href="">Terms & Conditions </a></li>
            <li><a href="">EMI Payment</a></li>
          </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">ACCOUNT</h6>
          <ul className="leading-loose">
            <li><a href="">My Account</a></li>
            <li><a href="">My Orders </a></li>
            <li><a href="">Returns </a></li>
            <li><a href="">Shipping</a></li>
            <li><a href="">Wishlist </a></li>
            <li> <a href="">Account Details </a></li>
          </ul>
        </div>
        <div  className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">STORE</h6>
          <ul className="leading-loose">
            <li> <a href="">Affiliate </a></li>
            <li><a href="">Discounts </a></li>
            <li><a href="">Sale </a></li>
            <li> <a href="">Contact</a></li>
            <li> <a href="">All Collections </a></li>
          </ul>
        </div>
        <div  className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">CONTACT US</h6>
          <ul className="leading-loose">
          <li>If you have any query, please contact us <a href="" className="text-red">
needus24@gmail.com </a></li>
            <li><i className="w-10 h-10 rounded-md bg-text-dark inline-block align-middle"></i> <a href="">California, USA </a></li>
            <li><i className="w-10 h-10 rounded-md bg-text-dark inline-block align-middle"></i> <a href="">	+12012987481 </a></li>
          
          </ul>
        </div>
      </div>
      <div className="mx-20 p-20 border-t border-gray xs:hidden sm:hidden md:hidden lg:flex-col text-center">
        <ul className="flex justify-center gap-4 mb-10">
            <li className="w-20 h-12 rounded-md bg-text-dark"></li>
            <li className="w-20 h-12 rounded-md bg-text-dark"></li>
            <li className="w-20 h-12 rounded-md bg-text-dark"></li>
            <li className="w-20 h-12 rounded-md bg-text-dark"></li>
            <li className="w-20 h-12 rounded-md bg-text-dark"></li>
        </ul>
        <p className="text-1.5rem">© Copyright.2022.All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
