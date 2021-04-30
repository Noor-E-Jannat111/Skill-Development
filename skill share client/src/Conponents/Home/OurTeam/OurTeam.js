import React from "react";

const OurTeam = () => {
  return (
    <section class="team-section bg-light pt-3 pb-5">
      <div className="m-auto  w-75">
        <h2 class="h1-responsive font-weight-bold text-center my-5">
          Our Amazing <spna style={{ color: "#8facd6" }}>Team</spna>
        </h2>

        <p class="grey-text text-center w-responsive mx-auto w-50 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        <div class="row text-center text-md-left">
          <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between ">
            <div class="avatar mb-md-0 mb-4 mx-4  w-50">
              <img
                src="https://i.ibb.co/dBXb9FG/img4.jpg"
                class="rounded z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <div class="mx-4">
              <h4 class="font-weight-bold mb-3">John Doe</h4>
              <h6 class="font-weight-bold grey-text mb-3">Web Designer</h6>
              <p class="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>

              <a class="p-2 fa-lg fb-ic">
                <i class="fab fa-facebook-f"> </i>
              </a>

              <a class="p-2 fa-lg tw-ic">
                <i class="fab fa-twitter"> </i>
              </a>

              <a class="p-2 fa-lg dribbble-ic">
                <i class="fab fa-dribbble"> </i>
              </a>
            </div>
          </div>

          <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
            <div class="avatar mb-md-0 mb-4 mx-4">
              <img
                src="https://i.ibb.co/0MvTQks/img2.jpg"
                class="rounded w-75 z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <div class="mx-4">
              <h4 class="font-weight-bold mb-3">Maria Kate</h4>
              <h6 class="font-weight-bold grey-text mb-3">Photographer</h6>
              <p class="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>

              <a class="p-2 fa-lg fb-ic">
                <i class="fab fa-facebook-f"> </i>
              </a>

              <a class="p-2 fa-lg yt-ic">
                <i class="fab fa-youtube"> </i>
              </a>

              <a class="p-2 fa-lg ins-ic">
                <i class="fab fa-instagram"> </i>
              </a>
            </div>
          </div>
        </div>

        <div class="row text-center text-md-left">
          <div class="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
            <div class="avatar mb-md-0 mb-4 mx-4">
              <img
                src="https://i.ibb.co/zWgTq3h/img3.jpg"
                class="rounded z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <div class="mx-4">
              <h4 class="font-weight-bold mb-3">Anna Deynah</h4>
              <h6 class="font-weight-bold grey-text mb-3">Web Developer</h6>
              <p class="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>

              <a class="p-2 fa-lg fb-ic">
                <i class="fab fa-facebook-f"> </i>
              </a>

              <a class="p-2 fa-lg tw-ic">
                <i class="fab fa-twitter"> </i>
              </a>

              <a class="p-2 fa-lg git-ic">
                <i class="fab fa-github"> </i>
              </a>
            </div>
          </div>

          <div class="col-xl-6 col-lg-12 d-md-flex justify-content-between">
            <div class="avatar mb-md-0 mb-4 mx-4">
              <img
                src="https://i.ibb.co/fHf273t/img1.jpg"
                class="rounded w-75 z-depth-1 img-fluid"
                alt="Sample avatar"
              />
            </div>
            <div class="mx-4">
              <h4 class="font-weight-bold mb-3">Sarah Melyah</h4>
              <h6 class="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6>
              <p class="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>

              <a class="p-2 fa-lg gplus-ic">
                <i class="fab fa-google-plus-g"> </i>
              </a>

              <a class="p-2 fa-lg li-ic">
                <i class="fab fa-linkedin-in"> </i>
              </a>

              <a class="p-2 fa-lg email-ic">
                <i class="fas fa-envelope"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
