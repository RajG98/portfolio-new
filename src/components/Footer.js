import React from 'react'

export const Footer = () => {
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rajarshig007">
                <img class="main-footer__icon" src="/images/linkedin-ico.png" alt="icon"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/RajG98">
                <img class="main-footer__icon" src="/images/github-ico.png" alt="icon"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/Lucifer_RajG98">
                <img class="main-footer__icon" src="/images/twitter-ico.png" alt="icon"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rajg.98">
                <img class="main-footer__icon main-footer__icon--mr-none" src="/images/insta-ico.png" alt="icon"/>
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Rajarshi Goswami</h4>
            <p class="main-footer__short-desc">
              Rajarshi Goswami is a software developer from Kolkata, India. He currently works for TCS in Kolkata, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
