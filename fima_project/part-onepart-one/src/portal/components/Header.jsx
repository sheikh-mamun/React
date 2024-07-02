import React from 'react';
import Register from './../../pages/Register';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="page-wrapper">
           <header id="header">
  <div className="container-lg">
    
    <div className="header-main">
      <ul className="menu">
        <li>
          <a href="#" className="goto-demos">Demos</a>
        </li>
        <li>
          <a href="#" className="goto-features">Features</a>
        </li>
        <li>
          <a href="#" className="goto-elements">Elements</a>
        </li>
        <li>
          <a href="#" className="goto-support">Support</a>
        </li>
        
      </ul>
    </div>

    
    
    


   <div id="main">
  <section className="banner section-dark" style={{background: '#222'}}>
    <img src="assets/images/demos-img/header_splash.jpg" alt width={1920} height={1120} />
    <div className="banner-text text-center">
      <h1>Multi-Purpose eCommerce </h1>
      
      <h5 className="mb-5">Molla is simply the best choice for your new website. Your search for the best solution is over, get your own copy and join thousands of happy customers.</h5>
      <p className="mb-0"><a href="#" className="btn btn-primary btn-outline goto-demos">Explore Demos<i className="icon-long-arrow-alt-down" /></a></p>
    </div>
    <div className="header-right"> 
    <button><Link to="/register">Register</Link></button>
    </div>
    
  </section>
  <section className="section section-demos text-center container-lg">
    <h2>20 Pre-Build Demos</h2>
    <p>Comes with 20 homepages available with multi style that better for your choice.<br />Molla store is one of the best Multi-Purpose eCommerce HTML Template for your store.</p>
    <div className="demo-filter menu">
      <a href="#homepages" className="active">Home Pages</a>
      <a href="#shoppages">Shop Pages</a>
      <a href="#productpages">Product Pages</a>
      <a href="#otherpages">Other Pages</a>
      
    </div>
    <div className="row demos">
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-1.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_furniture1.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 1" />
          <h5>Furniture 1</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-2.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_furniture2.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 2" />
          <h5>Furniture 2</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-3.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_electronic1.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Electronic 1" />
          <h5>Electronic 1</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-4.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_electronic2.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Electronic 2" />
          <h5>Electronic 2</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-5.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion1.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 1" />
          <h5>Fashion 1</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-6.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion2.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 2" />
          <h5>Fashion 2</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-7.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion3.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 3" />
          <h5>Fashion 3</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-8.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fahion4.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 4" />
          <h5>Fashion 4</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-9.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion5.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 5" />
          <h5>Fashion 5</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-10.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_shoesstore.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Shoes Store" />
          <h5>Shoes Store</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-11.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_furniture_simple.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 3" />
          <h5>Furniture 3 <span>(Simple)</span></h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-12.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion_simple.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 6 (Simple)" />
          <h5>Fashion 6 <span>(Simple)</span></h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-13.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_market1.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Market" />
          <h5>Market</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-14.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_market.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Market (Full Width)" />
          <h5>Market <span>(Full Width)</span></h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-15.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_lookbook.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Lookbook 1" />
          <h5>Lookbook 1</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-16.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_lookbook2.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Lookbook 2" />
          <h5>Lookbook 2</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-17.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion7.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Fashion 7" />
          <h5>Fashion 7</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-18.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion8.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="ashion 8 (With Sidebar)" />
          <h5>Fashion 8 <span>(With Sidebar)</span></h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-19.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_gamestore.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Game Store" />
          <h5>Game Store</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-20.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_bookstore.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Book Store" />
          <h5>Book Store</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-21.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_sport.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 2" />
          <h5>Sport Store</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-22.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_tools.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 2" />
          <h5>Tools Store</h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-23.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_fashion9.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 2" />
          <h5>Fashion 9 <span>(Left Navigation)</span></h5>
        </a>
      </div>
      <div className="iso-item col-sm-6 col-md-4 col-lg-3 homepages">
        <a href="index-24.html" target="_blank">
          <img src="assets/images/demos-img/lazy.png" data-oi="assets/images/demos-img/molla_extreme_sport.jpg" width={500} height={385} className="molla-lz" style={{paddingTop: '77%'}} alt="Furniture 2" />
          <h5>Extreme Sport Store</h5>
        </a>
      </div>
    </div></section></div>

    

    


    




  </div>
</header>

        </div>
    );
};

export default Header;