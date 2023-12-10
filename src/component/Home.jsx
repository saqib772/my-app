import React from 'react';
import '../styles/Home.css';
import img from '../images/astro.png';
import l1_webp from '../images/l1.webp';
import mincss from '../assets/css/bootstrap.min.css';
import fronaws from '../assets/css/font-awesome.css';
import hexa from "../assets/css/templatemo-hexashop.css";
import light from "../assets/css/lightbox.css";
import owl from '../assets/css/owl-carousel.css';
import a1_web from '../images/a1.webp';
import a2_web from '../images/a2.webp';
import a3_web from '../images/a3.webp';
import a4 from '../images/a4.gif';
import alien_life from '../images/alien-life.jpg';
import astro from '../images/astro.png';
import astronaut from '../images/astronaut.jpg';
import bgAbout from '../images/bg-about.jpg';
import bgHome from '../images/bg-home.jpg';
import bgtrans from '../images/bg-transparent1.png';
import curios from '../images/curious-rover.jpg';
import eart from '../images/earth-satellite.jpg';
import latestnew from '../images/latest news.jpg';
import marsRover from '../images/mars-rover.jpg';
import martian from '../images/martianrover-journey.jpg';
import n2 from '../images/n2.webp';
import n3 from '../images/n3.webp';
import n4 from '../images/n4.webp';
import s1 from '../images/s1.webp';
import s2 from '../images/s2.webp';
import s3 from '../images/s3.webp';
import s4 from '../images/s4.webp';
import u1 from '../images/u1.webp';
import u2 from '../images/u2.webp';
import u3 from '../images/u3.webp';
import u4 from '../images/u4.webp';
import user from '../images/user.jpg'
import satellite from '../images/satellite-dish.jpg';
import ads from '../images/ads-728x90.png'





