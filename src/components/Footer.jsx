export default function Footer() {
  return (
    <footer className="bg-Very-Dark-Violet pt-16">
      <div className="md:mx-auto md:w-11/12 md:max-w-[1110px]">
        <div className="md:flex md:items-start md:justify-between md:text-start">
          <img
            src="/images/logo-white.svg"
            alt=""
            className="mx-auto mb-4 h-[33px] md:mx-0"
          />

          <div className="my-4 flex flex-col md:my-0">
            <h4 className="my-4 font-bold text-white md:mt-0">Features</h4>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Link Shortening
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Branded Links
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Analytics
            </a>
          </div>

          <div className="my-4 flex flex-col md:my-0">
            <h4 className="my-4 font-bold text-white md:mt-0">Resources</h4>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Blog
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Developers
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Support
            </a>
          </div>

          <div className="my-4 flex flex-col md:my-0">
            <h4 className="my-4 font-bold text-white md:mt-0">Company</h4>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              About
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Our Team
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Careers
            </a>
            <a href="#" className="my-2 text-base text-Gray hover:text-Cyan">
              Contact
            </a>
          </div>

          <div className="icons mt-12 flex justify-center gap-4 *:cursor-pointer md:mt-0">
            <img src="/images/icon-facebook.svg" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
            <img src="/images/icon-pinterest.svg" alt="" />
            <img src="/images/icon-instagram.svg" alt="" />
          </div>
        </div>

        <div className="attribution text-Gray md:mt-6">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/ajkun55/URL-shortening-API-landing-page">John A</a>.
        </div>
      </div>
    </footer>
  );
}