const Home = () => {
  <header>
    <link rel="stylesheet" type="text/css" href={mincss} />

    <link rel="stylesheet" type="text/css" href={fronaws} />

    <link rel="stylesheet" href= {hexa}/>

    <link rel="stylesheet" href={owl}/>

    <link rel="stylesheet" href= {light}/>
    <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
  </header>

  return (

    <div className="home">
      
      <section class="hero">
        <div class="cta container">
          <div class="left-section">
            <h1 style={{ color: "black",marginTop:"50px",paddingTop:'20px',textAlign:'center' }}>The cosmos is within us. We are made of star-stuff. </h1>
            <button class="btn btn-primary" style={{marginTop:'40px'}}>Explore Space</button>
          </div>
          {/* <div class="right-section">
            <img src={img} alt="astronaut" />
          </div> */}
        </div>
      </section>

      <section class="strip">
        <div class="join">
          <h2 style={{ textAlign: "center",marginTop:'20px' }}>Journey beyond Space</h2>
        </div>

      </section>


      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7 px-0">
            <div class="owl-carousel main-carousel position-relative">
              <div class="position-relative overflow-hidden" style={{ height: "500px" }}>
                <img class="img-fluid h-100" src={l1_webp} style={{ objectFit: "cover" }} />
                <div class="overlay">
                  <div class="mb-2">
                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="">Astronomy</a>
                    <a class="text-white" href="">OCT 25, 2023</a>
                  </div>
                  <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">'Lightning on Venus
                    may not be
                    lightning at all, Parker Solar Probe finds
                    While studying the sun for first Time</a>
                </div>
              </div>
              <div class="position-relative overflow-hidden" style={{ height: "500px" }}>
                <img class="img-fluid h-100" src={n4} style={{ objectFit: "cover" }} />
                <div class="overlay">
                  <div class="mb-2">
                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="">SpaceFlight</a>
                    <a class="text-white" href="">OCT 01, 2023</a>
                  </div>
                  <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">Possible hints of life
                    found
                    on distant planet – how excited should we be?</a>
                </div>
              </div>
              <div class="position-relative overflow-hidden" style={{ height: "500px;" }}>
                <img class="img-fluid h-100" src={s1} style={{ objectFit: "cover" }} />
                <div class="overlay">
                  <div class="mb-2">
                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="">Solar System</a>
                    <a class="text-white" href="">OCT 26, 2023</a>
                  </div>
                  <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">Space X Raptor Engine
                    ReInitiated</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 px-0">
            <div class="row mx-0">
              <div class="col-md-6 px-0">
                <div class="position-relative overflow-hidden" style={{ height: "250px;" }}>
                  <img class="img-fluid w-100 h-100" src={s1} style={{ objectFit: "cover" }} />
                  <div class="overlay">
                    <div class="mb-2">
                      <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Astronomy</a>
                      <a class="text-white" href=""><small>OCT 01, 2023</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Space X Raptor
                      Engine
                      ReInitiated</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 px-0">
                <div class="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img class="img-fluid w-100 h-100" src={u3} style={{ objectFit: "cover" }} />
                  <div class="overlay">
                    <div class="mb-2">
                      <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Solar System</a>
                      <a class="text-white" href=""><small>OCT 22, 2023</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Our Star
                      system moving towards star vega at light speed</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 px-0">
                <div class="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img class="img-fluid w-100 h-100" src={s2} style={{ objectFit: "cover" }} />
                  <div class="overlay">
                    <div class="mb-2">
                      <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">SpaceFlight</a>
                      <a class="text-white" href=""><small>OCT 20, 2023</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Artemis 2
                      Mission Going on Moon by 2028</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 px-0">
                <div class="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img class="img-fluid w-100 h-100" src={u1} style={{ objectFit: "cover" }} />
                  <div class="overlay">
                    <div class="mb-2">
                      <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Astronomy</a>
                      <a class="text-white" href=""><small>OCT 22, 2023</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Conjuction of
                      Mars and Jupiter can be seen from North pole.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-dark py-3 mb-3">
        <div class="container">
          <div class="row align-items-center bg-dark">
            <div class="col-12">
              <div class="d-flex justify-content-between">
                <div class="bg-primary text-dark text-center font-weight-medium py-2" style={{ width: "170px" }}>
                  Breaking News</div>
                <div class="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                  style={{ width: "calc(100% - 170px)", paddingRight: "90px" }}>
                  <div class="text-truncate"><a class="text-white text-uppercase font-weight-semi-bold"
                    href="">Conjuction of Mars and Jupiter can be seen from North pole, Space X Starship
                    To Be Launch in 2025</a></div>
                  <div class="text-truncate"><a class="text-white text-uppercase font-weight-semi-bold"
                    href="">Artemis 2 Mission Going on Moon by 2028, Solar System Moving Towards star
                    vega</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5 mb-3" style={{ backgroundColor: "gray" }}>
        <div class="container">
          <div class="section-title">
            <h4 class="m-0 text-uppercase font-weight-bold">Featured News</h4>
          </div>
          <div class="owl-carousel news-carousel carousel-item-4 position-relative">
            <div class="position-relative overflow-hidden" style={{ height: "300px" }}>
              <img class="img-fluid h-100" src={curios} style={{ objectFit: "cover" }} />
              <div class="overlay">
                <div class="mb-2">
                  <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Technology</a>
                  <a class="text-white" href=""><small>OCT 23, 2023</small></a>
                </div>
                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Robotics in Space
                  Race, How much they will be useful?</a>
              </div>
            </div>
            <div class="position-relative overflow-hidden" style={{ height: "300px" }}>
              <img class="img-fluid h-100" src={satellite} style={{ objectFit: "cover" }} />
              <div class="overlay">
                <div class="mb-2">
                  <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Astronomy</a>
                  <a class="text-white" href=""><small>OCT 01, 2023</small></a>
                </div>
                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">How a Soviet
                  mathematician
                  quietly solved the mystery of planet formation.</a>
              </div>
            </div>
            <div class="position-relative overflow-hidden" style={{ height: "300px" }}>
              <img class="img-fluid h-100" src={a2_web} style={{ objectFit: "cover" }} />
              <div class="overlay">
                <div class="mb-2">
                  <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">NASA</a>
                  <a class="text-white" href=""><small>OCT 23, 2023</small></a>
                </div>
                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">NASA extends New
                  Horizons
                  mission through late 2020s</a>
              </div>
            </div>
            <div class="position-relative overflow-hidden" style={{ height: "300px" }}>
              <img class="img-fluid h-100" src={a3_web} style={{ objectFit: "cover" }} />
              <div class="overlay">
                <div class="mb-2">
                  <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Planets</a>
                  <a class="text-white" href=""><small>OCT 23, 2045</small></a>
                </div>
                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Microphones in space:
                  Why
                  scientists want to listen in on alien worlds</a>
              </div>
            </div>
            <div class="position-relative overflow-hidden" style={{ height: "300px" }}>
              <img class="img-fluid h-100" src={a4} style={{ objectFit: "cover" }} />
              <div class="overlay">
                <div class="mb-2">
                  <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Comets</a>
                  <a class="text-white" href=""><small>OCT 22, 2023</small></a>
                </div>
                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Green comet
                  Nishimura's
                  tail</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style={{ backgroundColor: "gray" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-12">
                  <div class="section-title">
                    <h4 class="m-0 text-uppercase font-weight-bold">Latest News</h4>
                    <a class="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <img class="img-fluid w-100" src={a4} style={{ objectFit: "cover" }} width="400px" />
                    <div class="bg-white border border-top-0 p-4">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="">Comets</a>
                        <a class="text-body" href=""><small>OCT 22, 2023</small></a>
                      </div>
                      <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href="">Green comet Nishimura's
                        tail</a>
                      <p class="m-0">Green comet Nishimura's tail in Russia, Making the Night Sky brighter
                        at 1 AM.</p>
                    </div>
                    <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div class="d-flex align-items-center">
                        <img class="rounded-circle mr-2" src={user} width="25" height="25"
                          alt="" />
                        <small>Saqib</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <small class="ml-3"><i class="far fa-eye mr-2"></i>5400</small>
                        <small class="ml-3"><i class="far fa-comment mr-2"></i>2000</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <img class="img-fluid w-100" src={s3} style={{ objectFit: "cover" }} width="400px" />
                    <div class="bg-white border border-top-0 p-4">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="">Space Flights</a>
                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                      </div>
                      <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href="">German A4 Rocket</a>
                      <p class="m-0">Oct. 3, 1942: 1st successful
                        test launch of the German A4 rocket (AKA the V-2)</p>
                    </div>
                    <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div class="d-flex align-items-center">
                        <img class="rounded-circle mr-2" src={user} width="25" height="25"
                          alt="" />
                        <small>Ahmad</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <small class="ml-3"><i class="far fa-eye mr-2"></i>2345</small>
                        <small class="ml-3"><i class="far fa-comment mr-2"></i>223</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mb-3">
                  <a href=""><img class="img-fluid w-100" src={ads} alt="" /> </a>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <img class="img-fluid w-100" src={u2} style={{ objectFit: "cover" }} width="400px" />
                    <div class="bg-white border border-top-0 p-4">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="">Solar System</a>
                        <a class="text-body" href=""><small>OCt 21, 2023</small></a>
                      </div>
                      <a class="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold"
                        href="">Milky way Merging into Andromeda Galaxy</a>
                    </div>
                    <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div class="d-flex align-items-center">
                        <img class="rounded-circle mr-2" src={user} width="25" height="25"
                          alt="" />
                        <small>ALI</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                        <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <img class="img-fluid w-100" src={a1_web} style={{ objectFit: "cover" }} width="400px" />
                    <div class="bg-white border border-top-0 p-4">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="">Missions</a>
                        <a class="text-body" href=""><small>OCT 21, 2023</small></a>
                      </div>
                      <a class="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold"
                        href="">Dart Missions Successfuly Hit the Andromeda Galaxy</a>
                    </div>
                    <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div class="d-flex align-items-center">
                        <img class="rounded-circle mr-2" src={user} width="25" height="25"
                          alt="" />
                        <small>Hammad</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <small class="ml-3"><i class="far fa-eye mr-2"></i>2345</small>
                        <small class="ml-3"><i class="far fa-comment mr-2"></i>923</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={a3_web} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Astronomy</a>
                        <a class="text-body" href=""><small>OCT 23, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Mars
                        Mission By 2026 and then Into Deep Space</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={n4} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Planets</a>
                        <a class="text-body" href=""><small>OCT 23, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Will Aliens
                        Exist in Our Universe, If so then can we find them.</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={u4} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Planet</a>
                        <a class="text-body" href=""><small>OCT 23, 2045</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Nasa Found
                        Water and Bacterial Life on Mars</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={s1} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Planet</a>
                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Voyager 1
                        Close to Interplanetry Planets!</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mb-3">
                  <a href=""><img class="img-fluid w-100" src={ads} alt="" /> </a>
                </div>
                <div class="col-lg-12">
                  <div class="row news-lg mx-0 mb-3">
                    <div class="col-md-6 h-100 px-0">
                      <img class="img-fluid h-100" src={s4} style={{ objectFit: "cover" }}
                        width="400px" />
                    </div>
                    <div class="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                      <div class="mt-auto p-4">
                        <div class="mb-2">
                          <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Earth</a>
                          <a class="text-body" href=""><small>OCT 23, 2023</small></a>
                        </div>
                        <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                          href="">Astronaut Sets New Record for First Time</a>
                        <p class="m-0">Private astronaut sets HALO
                          skydiving record while Diving from 10,000 M From Plane</p>
                      </div>
                      <div class="d-flex justify-content-between bg-white border-top mt-auto p-4">
                        <div class="d-flex align-items-center">
                          <img class="rounded-circle mr-2" src={user} width="25" height="25"
                            alt="" />
                          <small>Saqib</small>
                        </div>
                        <div class="d-flex align-items-center">
                          <small class="ml-3"><i class="far fa-eye mr-2"></i>2345</small>
                          <small class="ml-3"><i class="far fa-comment mr-2"></i>523</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={n3} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Technology</a>
                        <a class="text-body" href=""><small>OCT 22, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Will AI
                        Ever Surpass The Human Intelligence</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={u2} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Planet</a>
                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Will Humans
                        Land on Mars?</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={a2_web} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Planet</a>
                        <a class="text-body" href=""><small>OCT 01, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Nasa Plans
                        to Send Mission On Jupiter Moon</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={n2} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Technology</a>
                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Can ISRO
                        Compete With NASA in terms of Rockets Technology. </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">

              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                </div>
                <div class="bg-white border border-top-0 p-3">
                  <a href="" class="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#39569E" }}>
                    <i class="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Fans</span>
                  </a>
                  <a href="" class="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#52AAF4" }}>
                    <i class="fab fa-twitter text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Followers</span>
                  </a>
                  <a href="" class="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#0185AE" }}>
                    <i class="fab fa-linkedin-in text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Connects</span>
                  </a>
                  <a href="" class="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#C8359D" }}>
                    <i class="fab fa-instagram text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Followers</span>
                  </a>
                  <a href="" class="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#DC472E" }}>
                    <i class="fab fa-youtube text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Subscribers</span>
                  </a>
                  <a href="" class="d-block w-100 text-white text-decoration-none"
                    style={{ background: "#055570" }}>
                    <i class="fab fa-vimeo-v text-center py-4 mr-3"
                      style={{ width: "65px", background: "rgba(0, 0, 0, 0.2)" }}></i>
                    <span class="font-weight-medium">12,345 Followers</span>
                  </a>
                </div>
              </div>

              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                </div>
                <div class="bg-white text-center border border-top-0 p-3">
                  <a href=""><img class="img-fluid" src={s3} alt="" width="100px" /> </a>
                </div>
              </div>

              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Trending News</h4>
                </div>
                <div class="bg-white border border-top-0 p-3">
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={s2} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Technology</a>
                        <a class="text-body" href=""><small>OCT 21, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">NVIDIA
                        Planning to Launch It's Own Space Company</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={s1} alt="" width="80px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Technology</a>
                        <a class="text-body" href=""><small>OCT 26, 2022</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Nasa
                        Partnerships with ISRO for Robust Rockets Launch</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={a1_web} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Earth</a>
                        <a class="text-body" href=""><small>OCT 22, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Is There
                        Any Signs of Portals on Earth fo Time Travel?</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={u4} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Earth</a>
                        <a class="text-body" href=""><small>OCT 19, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">What's The
                        Mystery of Amazon Triangle?</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                    <img class="img-fluid" src={latestnew} alt="" width="100px" />
                    <div
                      class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="">Politics</a>
                        <a class="text-body" href=""><small>OCT 22, 2023</small></a>
                      </div>
                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Congress
                        Disapproves $100B Budget for NASA</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                </div>
                <div class="bg-white text-center border border-top-0 p-3">
                  <p>Subscribe to Our New Letter for More Information Related to Science</p>
                  <div class="input-group mb-2" style={{ width: "100%" }}>
                    <input type="text" class="form-control form-control-lg" placeholder="Your Email" />
                    <div class="input-group-append">
                      <button class="btn btn-primary font-weight-bold px-3">Sign Up</button>
                    </div>
                  </div>
                  <small>Your Personal News Letter</small>
                </div>
              </div>

              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
                </div>
                <div class="bg-white border border-top-0 p-3">
                  <div class="d-flex flex-wrap m-n1">
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Politics</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Health</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Education</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Science</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Foods</a>
                    <a href="" class="btn btn-sm btn-outline-secondary m-1">Travel</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <a href="#" class="btn btn-primary btn-square back-to-top"><i class="fa fa-arrow-up"></i></a>



      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    </div>
  );
};

export default Home;
