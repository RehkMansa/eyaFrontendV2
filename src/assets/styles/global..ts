import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html,
body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
}
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    word-wrap: break-word;
}
body {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75em;
    color: #999;
    overflow-x: hidden !important;
    background: #272727;
}
p {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75em;
    color: #999;
    margin-bottom: 20px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    line-height: 1.25em;
    margin: 0 0 20px 0;
}
img {
    width: 100%;
    height: auto;
}
img {
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    color: #323232;
}
span,
a,
a:hover {
    display: inline-block;
    text-decoration: none;
    color: inherit;
}
b {
    font-weight: 400;
    color: #b19777;
}

/* text field */
button,
input,
optgroup,
select,
textarea {
    font-family: 'Oswald', sans-serif;
}
input[type="password"]:focus,
input[type="email"]:focus,
input[type="text"]:focus,
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus,
textarea:focus {
    outline: none;
}
input[type="password"],
input[type="email"],
input[type="text"],
input[type="file"],
textarea {
    max-width: 100%;
    margin-bottom: 10px;
    padding: 10px 0;
    height: auto;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-width: 0 0 1px;
    border-style: solid;
    display: block;
    width: 100%;
    line-height: 1.5em;
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #999;
    background-image: none;
    border-bottom: 1px solid #323232;
    border-color: ease-in-out .15s, box-shadow ease-in-out .15s;
}
input:focus,
textarea:focus {
    border-bottom-width: 1px;
    border-color: #b19777;
}
input[type="submit"],
input[type="reset"],
input[type="button"],
button {
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    line-height: 1.75em;
    -webkit-transition: background-color .15s ease-out;
    transition: background-color .15s ease-out;
    background: #b19777;
    border: 1px solid transparent;
}
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
button:hover {
    background-color: #323232;
    color: #fff;
    border: 1px solid transparent;
}
select {
    padding: 10px;
    border-radius: 5px;
}
table,
th,
tr,
td {

}
th,
tr,
td {
    padding: 10px;
}
input[type="radio"],
input[type="checkbox"] {
    display: inline;
}

/* submit and alert success  */
input[type="submit"] {
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    background: #b19777;
    color: #fff;
    padding: 8px 24px;
    margin: 0;
    position: relative;
    font-size: 16px;
    letter-spacing: 3px;
}
.alert-success {
    background: transparent;
    color: #999;
    border: 1px solid #b19777;
    border-radius: 0px;
}

/* blockquote */
blockquote {
    padding: 45px;
    display: block;
    position: relative;
    background-color: #323232;
    overflow: hidden;
    margin: 35px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75em;
    color: #999;
}
blockquote p {
    font-family: inherit;
    margin-bottom: 0 !important;
    color: inherit;
    max-width: 650px;
    width:100%;
    position:relative;
    z-index:3;
}
blockquote:before {
    content: '\e645';
    font-family: 'Themify';
    position: absolute;
    right: 40px;
    bottom: 40px;
    font-size: 110px;
    opacity: 0.07;
    line-height: 1;
    color: #fff;
}
blockquote p {
    margin-bottom: 0;
}
blockquote p a {
    color:inherit;
}
blockquote cite {
    display:inline-block;
    font-size: 16px;
    position:relative;
    padding-left: 60px;
    border-color:inherit;
    line-height:1;
    margin-top: 22px;
    font-style:normal;
    color: #b19777;
    font-weight: 400;
}
blockquote cite:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 45px;
    height: 1px;
    border-top: 1px solid; 
    border-color:inherit;
    color: #b19777;
}


/* Placeholder */
::-webkit-input-placeholder {
    color: #999;
    font-size: 15px;
    font-weight: 400;
}
:-moz-placeholder {
    color: #999;
}
::-moz-placeholder {
    color: #999;
    opacity: 1;
}
:-ms-input-placeholder {
    color: #999;
}
.o-hidden {
    overflow: hidden;
}
.position-re {
    position: relative;
}
.full-width {
    width: 100%;
}
.bg-img {
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-fixed {
    background-attachment: fixed;
}
.pattern {
    background-repeat: repeat;
    background-size: auto;
}
.bold {
    font-weight: 600;
}
.count {
    font-family: 'Didact Gothic', sans-serif;
}
.valign {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.v-middle {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
}
.js .animate-box {
    opacity: 0;
}


/* ======= Helper style ======= */
.mt-0 {
  margin-top: 0 !important;
}
.mt-15 {
  margin-top: 15px !important;
}
.mt-20 {
  margin-top: 20px !important;
}
.mt-30 {
  margin-top: 30px !important;
}
.mt-60 {
  margin-top: 60px !important;
}
.mt-90 {
  margin-top: 90px !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-30 {
  margin-bottom: 30px !important;
}
.mb-60 {
  margin-bottom: 60px !important;
}
.mb-90 {
  margin-bottom: 90px !important;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.no-padding {
  padding: 0 !important;
}

/* ======= Selection style ======= */
::-webkit-selection {
    color: #999;
    background: rgba(0, 0, 0, 0.1);
}
::-moz-selection {
    color: #999;
    background: rgba(0, 0, 0, 0.1);
}
::selection {
    color: #999;
    background: rgba(0, 0, 0, 0.1);
}


/* ======= Owl-Theme custom style ======= */
.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 0px;
    line-height: .7;
    display: block;
}
.owl-theme .owl-dots .owl-dot span {
    width: 8px;
    height: 8px;
    margin: 0 3px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background: transparent;
    border: 1px solid #b19777;
}


/* ======= Section style ======= */
.section-padding {
    padding: 90px 0;
}
.section-padding2 {
    padding: 0 0 90px 0;
}
.section-padding h6 {
    color: #b19777;
    font-size: 20px;
    margin-bottom: 20px;
}
.section-title {
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 10px;
    word-spacing: 5px;
    margin-bottom: 30px;
}
.section-title span {
    color: #b19777;
}
.section-title2 {
    font-size: 35px;
    font-weight: 300;
    color: #b19777;
    position: relative;
    line-height: 1.25em;
    margin-bottom: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
}


/* ======= Navbar style ======= */
.navbar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: transparent;
    z-index: 99;
    padding-right: 10%;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
}
.navbar .icon-bar {
    color: #b19777;
}
.navbar .navbar-nav .nav-link {
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 5px 5px;
    -webkit-transition: all .4s;
    transition: all .4s;
}
.navbar .navbar-nav .nav-link.black-color {
    color: #fff;
}
.navbar .navbar-nav .nav-link:hover {
    color: #b19777;
}
.navbar .navbar-nav .active {
    color: #b19777 !important;
}
.nav-scroll {
    background: #272727;
    padding: 0 10% 0 0;
    position: fixed;
    top: -100px;
    left: 0;
    width: 100%;
    -webkit-transition: -webkit-transform .5s;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .5s, -webkit-transform .5s;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.nav-scroll .icon-bar {
    color: #b19777;
}
.nav-scroll .navbar-nav .nav-link {
    color: #fff;
}
.nav-scroll .navbar-nav .active {
    color: #b19777 !important;
}
.nav-scroll .navbar-nav .logo {
    padding: 15px 0;
    color: #999;
}
.nav-scroll .logo {
    width: 100px;
}
.nav-scroll .logo-img {
    margin-bottom: 0px;
}
.nav-scroll .logo-wrapper .logo h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 0px;
    display: block;
    width: 100%;
    position: relative;
    color: #b19777;
    line-height: 1.25em;
    letter-spacing: 5px;
    display: none;
}
.nav-scroll .logo-wrapper .logo span {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    color: #575757;
    font-weight: 400;
    letter-spacing: 3px;
    display: block;
    margin-top: 3px;
    line-height: 1.2em;
    text-transform: uppercase;
    margin-left: 5px;
    display: none !important;
}
.nav-scroll .logo-wrapper {
    padding: 15px 70px 15px 150px;
    background: #272727;
}
.logo-wrapper {
    float: left;
    background: #272727;
    padding: 30px 50px;
}
.logo-wrapper .logo h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 45px;
    font-weight: 400;
    display: block;
    width: 100%;
    position: relative;
    color: #b19777;
    letter-spacing: 9px;
    margin-bottom: 0;
}
.logo-wrapper .logo h2 a i {
    color: #999;
    font-size: 20px;
    vertical-align: super;
}
.logo-wrapper .logo span {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 12px;
    color: #999;
    font-weight: 400;
    letter-spacing: 4px;
    display: block;
    margin-top: 5px;
    line-height: 1.5em;
    text-transform: uppercase;
}
.logo {
    padding: 0;
    width: 150px;
    text-align: center;
}
.logo-img {
    width: 75px;
    margin-bottom: 5px;
}
.dropdown:hover .dropdown-menu,
.dropdown:hover .mega-menu {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
.dropdown .nav-link {
    cursor: pointer;
}
.dropdown .nav-link i {
    padding-left: 1px;
    font-size: 9px;
}
.dropdown-item {
    position: relative;
}
.dropdown-item:hover .sub-menu {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
.dropdown-item span {
    display: block;
    cursor: pointer;
}
.dropdown-menu,
.sub-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    width: 200px;
    padding: 15px 10px;
    border-radius: 0;
    border: 0;
    background-color: #272727;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    -webkit-transition: all .3s;
    transition: all .3s;
}
.dropdown-menu .dropdown-item,
.sub-menu .dropdown-item {
    padding: 5px 15px;
    font-family: 'Didact Gothic', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    position: relative;
    -webkit-transition: all .4s;
    transition: all .4s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.025);
    background-color: transparent;
}
.dropdown-menu .dropdown-item:last-child,
.sub-menu .dropdown-item:last-child {
    border-bottom: none;
}
.dropdown-menu .dropdown-item:hover,
.sub-menu .dropdown-item:hover {
    background: transparent;
    padding-left: 20px;
    color: #b19777;
}
.dropdown-menu .dropdown-item a,
.sub-menu .dropdown-item a {
    display: block;
}
.dropdown-menu .dropdown-item i,
.sub-menu .dropdown-item i {
   padding: 13px 0 0 5px;
    font-size: 8px;
    float: right;
}
.dropdown-menu .dropdown-item em,
.sub-menu .dropdown-item em {
    font-size: 8px;
    background-color: #272727;
    padding: 2px 4px;
    color: #fff;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    top: 5px;
}
.dropdown-menu.last {
    left: -30%;
}
.sub-menu {
    position: absolute;
    left: 100%;
    top: -5px;
}
.sub-menu.left {
    left: -100%;
    margin-left: -20px;
}
.mega-menu {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    right: -150px;
    width: 800px;
    background-color: #fff;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    -webkit-transition: all .3s;
    transition: all .3s;
}
.mega-menu .dropdown-title {
    display: block;
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 15px;
    padding: 0 15px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}
.mega-menu .dropdown-menu {
    position: static !important;
    float: left;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-right: 1px solid rgba(255, 255, 255, 0.03);;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    -webkit-transition: all .3s;
    transition: all .3s;
}
@media screen and (max-width: 767px) {
    .navbar {
        padding-right: 0px;
        padding-right: 0px;
        background: #272727;
    }
    .nav-scroll {
        background: #272727;
    }
    .logo-wrapper {
        float: left;
        padding: 15px;
    }
    .nav-scroll .logo-wrapper {
        padding: 15px;
        background-color: #272727;
    }
}


/* ======= Header style ======= */
.header {
    min-height: 100vh;
    overflow: hidden;
}
.header .caption .o-hidden {
    display: inline-block;
}
.header .caption h2 {
    font-weight: 400;
    font-size: 30px;
}
.header .caption h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #fff;
    text-align: right;
    margin-bottom: 30px;
    -webkit-animation-delay: .2s;
    animation-delay: .2s;
}
.header .caption h1 {
    position: relative;
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    text-transform: uppercase;
    line-height: 1.35em;
    -webkit-animation-delay: .4s;
    animation-delay: .4s;
    color: #fff;
    font-weight: 400;
    letter-spacing: 15px;
}
.header .caption p {
    font-size: 18px;
    line-height: 1.75em;
    margin-bottom: 0;
    color: #fff;
    -webkit-animation-delay: .6s;
    animation-delay: .6s;
    margin-right: 15px;
}
.header .caption p span {
    letter-spacing: 5px;
    text-transform: uppercase;
    margin: 0 5px;
    padding-right: 14px;
    position: relative;
}
.header .caption p span:last-child {
    padding: 0;
}
.header .caption p span:last-child:after {
    display: none;
}
.header .caption p span:after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #272727;
    position: absolute;
    top: 10px;
    right: 0;
    opacity: .5;
}
.header .caption .butn-light {
    -webkit-animation-delay: .8s;
    animation-delay: .8s;
    margin-right: 15px;
}
.header .social a {
    color: #eee;
    font-size: 20px;
    margin: 10px 15px;
}


/* ======= Slider style ======= */
.slider .owl-item,
.slider-fade .owl-item {
    height: 100vh;
    position: relative;
}
.slider .item,
.slider-fade .item {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
}
.slider .item .caption,
.slider-fade .item .caption {
    z-index: 9;
}
.slider .owl-theme .owl-dots,
.slider-fade .owl-theme .owl-dots {
    position: absolute;
    bottom: 5vh;
    width: 100%;
}
/* owl-nav next and prev */
.owl-nav {
    position: absolute;
    bottom: 3%;
    left: 12%;
}
.owl-prev {
    float: left;
}
.owl-next {
    float: right;
}
.owl-theme .owl-nav [class*=owl-] {
    width: 40px;
    height: 40px;
    line-height: 34px;
    background: transparent;
    border-radius: 100%;
    color: rgba(255, 255, 255, 0.75);
    font-size: 11px;
    margin-right: 3px;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease-in-out;
    transform: scale(1.0);
}
.owl-theme .owl-nav [class*=owl-]:hover {
    transform: scale(0.9);
    background: transparent;
    border: 1px solid #b19777;
    color: #b19777;
}
@media screen and (max-width: 768px) {
    .owl-nav {
        display: none;
    }
}


/* ======= Slider left panel style ======= */
.left-panel {
    background: #272727;
    position: absolute;
    width: 143px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
}
.social-left {
    display: block;
    margin: 0;
    padding: 10px 0;
    list-style: none;
    text-align: center;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 24px;
    background: #272727;
    z-index: 10;
}
.social-left:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 1px;
    height: 70px;
    top: -70px;
    background: #373737;
}
.social-left li {
    display: block;
    margin: 0;
    padding: 3px 0;
}
.social-left li:first-child {}
.social-left li span {
    display: inline-block;
    text-decoration: none;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    border: 1px solid #373737;
    color: #999;
    border-radius: 100%;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
}
.social-left li span:hover {
    color: #b19777;
    border: 1px solid #b19777;
}
@media (max-width: 1259.98px) {
    .left-panel {
        width: 100px;
    }
}
@media (max-width: 991.98px) {
    .left-panel {
        width: 50px;
    }
}
@media (max-width: 767.98px) {
    .left-panel {
        display: none;
    }
}


/* ======= Page Banner Header style ======= */
.banner-header {
    height: 50vh;
    z-index: -2;
}
.banner-header h6 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
}
.banner-header h6 a:hover {
    color: #fff;
}
.banner-header h6 i {
    margin: 0 15px;
    font-size: 10px;
}
.banner-header h5 {
    color: #b19777;
    font-size: 17px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
}
.banner-header h1 {
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    color: #b19777;
    position: relative;
    margin-bottom: 10px;
    line-height: 1.2em;
}
.banner-header p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0;
    color: #999;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.banner-header p a {
    color: #b19777;
}
@media screen and (max-width: 767px) {
    .banner-header {
        height: 30vh;
        margin-top: 70px;
    }
    .banner-header h6 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .banner-header h6 a:hover {
        color: #b19777;
    }
    .banner-header h6 i {
        margin: 0 15px;
        font-size: 10px;
    }
    .banner-header h5 {}
    .banner-header h1 {}
    .banner-header p {
        font-size: 20px;
        color: #999;
    }
}
.banner-img:after {
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    content: "";
    background: -webkit-linear-gradient(bottom, rgba(39, 39, 39, 1) 0%, rgba(39, 39, 39, .8) 100%, rgba(39, 39, 39, 0.5) 100%);
    background: linear-gradient(to top, rgba(39, 39, 39, 1) 0%, rgba(39, 39, 39, 0.8) 100%, rgba(39, 39, 39, 0.5) 100%);
    object-fit: cover;
}


/* =======  Content Lines style  ======= */
.content-wrapper {
    position: relative;
}
.content-lines-wrapper {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content-lines-inner {
    position: absolute;
    width: 1140px;
    left: 50%;
    margin-left: -570px;
    top: 0;
    height: 100%;
    border-left: 1px solid #323232;
    border-right: 1px solid #323232;
    border-bottom: 1px solid #323232;
}
.content-lines {
    position: absolute;
    left: 33.666666%;
    right: 33.666666%;
    height: 100%;
    border-left: 1px solid #323232;
    border-right: 1px solid #323232;
}



/* =======  Video Background  ======= */
.video-fullscreen-wrap {
  height: 100vh;
  overflow: hidden;
}
.video-fullscreen-video {
    height: 100%;
}
.video-fullscreen-wrap video {
  width: 100vw;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.video-fullscreen-wrap .video-fullscreen-inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
}
.video-lauch-wrapper {
  border: none;
  background: none;
  width: 100%;
  padding: 0;
}
.video-fullscreen-wrap .video-fullscreen-inner h1 {
    position: relative;
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    text-transform: uppercase;
    line-height: 1.35em;
    -webkit-animation-delay: .4s;
    animation-delay: .4s;
    color: #fff;
    font-weight: 400;
    letter-spacing: 15px;
}
.video-fullscreen-wrap .video-fullscreen-inner p {
    font-size: 18px;
    line-height: 1.75em;
    margin-bottom: 0;
    color: #fff;
    -webkit-animation-delay: .6s;
    animation-delay: .6s;
    margin-right: 15px;
}
.video-fullscreen-wrap .video-fullscreen-inner .butn-light {
    -webkit-animation-delay: .8s;
    animation-delay: .8s;
    margin-right: 15px;
}
.position-relative {
  position: relative !important;
}
@media screen and (max-width: 767px) {
    .video-fullscreen-wrap .video-fullscreen-inner h1 {
        font-size: 30px;
        margin-bottom: 15px;
        letter-spacing: 10px;
        line-height: 1.35em;
    }
    .video-fullscreen-wrap .video-fullscreen-inner p {
    font-size: 15px;
    margin-right: 10px;
    }
}



/* ======= About style ======= */
.about {
    padding-bottom: 90px;
}
.about .about-img img:hover {
    transform: scale(0.95);
}
.about .about-img {
    position: relative;
}
.about .about-img .img {
    padding: 0 15px 30px 30px;
    position: relative;
}
.about .about-img .img:before {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    right: 45px;
    bottom: 0;
    border: 1px solid #323232;
}
.about .about-img .img img {
    position: relative;
    z-index: 2;
    background: #272727;
}
.about-img-2 {
    position: relative
}
.about-img .about-img-2 {
    width: 40% !important;
    position: absolute;
    bottom: 0px;
    right: 45px;
    z-index: 3;
    padding: 20px 15px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 13px;
    line-height: 1.5em;
    text-align: center;
}
.about-buro {
    background: #323232;
}


/* ======= Team style ======= */
.team .item {
    margin-bottom: 30px;
}
.team .item:hover .info .social {
    top: 0;
}
.team .info {
    text-align: center;
    padding: 30px 20px;
    position: relative;
    overflow: hidden;
}
.team .info h6 {
    font-size: 17px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 3px;
    color: #fff;
}
.team .info p {
    margin-bottom: 5px;
    color: #999;
}
.team .info .social {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #323232;
    -webkit-transition: all .4s;
    transition: all .4s;
}
.team .info .social a {
    font-size: 15px;
    color: #b19777;
    margin: 0 5px;
}
.team .info .social a:hover {
    color: #fff;
}


/* ======= Team Details style ======= */
.team-details {
    color: #999;
}
.team-details h3 {
    font-size: 25px;
    margin-bottom: 0px;
    color: #fff;
    letter-spacing: 3px;
    font-weight: 300;
    text-transform: uppercase;
}
.team-details .content {
    background-color: #323232;
}
.team-details .text-content {
    position: relative;
    padding: 30px 15px;
}
.team-details .content .team-details-info {
    padding: 10px 0 30px 0;
    position: relative;
}
.team-details .content .info-list {
    margin: 0;
    padding: 0
}
.team-details .content .info-list li {
    position: relative;
    font-size: 16px;
    line-height: 24px;
    display: block;
    float: left;
     list-style: square;
    padding: 5px 0;
    display: inline-block;
    width: calc(48% - 1px)
}
.team-details .content .info-list .list-title {
     font-family: 'Didact Gothic', sans-serif;
    text-indent: 0;
    width: auto;
    display: inline;
    margin-right: 3px;
    position: relative;
    color: #b19777;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px
    
}
.team-details .content .info-list .list-description {
    display: inline
}
.team-details .content ul.social-icons {
    margin: 0;
    padding: 0
}
.team-details .content .social-icons li {
    display: inline-block;
    border: none;
    z-index: 1;
    position: relative
}
.team-details .content .social-icons li {
    margin: 0 2px
}
.team-details .content .social-icons li:last-child {
    margin-right: 0
}
.team-details .content .social-icons li a {
    display: block;
    min-width: 26px;
    text-align: center
}
.team-details .content .social-icons.circle li>a {
    border-width: 1px;
    border-style: solid;
    height: 33px;
    width: 33px;
    line-height: 33px;
    text-align: center;
    display: block;
    background-color: transparent;
    font-size: 14px;
    border-radius: 50%
}
.team-details .content .social-icons.square li {
    margin: 0 0
}
.team-details .content .social-icons.square li a {
    font-size: 12px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    color: inherit;
    margin-right: 8px;
    border: 1px solid #424242;
    color: #999;
    border-radius: 50%;
}
.team-details .content .social-icons.square li a:hover {
  border: 1px solid #b19777;
}
@media only screen and (max-width: 480px) {
.team-details .content .info-list li {
    width: 100%;
}
}


/* ======= Careers style ======= */
.position {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: -1px;
    padding: 40px 45px 40px 50px;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    border-top: 1px solid #323232;
    border-bottom: 1px solid #323232;
    background-color: transparent;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}
.position-link {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}
.position-title {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    position: relative;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    color: #FFF;
}
.position-title span {
    font-family: 'Didact Gothic', sans-serif;
    color: #999;
    display: block;
    text-transform: none;
    letter-spacing: 0px;
}
.position-location {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    color: #FFF;
}
.position-location span {
    font-family: 'Didact Gothic', sans-serif;
    color: #999;
    display: block;
    text-transform: none;
    letter-spacing: 0px;
}
.position-time {
    font-weight: 400;
    -webkit-transition: color .3s;
    transition: color .3s;
    color: #999;
}
.position-time span {
    font-family: 'Didact Gothic', sans-serif;
    color: #fff;
    display: block;
    text-transform: none;
    letter-spacing: 0px;
}
.position-icon {
    font-size: 16px;
    line-height: 1;
    color: #fff;
}
.position-icon i {
    display: inline-block
}
/* hover */
.position:hover {
    background-color: #b19777;
}
.position:hover .position-title,
.position:hover .position-title span,
.position:hover .position-location,
.position:hover .position-location span,
.position:hover .position-time,
.position:hover .position-time span,
.position:hover .position-icon {
    color: #fff;
}
@media only screen and (max-width:991px) {
    .position {
        flex-direction: column;
        -webkit-box-pack: initial;
        -webkit-justify-content: initial;
        -ms-flex-pack: initial;
        justify-content: initial;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start
    }
    .position-title {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%
    }
    .position-location {
        margin-top: 15px;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%
    }
    .position-time {
        margin-top: 15px;
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%
    }
    .position-icon {
        display: none
    }
}



/* ======= Services style ======= */
.services {}
.services .item {
    padding: 60px 30px;
    margin-bottom: 30px;
    position: relative;
}
.services .item:hover {
    background: #323232;
}
.services .item:hover .numb {
    color: transparent;
    -webkit-text-stroke: 1px rgba(177, 151, 119, 0.5);
}
.services .item h5 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.services .item p {
    margin-bottom: 0;
}
.services .item img {
    width: 60px;
    margin-bottom: 20px;
}
.services .item .numb {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    line-height: 1em;
}
/* line animation */
.services .item .line {
    width: 100%;
    display: inline-block;
    position: relative;
    margin-bottom: 5px;
}
.services .item .line:after {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 50px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    content: '';
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.services .item:hover .line:after {
    width: 100%;
    background-color: rgba(177, 151, 119, 0.5);
    transition-property: all;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
}



/* ======= Services 2 ======= */
.services2 {
    text-align: center;
    position: relative;
    padding-bottom: 30px
}
.services2 .title-box {
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 0;
    z-index: 2;
    background-color: #323232;
    padding: 20px 0;
    opacity: 1;
    visibility: visible;
    margin-bottom: 0;
    color: #fff;
}
.services2 .title-box h3 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.services2 .services2-img {
    position: relative
}
.services2 .services2-img:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: #1a1a1a;
    opacity: 0.7;
    visibility: hidden
}
.services2 .services2-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 20px;
    margin-top: 50px;
    opacity: 0;
    visibility: hidden
}
.services2 .icon img {
    width: 60px;
    color: #fff;
    margin-bottom: 20px;
}
.services2 .services2-title {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.services2 .services2-subtitle {
    color: #b19777;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.services2 .services2-text {
    color: #fff;
    margin-left: auto;
    margin-right: auto
}
.services2 .title-box,
.services2 .services2-content,
.services2 .services2-img:before {
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s
}
.services2:hover .services2-content {
    opacity: 1;
    visibility: visible;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
    margin-top: 1px
}
.services2:hover .title-box {
    opacity: 0;
    visibility: hidden;
    margin-bottom: 80px
}
.services2:hover .services2-img::before {
    height: 100%;
    visibility: visible
}
@media (max-width: 1199px) {
    .services2 .title-box {
        left: 20px;
        right: 20px;
        padding: 25px 0
    }
    .services2 .services2-text {
  
    }
}



/* ======= Services 3 ======= */
.services3 {
    text-align: left;
    margin: 0;
    margin-bottom: 30px;
    padding: 40px;
    padding-bottom: 0;
    background: #323232;
    border-bottom: 1px solid #323232;
    transition: .2s;
    overflow: hidden;
    cursor: pointer;
    z-index: 3
}
.services3:hover {
    background: #323232;
    z-index: 100;
    border-bottom: 1px solid #b19777;

}
.services3-text-area p {
    transition: .25s;
    font-family: inherit !important;
    opacity: 0;
    color: #999;
    margin-bottom: -35px
}
.services3:hover .services3-text-area p {
    opacity: 1
}
.services3-img-area,
.services3-text-area {
    display: inline-block;
    vertical-align: bottom;
    transition: transform .2s ease-in-out
}
.services3-heading {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
}
.services3-img-area {
    font-size: 42px;
    color: #b19777;
    margin-bottom: 20px;
    margin-right: 0;
    float: left;
    width: 100%;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out
}
.services3:hover .services3-text-area,
.services3:hover .services3-img-area {
    -webkit-transform: translate3d(0, -67px, 0);
    transform: translate3d(0, -67px, 0)
}
.services3:hover .services3-img-area {
    opacity: 0
}
.services3 .services3-img-area img {
    margin-bottom: 5px;
    max-height: 40px;
    width: auto;
}



/* ======= Services 4 ======= */
.services4 {
    color: #fff;
}
.services4 .square-flip {
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    -webkit-transform: perspective(1000px);
    -moz-transform: perspective(1000px);
    -ms-transform: perspective(1000px);
    transform: perspective(1000px);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: relative;
    background-size: cover;
    background-position: center center;
}
.services4 .square-flip {
    min-height: 420px;
    margin-bottom: 30px;
}
.services4 .square,
.services4 .square2 {
    width: 100%;
    height: 100%;
}
.services4 .square {
    background-size: cover;
    background-position: center center;
    -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    overflow: hidden;
    position: absolute;
    top: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.services4 .square h4 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    margin-bottom: 0;
    display: inline-flex;
}
.services4 .square-flip .square {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: 1;
}
.services4 .square-flip:hover .square {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.services4 .square2 {
    background: #323232;
    background-size: cover;
    background-position: center center;
    -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    overflow: hidden;
    position: absolute;
    top: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.services4 .square2:before {
    top: 25px;
    left: 15px;
    right: 15px;
    bottom: 25px;
}
.services4 .square2 h4 {
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
}
.services4 .square2 p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
}
.services4 .square2 .icon img {
    width: 60px;
    color: #fff;
    margin-bottom: 20px;
}
.services4 .btn-line a {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}
.services4 .btn-line a:hover {
    border-bottom: 1px solid #b19777;
    color: rgba(255, 255, 255, 0.7);
}
.services4 .square-flip .square2 {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: 1;
}
.services4 .square-flip:hover .square2 {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.services4 .square-container {
    padding: 40px;
    text-align: center;
    height: 420px;
    position: relative;
    -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -webkit-transform: translateX(0px) scale(1);
    -ms-transform: translateX(0px) scale(1);
    transform: translateX(0px) scale(1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: 2;
}
.services4 .square-container .box-title {
    /*	width: 100%;*/
}
.text-vertical {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
}
.services4 .square-flip:hover .square-container {
    -webkit-transform: translateX(-650px) scale(0.88);
    -ms-transform: translateX(-650px) scale(0.88);
    transform: translateX(-650px) scale(0.88);
}
.services4 .square-container2 {
    padding: 30px;
    text-align: left;
    position: relative;
    top: 50%;
    -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
    -webkit-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
    transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: 2;
}
.services4 .square-flip:hover .square-container2 {
    -webkit-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
    transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
}
.services4 .flip-overlay {
    display: block;
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .2;
}
@media screen and (max-width: 991px) {
    .services4 .square-flip {
        margin-bottom: 30px;
    }
    .services4 {
        padding-bottom: 70px;
    }
}


/* services sidebar */
.sidebar .sidebar-widget {
    position: relative;
    display: block;
    margin-bottom: 30px;
}
.sidebar .sidebar-widget:last-child {
    margin-bottom: 0px;
}
.sidebar .sidebar-widget .widget-inner {
    position: relative;
    display: block;
    padding: 45px;
    background: #323232;
    border-radius: 0px;
}
.sidebar-title {
    position: relative;
    margin-bottom: 20px;
    border-bottom: 1px solid #373737;
    padding-bottom: 15px;
}
.sidebar-title h4 {
    position: relative;
    display: inline-block;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    line-height: 1.1em;
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 0px;
}
.sidebar .services ul {
    position: relative;
}
.sidebar .services ul li {
    position: relative;
    line-height: 48px;
    font-size: 16px;
    color: #999;
    font-weight: 300;
    margin-bottom: 5px;
}
.sidebar .services ul li:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    right: -20px;
    bottom: 0;
    background: #b19777;
    border-radius: 0;
    opacity: 0;
    transition: all 0.3s ease;
}
.sidebar .services ul li:after {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -12px;
    height: 24px;
    border-left: 2px solid var(--thm-base);
    opacity: 0;
    transition: all 0.3s ease;
}
.sidebar .services ul li:last-child {
    margin-bottom: 0;
}
.sidebar .services ul li a {
    position: relative;
    display: block;
    font-size: 16px;
    color: #999;
    font-weight: 400;
    transition: all 0.3s ease;
    z-index: 1;
}
.sidebar .services ul li:hover a,
.sidebar .services ul li.active a {
    color: #fff;
}
.sidebar .services ul li:hover:before,
.sidebar .services ul li.active:before,
.sidebar .services ul li:hover:after,
.sidebar .services ul li.active:after {
    opacity: 1;
}
.sidebar .services ul li a:after {
    position: absolute;
    right: 0;
    top: -1px;
    font-family: "themify";
    content: "\e649";
    opacity: 1;
    font-size: 10px;
    font-weight: normal;
    z-index: 1;
}
.sidebar .services ul li a:hover:before,
.sidebar .services ul li.active a:before {
    opacity: 1;
    transform: scaleX(1);
    transition: all 0.3s ease 0.1s;
}


/* ======= Projects style ======= */
.projects .item {
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
}
.projects .item:hover img {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.projects .item:hover .con {
    bottom: 0;
}
.projects .item img {
    -webkit-transition: all .5s;
    transition: all .5s;
}
.projects .item .con {
    padding: 30px 15px;
    position: absolute;
    bottom: -58px;
    left: 0;
    width: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    text-align: center;
    z-index: 20;
    height: auto;
    box-sizing: border-box;
    background: -moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, .1) 2%, rgba(0, 0, 0, .75) 90%);
    background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%);
    background: linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%);
}
.projects .item .con h6,
.projects .item .con h6 a {
    position: relative;
    color: #b19777;
    font-size: 13px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
}
.projects .item .con h5,
.projects .item .con h5 a {
    position: relative;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-top: 0px;
    margin-bottom: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
}
.projects .item .con p {
    color: #fff;
    font-size: 20px;
}
.projects .item .con i {
    color: #fff;
    font-size: 20px;
}
.projects .item .con i:hover {
    color: #b19777;
}
.projects .item .con .butn-light {
    margin-left: 0;
    border-radius: 30px;
    border-color: #999;
    padding: 11px 30px;
}
.projects .item .con .butn-light:hover {
    border-color: #b19777;
}
/* line animation */
.projects .item .line {
    text-align: center;
    height: 1px;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    margin: 0 auto 30px;
}
.projects .item:hover .line {
    width: 100%;
    transition-property: all;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
}
/* prev/next project */
.projects-prev-next {
  padding: 40px 0;
  border: none;
  border-top: 1px solid #323232;
}
@media (max-width: 576px) {
  .projects-prev-next {
    text-align: center;
  }
    
  .projects-prev-next-left {
        margin-bottom: 10px;
    }
}
.projects-prev-next a {
    display: inline-block;
    font-size: 16px;
    color: #999;
    line-height: 1em;
}
.projects-prev-next a i {
  font-size: 20px;
}
.projects-prev-next a:hover {
    color: #b19777;
}
.projects-prev-next .projects-prev-next-left a i {
  margin-right: 5px;
  font-size: 12px;
}
.projects-prev-next .projects-prev-next-right a i {
 font-size: 12px;
  margin-left: 0;
  margin-left: 5px;
}


/* ======= Projects2 style ======= */
/* project masonry style */
.project-masonry-wrapper-padding {}
.project-masonry-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;
}
.project-masonry-wrapper .project-masonry-item-img-link {
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.project-masonry-wrapper .project-masonry-item-img-link:hover .project-masonry-item-img {
  -webkit-transform: translateY(-40px);
      -ms-transform: translateY(-40px);
          transform: translateY(-40px);
}
.project-masonry-wrapper .project-masonry-item-img-link:hover .project-masonry-item-img:after {
  opacity: 0.3;
}
.project-masonry-wrapper .project-masonry-item-img-link:hover .project-masonry-item-content {
  -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
          transform: translateY(-10px);
  -webkit-transition-delay: .15s;
       -o-transition-delay: .15s;
          transition-delay: .15s;
}
.project-masonry-wrapper .project-masonry-item-img img {
  max-width: 100%;
	-webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
}
.project-masonry-item-img-link:hover img {
    -webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.project-masonry-wrapper .project-masonry-item-content {
  position: absolute;
  left: 0;
  bottom: -11px;
  max-width: 80%;
  background-color: #272727;
  padding-top: 25px;
  padding-right: 40px;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.5s linear;
  transition: -webkit-transform 0.5s linear;
  -o-transition: transform 0.5s linear;
  transition: transform 0.5s linear;
  transition: transform 0.5s linear, -webkit-transform 0.5s linear;
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-masonry-wrapper .project-masonry-item-title {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
}
.project-masonry-wrapper .project-masonry-item-category {
    font-size: 14px;
    line-height: 1.5em;
    color: #b19777;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
}
@media only screen and (max-width: 991px) {
  .project-masonry-wrapper .project-masonry-item-content {
    padding-top: 15px;
    padding-right: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .project-masonry-wrapper {
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
  }
  .project .items {
    padding: 12px;
	}
}
@media only screen and (max-width: 400px) {
  .project-masonry-wrapper {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* ======= Projects3 style ======= */
.bauen-project {}
.bauen-project-section {
    padding-top: 120px;
}
.bauen-project-page-section {
    padding-bottom: 80px;
}
.bauen-project-items .col-md-6:nth-child(2) {
    margin-top: 75px;
}
.bauen-project-filter {
    width: 100%;
    padding-bottom: 30px;
    padding-left: 0px;
    position: relative;
}
.bauen-project-filter li {
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    color: #999;
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 400;
}
.bauen-project-filter li:last-child {
    margin-right: 0;
}
.bauen-project-filter li.active {
    color: #b19777;
    content: "";
    left: 0;
    bottom: -4px;
    border-bottom: 1px solid;
    -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
}
.bauen-project-filter li:hover {
    color: #b19777;
}
.bauen-project-wrap {
    padding-bottom: 90px;
    padding-right: 0;
    padding-left: 90px;
    position: relative;
}
.bauen-project-wrap:hover img {
    -ms-transform: scale(0.95, 0.95);
    /* IE 9 */
    -webkit-transform: scale(0.95, 0.95);
    /* Safari */
    transform: scale(0.95, 0.95);
}
.bauen-project-wrap h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    line-height: 1.25em;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 0px;
}
.bauen-project-wrap p {
    color: #b19777;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    align-items: center;
    display: inline-flex;
}
.bauen-project-content {
    position: absolute;
    left: 50px;
    bottom: 89px;
    background-color: #272727;
    padding: 20px 20px 20px 0;
    margin-right: 20px;
}
.bauen-project-link {
    color: #b19777;
    font-size: 17px;
    font-weight: 400;
    position: relative;
    padding-right: 40px;
    line-height: 1.75em;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    padding-left: 80px;
}
.bauen-project-link:before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 1px;
    background: #b19777;
    position: absolute;
    left: 0;
    bottom: 15px;
    transition: all 0.3s ease-in-out;
}
.bauen-project-link:before:hover {
    padding-left: 5px;
    color: #b19777;
    transition: all 0.3s ease-in-out;
}
.bauen-project-link i {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}
.bauen-project-link:hover i {
    padding-left: 5px;
    color: #b19777;
    transition: all 0.3s ease-in-out;
}
.bauen-project-link:hover {
    color: #b19777;
}
@media (max-width: 991px) {
    .bauen-project-wrap {
        padding-left: 20px;
    }
    .bauen-project-wrap h3 {
        font-size: 22px;
    }
    .bauen-project-content {
        left: 0px;
        bottom: 0px;
    }
}
@media all and (max-width: 767px) {
    .bauen-project-items .col-md-6:nth-child(2) {
        margin-top: 0;
    }
}
@media all and (max-width: 575px) {
    .bauen-project-filter li {
        margin-right: 10px;
        font-size: 17px;
    }
    .bauen-project-filter li:last-child {
        margin-right: 0;
    }
    .bauen-project-items .single-item {
        padding-bottom: 30px;
    }
    .bauen-project-wrap {
        padding: 0;
    }
}



/* ======= Projects4 style  ======= */
.projects4 {
    position: relative;
    margin-bottom: 90px;
}
.projects4:last-child {
    margin-bottom: 0px;
}
.projects4 figure {
    margin: 0;
    position: relative;
    width: 66.666667%;
    margin-left: auto;
}
.projects4.left figure {
    margin-left: 0;
    margin-right: auto;
}
.projects4 figure img:hover {
    transform: scale(0.95);
}
.projects4 .caption {
    background: #272727;
    position: absolute;
    left: 0;
    top: 50%;
    width: 50%;
    padding: 5% 4% 5% 0%;
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}
.projects4.left .caption {
    left: auto;
    right: 0;
    background: #272727;
    padding: 5% 0% 5% 4%;
}
.projects4 .caption h4 {
    font-size: 30px;
    color: #fff;
    letter-spacing: 5px;
    font-weight: 300;
    line-height: 1.25em;
    text-transform: uppercase;
}
.projects4 .caption h6 {
    color: #b19777;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
@media (max-width: 991.98px) {
    .projects4 figure {
        width: auto;
        margin: 0;
    }
    .projects4 .caption {
        position: relative;
        left: 0;
        top: 0;
        width: auto;
        padding: 30px;
        -ms-transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}



/* ======= Project Gallery style ======= */
.gallery-masonry-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;
}
.bauen-gallery-items .col-md-6:nth-child(2) {
    margin-top: 0px;
}
.bauen-gallery-filter {
    width: 100%;
    padding-bottom: 30px;
    padding-left: 0px;
    position: relative;
}
.bauen-gallery-filter li {
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    color: #999;
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 400;
}
.bauen-gallery-filter li:last-child {
    margin-right: 0;
}
.bauen-gallery-filter li.active {
    color: #b19777;
    content: "";
    left: 0;
    bottom: -4px;
    border-bottom: 1px solid;
    -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
}
.bauen-gallery-filter li:hover {
    color: #b19777;
}
.gallery-masonry-wrapper .gallery-masonry-item-img-link {
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.gallery-masonry-wrapper .gallery-masonry-item-img-link:hover .gallery-masonry-item-img {
  -webkit-transform: translateY(-40px);
      -ms-transform: translateY(-40px);
          transform: translateY(-40px);
}
.gallery-masonry-wrapper .gallery-masonry-item-img-link:hover .gallery-masonry-item-img:after {
  opacity: 0.3;
}
.gallery-masonry-wrapper .gallery-masonry-item-img-link:hover .gallery-masonry-item-content {
  -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
          transform: translateY(-10px);
  -webkit-transition-delay: .15s;
       -o-transition-delay: .15s;
          transition-delay: .15s;
}
.gallery-masonry-wrapper .gallery-masonry-item-content {
  position: absolute;
  left: 0;
  bottom: -11px;
  max-width: 80%;
  background-color: #272727;
  padding-top: 20px;
  padding-right: 40px;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.5s linear;
  transition: -webkit-transform 0.5s linear;
  -o-transition: transform 0.5s linear;
  transition: transform 0.5s linear;
  transition: transform 0.5s linear, -webkit-transform 0.5s linear;
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), 
  -webkit-transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.gallery-masonry-wrapper .gallery-masonry-item-title {
  margin-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
}
.gallery-masonry-wrapper .gallery-masonry-item-category {
    font-size: 14px;
    line-height: 1.5em;
    color: #b19777;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
}
@media only screen and (max-width: 991px) {
  .gallery-masonry-wrapper .gallery-masonry-item-content {
    padding-top: 15px;
    padding-right: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .gallery-masonry-wrapper {
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
  }
    
     .bauen-gallery-items .col-md-6:nth-child(2) {
        margin-top: 0;
    }
}
@media all and (max-width: 575px) {
    .bauen-gallery-filter li {
        margin-right: 10px;
        font-size: 17px;
    }
    .bauen-gallery-filter li:last-child {
        margin-right: 0;
    }
    .bauen-gallery-items .single-item {
        padding-bottom: 30px;
    }
 
}
@media only screen and (max-width: 400px) {
  .gallery-masonry-wrapper {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}



/* ======= Project Page style ======= */
.project-page h6 {
    margin-bottom: 0px;
    position: relative;
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    color: #999;
}
.project-bar {
    padding: 30px 45px 30px 45px;
    background-color: #323232;
    margin-top: -55px;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
}
.project-bar h5  {
    color: #b19777;
    font-size: 16px;
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
}
@media (max-width: 576px) {
    .project-bar {
     margin-top: 0px; 
    }
}
/* page list */
.page-list {
    position: relative;
    display: block;
}
.page-list li {
    position: relative;
    display: flex;
    align-items: center;
}
.page-list li+li {
    margin-top: 10px;
}
.page-list-icon {
    display: flex;
    align-items: center;
}
.page-list-icon span {
    font-size: 13px;
    color: #b19777;
    background-color: transparent;
    border: 1px solid #323232;
    border-radius: 50%;
    padding: 9px;
}
.page-list-text {
    margin-left: 15px;
}
.page-list-text p {
    font-size: 16px;
    margin: 0;
}



/* ======= Clients style ======= */
.clients {
    background-color: #323232;
}
.clients .owl-carousel {
    margin: 20px 0;
}
.clients .clients-logo {
    opacity: 1;
    line-height: 0;
}
.clients .clients-logo:hover {
    opacity: 1;
}
.clients img {
    -webkit-filter: none;
    filter: none;
}
.clients img:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: all .5s;
    transition: all .5s;
}


/* ======= Gallery style ======= */
.gallery-item {
    position: relative;
    padding-top: 20px;
}
.gallery-box {
    overflow: hidden;
    position: relative;
}
.gallery-box .gallery-img {
    position: relative;
    overflow: hidden;
}
.gallery-box .gallery-img:after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0px;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}
.gallery-box .gallery-img > img {
    transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);
    border-radius: 0;
}
.gallery-box .gallery-detail {
    opacity: 0;
    color: #FFF;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    overflow: hidden;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}
.gallery-box .gallery-detail h4 {
    font-size: 18px;
}
.gallery-box .gallery-detail p {
    color: Rgba(0, 0, 0, 0.4);
    font-size: 14px;
}
.gallery-box .gallery-detail i {
    color: #272727;
    padding: 8px;
}
.gallery-box .gallery-detail i:hover {
    color: #272727;
}
.gallery-box:hover .gallery-detail {
    top: 50%;
    transform: translate(0, -50%);
    opacity: 1;
}
.gallery-box:hover .gallery-img:after {
    background: rgba(0,0,0, 0.4);
}
.gallery-box:hover .gallery-img > img {
    transform: scale(1.05);
}
/* magnific popup custom */
.mfp-figure button {
    border: 0px solid transparent;
}
button.mfp-close,
button.mfp-arrow {
    border: 0px solid transparent;
    background: transparent;
}


/* ======= Promo Video and Testimonials style ======= */
/* play button */
.vid-area h5 {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    letter-spacing: 5px;
    margin-bottom: 30px;
    text-transform: uppercase;
}
.play-button {
    position: relative;
    width: 85px;
    height: 85px;
    margin: auto;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    z-index: 4;
    margin-left: 15px;
}
.play-button svg {
    position: absolute;
    width: 100%;
    height: 100%;
}
.circle-fill circle {
    opacity: 1;
    fill: rgba(197, 164, 126, 0.5);
}
.polygon {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 90px;
    font-size: 35px;
    z-index: 2;
    padding-left: 5px;
}
.play-button svg.circle-fill {
    z-index: 1;
    stroke-dasharray: 322;
    stroke-dashoffset: 322;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.play-button:hover svg.circle-fill {
    stroke-dashoffset: 38.5;
}
.play-button svg.circle-track {
    z-index: 0;
}
.play-button.color {
    color: #b19777;
}
.play-button.color .circle-fill circle {
    fill: #b19777;
}
/* video gallery */
.video-gallery-button {
    position: relative;
    margin: auto;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    z-index: 4;
    margin-left: 15px;
    float: right;
}
.video-gallery-polygon {
    z-index: 2;
    padding-left: 5px;
    display: inline-block;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: transparent;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.5);
    color: #fff;
    padding: 7px 6px 7px 8px;
    line-height: 0;
}
.video-gallery-polygon:hover {
    background: #fff;
    border: 1px solid #fff;
    color: #b19777;
}
/* testimonials style */
.testimonials-box {
    position: relative;
    background: #272727;
    padding: 60px 45px;
    margin-bottom: -90px;
}
.testimonials-box .head-box h6 {
    font-weight: 400;
    color: #999;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
}
.testimonials-box .head-box h4 {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    letter-spacing: 5px;
    border-bottom: 1px solid #373737;
    padding-bottom: 15px;
    text-transform: uppercase;
}
.testimonials-box .head-box h4 span {
    color: #fff;
}
@media screen and (max-width: 991px) {
    .testimonials-box {
        margin-bottom: 90px;
        padding: 35px 20px;
    }
}
.testimonials .item {
    margin-bottom: 30px;
    position: relative;
}
.testimonials .item .quote {
    position: absolute;
    right: 15px;
    top: 60px;
    width: 100px;
    margin: 0 auto 30px;
    opacity: .05;
}
.testimonials .item p {
    color: #999;
}
.testimonials .item .info {
    text-align: left;
    margin: 30px 0 15px 0;
}
.testimonials .item .info .author-img {
        width: 55px;
    height: 55px;
    border-radius: 50%;
    float: left;
    overflow: hidden;
}
.testimonials .item .info .cont {
    margin-left: 70px;
}
.testimonials .item .info h6 {
    font-size: 16px;
    margin-bottom: 0px;
    padding-top: 7px;
    font-weight: 400;
    font-family: 'Didact Gothic', sans-serif;
    color: #b19777;
}
.testimonials .item .info span {
    font-size: 16px;
    color: #999;
    margin-right: 5px;
    line-height: 1.25em;
}
.testimonials .item .info .rate {
    float: right;
}
.testimonials .item .info i {
    color: #b19777;
    font-size: 10px;
}



/* ======= Blog 1 style ======= */
.bauen-blog .item {
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
}
.bauen-blog .item:hover img {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
    -webkit-filter: brightness(75%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.bauen-blog .item:hover .con {
    bottom: 0;
}
.bauen-blog .item img {
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-filter: brightness(100%);
}
.bauen-blog .item .con {
    margin: -120px 20px 75px;
    padding: 15px 15px 25px 15px;
    background-color: #323232 !important;
    border: 1px solid #323232;
    border-radius: 0;
    overflow: hidden;
    -webkit-transition: .2s cubic-bezier(.3, .58, .55, 1);
    transition: .2s cubic-bezier(.3, .58, .55, 1);
    bottom: -55px;
    position: relative;
}
.bauen-blog .item .con .category {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    letter-spacing: 1px;
}
.bauen-blog .item .con .category a {
    margin-right: 5px;
    position: relative;
}
.bauen-blog .item .con .category a:hover {
    color: #b19777;
}
.bauen-blog .item .con .category a:last-child {
    margin-right: 0;
}
.bauen-blog .item .con .category a:last-child:after {
    display: none;
}
.bauen-blog .item .con h5,
.bauen-blog .item .con h5 a {
    color: #b19777;
    font-size: 25px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    margin-bottom: 0px;
    letter-spacing: 1px;
}
.bauen-blog .item .con h5:hover,
.bauen-blog .item .con h5 a:hover {
    color: #b19777;
}
.bauen-blog .item .con p {
    color: #fff;
    font-size: 17px;
}
.bauen-blog .item .con i {
    color: #fff;
    font-size: 20px;
}



/* ======= Blog 2 style ======= */
.bauen-blog2 .img {
  position: relative;
    overflow: hidden;
}
.bauen-blog2 .img:hover img {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.bauen-blog2 .img img {
    -webkit-transition: all .5s;
    transition: all .5s;
}
.bauen-blog2 .content {
  width: 100%;
  padding: 30px 45px;
}
.bauen-blog2 .content .date {
  display: table-cell;
  position: relative;
  width: 80px;
  z-index: 2;
}
.bauen-blog2 .content .date h3 {
    font-size: 65px;
    font-weight: 500;
    color: #b19777;
    margin-bottom: 0px;
}
.bauen-blog2 .content .date h6 {
    color: #999;
    letter-spacing: 2px;
    font-size: 10px;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
}
.bauen-blog2 .content .cont {
  display: table-cell;
  vertical-align: middle;
  padding-left: 15px;
}
.bauen-blog2 .content .cont h4 {
    margin: 15px 0;
    font-size: 20px;
    color: #fff;
    letter-spacing: 5px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.5em;
}
.bauen-blog2 .content .cont .more {
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #b19777;
  padding-left: 40px;
  position: relative;
}
.bauen-blog2 .content .cont .more:after {
  content: '';
  width: 30px;
  height: 1px;
  background: #b19777;
  position: absolute;
  top: 50%;
  left: 0px;
}
.bauen-blog2 .content .cont .more:hover {
   color: #fff; 
}
.bauen-blog2 .content .info h6 {
    font-size: 11px;
    letter-spacing: 2px;
    color: #999;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;
}
.bauen-blog2 .content .info .tags {
  color: #b19777;
}
@media screen and (max-width: 991px) {
    .bauen-blog2 .content {
    padding: 0 30px;
    margin-top: 40px;
    }
    .bauen-blog2 .content .cont h4 {
        line-height: 1.25em;
    }
    .order2 {
    -webkit-box-ordinal-group: 3 !important;
        -ms-flex-order: 2 !important;
            order: 2 !important;
  }
    .order1 {
    -webkit-box-ordinal-group: 2 !important;
        -ms-flex-order: 1 !important;
            order: 1 !important;
  }  
}
@media screen and (max-width: 480px) {
    .bauen-blog2 .content {
    padding: 0 15px;
  }
    .bauen-blog2 .content .date {
    width: 60px;
  }
    .bauen-blog2 .content .info .tags {
    margin: 5px 0 0;
  }
    .bauen-blog2 .content .date h3 {
    font-size: 40px;
  }
}



/* ======= Blog 3 style ======= */
.bauen-blog3 .item {
    margin-bottom: 30px;
}
.bauen-blog3 .post-img {
    position: relative;
    overflow: hidden;
}
.bauen-blog3 .post-img:hover img {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: scale(1.09, 1.09);
    transform: scale(1.09, 1.09);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.bauen-blog3 .post-img a {
    display: block;
}
.bauen-blog3 .post-img img {
    -webkit-transition: all .5s;
    transition: all .5s;
}
.bauen-blog3 .post-cont {
    padding: 30px 0;
}
.bauen-blog3 .post-cont .tag {
    display: block;
    font-weight: 400;
	font-size: 12px;
    letter-spacing: 2px;
    color: #b19777;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;
	margin-bottom: 5px;
}
.bauen-blog3 .post-cont h5 {
	color: #fff;
    font-size: 25px;
    margin-bottom: 15px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
}
.bauen-blog3 .post-cont h5 a {
    color: #fff;
}
.bauen-blog3 .post-cont h5 a:hover {
    color: #b19777;
}
.bauen-blog3 .post-cont .date {
    margin-top: 0px;
    font-size: 12px;
    text-align: right;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-bottom: 5px;
}
.bauen-blog3 .post-cont .date a {
    color: #b19777;
}
.bauen-blog3 .post-cont i {
    color: #777;
	margin: 0 10px;
	font-size: 12px;
}
/* blog sidebar */
.blog-sidebar .widget {
    background: #323232;
    padding: 30px;
    margin-bottom: 30px;
    overflow: hidden;
}
.blog-sidebar .widget ul {
    margin-bottom: 0;
    padding: 0;
}
.blog-sidebar .widget ul li {
    margin-bottom: 15px;
    color: #999;
    font-size: 16px;
    line-height: 1.5em;
}
.blog-sidebar .widget ul li a {
    color: #999;
}
.blog-sidebar .widget ul li a.active {
    color: #b19777;
}
.blog-sidebar .widget ul li a:hover {
    color: #b19777;
}
.blog-sidebar .widget ul li:last-child {
    margin-bottom: 0;
}
.blog-sidebar .widget ul li i {
    font-size: 9px;
    margin-right: 10px;
}
.blog-sidebar .widget .recent li {
    display: block;
    overflow: hidden;
}
.blog-sidebar .widget .recent .thum {
    width: 90px;
    overflow: hidden;
    float: left;
}
.blog-sidebar .widget .recent a {
    display: block;
    margin-left: 105px;
}
.blog-sidebar .widget-title {
    margin-bottom: 20px;
}
.blog-sidebar .widget-title h6 {
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 20px;
    line-height: 1.75em;
    margin-bottom: 15px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
}
.blog-sidebar .search form {
    position: relative;
}
.blog-sidebar .search form input {
    width: 100%;
    padding: 10px;
    border: 0;
    background: #272727;
	margin-bottom: 0;
}
.blog-sidebar .search form button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    color: #999;
    border: 0;
    padding: 10px;
    cursor: pointer;
	outline: none;
}
.blog-sidebar .tags li {
    margin: 3px !important;
    padding: 6px 16px;
    background-color: #b19777;
    color: #fff !important;
    float: left;
}
.blog-sidebar ul.tags li a {
    font-size: 14px;
    color: #fff;
}
.blog-sidebar ul.tags li:hover,
.blog-sidebar ul.tags li a:hover {
    background-color: #272727;
    color: #fff;
}
/* pagination */
.bauen-pagination-wrap {
    padding: 0;
    margin: 0;
    text-align: center;
}
.bauen-pagination-wrap li {
    display: inline-block;
    margin: 0 5px;
}
.bauen-pagination-wrap li a {
    background: transparent;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    color: #999;
    font-weight: 300;
    border: 1px solid #323232;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    border-radius: 100%;
}
.bauen-pagination-wrap li a i {
    font-size: 11px;
}
.bauen-pagination-wrap li a:hover {
    opacity: 1;
    text-decoration: none;
    background: transparent;
    border: 1px solid #b19777;
    color: #b19777;
}
.bauen-pagination-wrap li a.active {
    background-color: transparent;
    border: 1px solid #b19777;
    color: #b19777;
}
@media screen and (max-width: 768px) {
    .bauen-pagination-wrap {
        padding: 0;
        margin: 0;
        text-align: center;
    }
}



/* ======= Blog 4 style  ======= */
.bauen-blog4 {
    position: relative;
    margin-bottom: 90px;
}
.bauen-blog4:last-child {
    margin-bottom: 20px;
}
.bauen-blog4 figure {
    margin: 0;
    position: relative;
    width: 66.666667%;
    margin-left: auto;
}
.bauen-blog4.left figure {
    margin-left: 0;
    margin-right: auto;
}
.bauen-blog4 figure img:hover {
    transform: scale(0.95);
}
.bauen-blog4 .caption {
    background: #323232;
    position: absolute;
    left: 0;
    top: 50%;
    width: 50%;
    padding: 4%;
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}
.bauen-blog4.left .caption {
    left: auto;
    right: 0;
    background: #323232;
    padding: 4%;
}
.bauen-blog4 .caption h4,
.bauen-blog4 .caption h4 a {
    font-size: 27px;
    color: #fff;
    letter-spacing: 5px;
    font-weight: 300;
    text-transform: uppercase;
}
.bauen-blog4 .caption h6 {
    display: inline-block;
    padding: 8px 20px;
    background-color: #b19777;
    color: #fff;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
}
.bauen-blog4 .caption .info-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.bauen-blog4 .caption .info-wrapper .more {
    color: #999;
    text-decoration: none;
    font-size: 14px;
}
.bauen-blog4 .caption .info-wrapper .more i {
    color: #999;
    font-size: 10px;
}
.bauen-blog4 .caption .info-wrapper .date {
    color: #999;
    font-size: 14px;
}
@media (max-width: 991.98px) {
    .bauen-blog4 figure {
        width: auto;
        margin: 0;
    }
    .bauen-blog4 .caption {
        position: relative;
        left: 0;
        top: 0;
        width: auto;
        padding: 30px 20px;
        -ms-transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
/* hr style */
hr {
    margin-top: 5px;
    margin-bottom: 20px;
    border: 0;
}
hr.border-1 {
    border-top: 1px solid #323232;
}
hr.border-2 {
    border-top: 1px solid #424242;
}
/* button link */
.link-btn {
    display: inline-block;
    position: relative;
    padding-bottom: 2px;
    margin-bottom: -2px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 3px;
}
.link-btn i {
    margin-left: 3px;
    font-size: 12px;
    color: #b19777;
}
.link-btn:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #b19777;
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s
}
.link-btn:hover::before {
    width: 100%
}



/* ======= Post style ======= */
.bauen-post-section {
    padding-top: 120px;
}
.bauen-comment-section {
    padding-top: 60px;
    margin-bottom: 60px;
}
.bauen-comment-section h3 {
    font-size: 16px;
    color: #b19777;
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 400;
}
.bauen-comment-section h3 span {
    font-size: 12px;
    color: #999;
    font-weight: 400;
    margin-left: 15px;
}
.bauen-post-caption h1 {
    margin-bottom: 20px;
    font-size: 40px;
    text-transform: uppercase;
}
.bauen-post-comment-wrap {
    display: flex;
    margin-bottom: 60px;
}
.bauen-user-comment {
    margin-right: 30px;
    flex: 0 0 auto;
}
.bauen-user-comment img {
    border-radius: 100%;
    width: 100px;
}
.bauen-user-content {
    margin-right: 26px;
}
.bauen-repay {
    font-size: 14px;
    color: #b19777;
    margin: 0;
    font-weight: 400;
}



/* ======= Contact style ======= */
#bauen-contactMap {
    width: 100%;
    height: 550px;
}



/* ======= Buttons style ======= */
/* dark */
.butn-dark {
    position: relative;
    line-height: 1.2em;
}
.butn-dark a {
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    background: #b19777;
    color: #fff;
    padding: 13px 30px;
    margin: 0;
    position: relative;
    font-size: 16px;
    letter-spacing: 3px;
}
.butn-dark a:after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 1;
    background: #323232;
    color: #fff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.butn-dark a span {
    position: relative;
    z-index: 2;
}
.butn-dark a:hover:after {
    width: 100%;
    left: 0;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
}
.butn-dark a:hover span {
    color: #fff;
}
/* light */
.butn-light {
    position: relative;
    line-height: 1.2em;
}
.butn-light a {
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    background: transparent;
    color: #fff;
    padding: 12px 24px;
    margin: 0;
    position: relative;
    font-size: 16px;
    letter-spacing: 3px;
    border: 1px solid #fff;
}
.butn-light a:after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 1;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: #fff;
}
.butn-light a span {
    position: relative;
    z-index: 2;
}
.butn-light a:hover:after {
    width: 100%;
    left: 0;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
}
.butn-light a:hover span {
    color: #272727;
}



/* ======= Footer style ======= */
.main-footer {
    padding: 60px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.main-footer.dark {
    background: #272727;
    color: #fff;
}
.main-footer .abot p {
    color: #fff;
}
.main-footer .abot .social-icon {
    text-align: center;
    margin-bottom: 20px;
}
.main-footer .abot .social-icon a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    border: 1px solid #373737;
    color: #999;
    border-radius: 100%;
    margin-right: 3px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
}
.main-footer .abot .social-icon a:hover {
    border: 1px solid #b19777;
    background: transparent;
    color: #b19777;
}
.main-footer .fothead h6 {
    margin-bottom: 0px;
    font-family: 'Oswald', sans-serif;
    color: #b19777;
    font-size: 17px;
}
.main-footer .fotcont .fothead h6 {
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 400;
    position: relative;
    padding-bottom: 5px;
    font-size: 16px;
}
.main-footer .fotcont .fothead h6:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    border: none;
}
.main-footer .fotcont p {
    margin-bottom: 0px;
}
/* sub footer */
.main-footer .sub-footer {
    padding: 30px 0 10px 0;
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.main-footer .sub-footer p {
    font-size: 14px;
    color: #999;
    margin-top: 7px;
}
.main-footer .sub-footer p a:hover {
    color: #b19777;
}
.main-footer .sub-footer p.right {
    text-align: right;
}



/* ======= Corner Style ======= */
.hero-corner {
    top: 50px;
    right: 50px;
    z-index: 21;
    border-top: 1px solid;
    border-right: 1px solid;
}
.hero-corner2 {
    top: 50px;
    left: 50px;
    border-top: 1px solid;
    border-left: 1px solid;
}
.hero-corner3 {
    bottom: 50px;
    right: 50px;
    border-bottom: 1px solid;
    border-right: 1px solid;
}
.hero-corner4 {
    bottom: 50px;
    left: 50px;
    border-bottom: 1px solid;
    border-left: 1px solid;
}
.hero-corner,
.hero-corner2,
.hero-corner3,
.hero-corner4 {
    position: absolute;
    width: 70px;
    height: 70px;
    z-index: 21;
    border-color: rgba(255, 255, 255, 0.2);
}


/* ======= Preloader Style ======= */
.pace {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 99999999999999;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 400px;
    border: 0px;
    height: 1px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.pace .pace-progress {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    max-width: 300px;
    position: fixed;
    z-index: 99999999999999;
    display: block;
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    background: #b19777;
}
.pace.pace-inactive {
    width: 100vw;
    opacity: 0;
}
.pace.pace-inactive .pace-progress {
    max-width: 100vw;
}
#preloader {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: 9999999;
}
#preloader:after,
#preloader:before {
    content: '';
    position: fixed;
    left: 0;
    height: 50%;
    width: 100%;
    background: #272727;
    -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
#preloader:before {
    top: 0;
}
#preloader:after {
    bottom: 0;
}
#preloader.isdone {
    visibility: hidden;
    -webkit-transition-delay: 1.5s;
    -o-transition-delay: 1.5s;
    transition-delay: 1.5s;
}
#preloader.isdone:after,
#preloader.isdone:before {
    height: 0;
    -webkit-transition: all 0.7s cubic-bezier(1, 0, 0.55, 1);
    -o-transition: all 0.7s cubic-bezier(1, 0, 0.55, 1);
    transition: all 0.7s cubic-bezier(1, 0, 0.55, 1);
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
}
.loading-text {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 4px;
    position: absolute;
    top: calc(50% - 30px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #b19777;
    font-family: 'Oswald', sans-serif;
    z-index: 9999;
}
.loading-text.isdone {
    top: 50%;
    opacity: 0;
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition-delay: .5s;
    -o-transition-delay: .5s;
    transition-delay: .5s;
}


/* ======= toTop Button style ======= */
.progress-wrap {
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 400ms linear;
    -o-transition: all 400ms linear;
    transition: all 400ms linear;
}
.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
}
.progress-wrap::after {
    position: absolute;
    font-family: 'themify';
    content: '\e648';
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: 700;
    color: #323232;
    left: 0;
    top: 0;
    height: 40px;
    width: 40px;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transition: all 400ms linear;
    -o-transition: all 400ms linear;
    transition: all 400ms linear;
}
.progress-wrap svg path {
    fill: none;
}
.progress-wrap svg.progress-circle path {
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 400ms linear;
    -o-transition: all 400ms linear;
    transition: all 400ms linear;
}
.progress-wrap {
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
.progress-wrap::after {
    color: #b19777;
}
.progress-wrap svg.progress-circle path {
    stroke: #b19777;
}


/* ======= Accordion Box (for Faqs) style ======= */
.accordion-box {
  position: relative;
}
.accordion-box .block {
  position: relative;
  background: #323232;
  border-radius: 0px;
  overflow: hidden;
  margin-bottom: 16px;
}
.accordion-box .block.active-block {
  background-color: #323232;
}
.accordion-box .block:last-child {
  margin-bottom: 0;
}
.accordion-box .block .acc-btn {
    position: relative;
    font-size: 16px;
    line-height: 27px;
    font-weight: 400;
    cursor: pointer;
    padding: 20px 40px;
    padding-right: 60px;
    color: #999;
    transition: all 500ms ease;
    font-family: 'Didact Gothic', sans-serif;
}
.accordion-box .block .acc-btn .count {
  color: #b19777;
  padding-right: 3px;
}
.accordion-box .block .acc-btn:before {
  position: absolute;
    right: 35px;
    top: 20px;
    height: 30px;
    font-size: 14px;
    font-weight: normal;
    color: #b19777;
    line-height: 30px;
    content: "\e61a";
    font-family: "Themify";
    transition: all 500ms ease;
}
.accordion-box .block .acc-btn.active {
  background-color: #323232;
    color: #b19777;
}
.accordion-box .block .acc-btn.active:before {
  color: "Themify";
  content: "\e622";
}
.accordion-box .block .acc-content {
  position: relative;
  display: none;
}
.accordion-box .block .content {
  position: relative;
    padding: 0px 40px 30px;
    background-color: #323232;
    color: #999;
}
.accordion-box .block .acc-content.current {
  display: block;
}
.accordion-box .block .content .text {
  display: block;
  position: relative;
  top: 0px;
  display: block;
}


/* ======= Pricing plan style ======= */
.pricing-card {
    background-color: #323232;
    padding: 60px 40px 40px 40px;
    border-radius: 0;
    margin-bottom: 30px;
}
.pricing-card-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
}
.pricing-card-list {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
}
.pricing-card-list li {
  position: relative;
    font-size: 16px;
    padding-left: 30px;
}
.pricing-card-list li+li {
  margin-top: 5px;
}
.pricing-card-list li i {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(50%);
    font-size: 15px;
    color: #b19777;
}
.pricing-card-list li i.unavailable {
  color: #999;
}
.pricing-card:hover {
  opacity: 1;
}
.pricing-card:hover i {
  color: #b19777;
}
.pricing-card-name {
      line-height: 1;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    color: #b19777;
    margin-bottom: 20px;
    letter-spacing: 5px;
    font-weight: 300;
}
.pricing-card-amount {
  margin: 0;
  line-height: 1;
  font-size: 40px;
  margin-bottom: 20px;
    color: #fff;
}
/* butn */
.butn-pricing {
    position: relative;
    line-height: 1.2em;
}
.butn-pricing a {
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    background: #b19777;
    color: #fff;
    padding: 13px 30px;
    margin: 0;
    position: relative;
    font-size: 16px;
    letter-spacing: 3px;
}
.butn-pricing a:after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 1;
    background: #272727;
    color: #fff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.butn-pricing a span {
    position: relative;
    z-index: 2;
}
.butn-pricing a:hover:after {
    width: 100%;
    left: 0;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
}
.butn-pricing a:hover span {
    color: #fff;
}



/* ======= Error Page 404 style ======= */
.error-form {
  position: relative;
  max-width: 520px;
  margin: 50px auto 0;
}
.error-form form {
  position: relative;
}
.error-form .form-group {
  position: relative;
  margin: 0;
}
.error-form .form-group input[type="text"],
.error-form .form-group input[type="search"],
.error-form .form-group input[type="email"] {
  position: relative;
  width: 100%;
  line-height: 30px;
  padding: 20px 60px 20px 30px;
  height: 70px;
  display: block;
 font-family: 'Didact Gothic', sans-serif;
  font-size: 16px;
  background: #323232;
  color: #999;
  border-radius: 7px;
  border: 1px solid #323232;
  transition: all 300ms ease;
}
.error-form .form-group input[type="text"]:focus,
.error-form .form-group input[type="email"]:focus,
.error-form .form-group input[type="search"]:focus {
  border-color: #323232;
}
.error-form .form-group input::-webkit-input-placeholder {
  color: #323232;
}
.error-form .form-group .theme-btn {
      position: absolute;
    right: 20px;
    top: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    background: none;
    color: #999;
}
.error-form .form-group .theme-btn span {
  vertical-align: middle;
    outline: none;
}



/* ======= Process style ======= */
.process .item {
  position: relative;
  z-index: 4;
}
.process .item img {
  position: absolute;
  width: 70%;
  right: -40%;
  top: 15px;
  opacity: .5;
}
.process .item img.tobotm {
  -webkit-transform: rotateX(180deg);
   transform: rotateX(180deg);
}
.process .item.odd {
  margin-top: 50px;
}
.process .item .cont {
  padding: 40px 20px;
  background-color: #323232;
  border: 1px solid #323232;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  -webkit-transition: all .3s;
  transition: all .3s;
  text-align: left;
}
.process .item .cont:hover {
  background-color: #b19777;
  border: 1px solid #b19777;
}
.process .item .cont:hover h6 {
  color: #fff;
}
.process .item .cont:hover p {
  color: #fff;
}
.process .item .icon {
    color: #b19777;
    font-size: 30px;
    width: 80px;
    height: 80px;
    line-height: 85px;
    border-radius: 50%;
    border: 1px dashed #525151;
    margin-bottom: 30px;
}
.process .item h3 {
    position: absolute;
    bottom: 0px;
    text-align: right;
    width: 100%;
    font-size: 40px;
    font-weight: 600;
    z-index: -1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    right: 20px;
}
.process .item h6 {
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 300;
}
@media screen and (max-width: 991px) {
 .process .item img {
    display: none;
  }
 .mb-md50 {
    margin-bottom: 50px;
}
}
/* line animation */
.process .item .line {
    width: 100%;
    display: inline-block;
    position: relative;
    margin-bottom: 0px;
}
.process .item .line:after {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 50px;
    height: 1px;
    background-color: rgba(255,255,255, 0.05);
    content: '';
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.process .item:hover .line:after {
    width: 100%;
    background-color: rgba(255,255,255,0.5);
    transition-property: all;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
}



/* ======= Process 2 style ======= */
.process2.item{
    background-color: #323232;
    padding: 30px 20px;
    position: relative;
    text-align: left;
}
.process2.item .icon {
    margin-bottom: 15px;
    font-size: 40px; 
    color: #b19777;
}
.process2.item i.number {
    position: absolute;
    top: 110%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #323232;
    line-height: 39px;
    text-align: center;
    left: 22px;
    font-style: normal;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #999;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.process2.item h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 5px;
}
.row > [class*='col-']:nth-child(even) .process2.item { margin-top: 65px; }
.row > [class*='col-']:nth-child(even) .process2.item i.number { top: -60px;}
.row > [class*='col-']:nth-of-type(odd) .process2.item:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-top-color: #323232;
    border-width: 16px;
    left: 25px;
}
.row > [class*='col-']:nth-of-type(even) .process2.item:before {
    top: -30px;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-bottom-color: #323232;
    border-width: 16px;
    left: 25px;
}
.process2.item:hover i.number {
    background-color: transparent;
    border: 1px solid #b19777;
}
/* line animation */
.process2.item .line {
    width: 100%;
    display: inline-block;
    position: relative;
    margin-bottom: 0px;
}
.process2.item .line:after {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 50px;
    height: 1px;
    background-color: rgba(255,255,255, 0.08);
    content: '';
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.process2.item:hover .line:after {
    width: 100%;
    background-color: rgba(255,255,255,0.2);
    transition-property: all;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
}


/* ======= Coming Soon ======== */
.comming{
	min-height: 100vh;
	height: auto;
	position: relative;
	background-blend-mode: overlay;
	background: rgba(0,0,0,.6);
	background-image: url("../img/slider/1.jpg");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	color: #fff;
}
@media (max-width: 767px){
	.comming{
		min-height: 200vh;
	}
}
.comming .item {
    background-color: rgba(0,0,0, 0.3);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 30px 15px;
    margin-bottom: 30px;
}
.comming h6 {
    color: #b19777;
    font-size: 13px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 5px;
	line-height: 1.5em;
}
.comming h3 {
    font-size: 48px;
    line-height: 1.25em;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    color: #fff;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
}
.comming h2 {
    font-size: 48px;
    line-height: 1.25em;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    color: #fff;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 15px;
    margin-bottom: 20px;
	margin-top: 20px;
}
.comming p {
	color: #fff;
	font-size: 16px;
}
/* coming form */
.comming form {
  margin-top: 30px;
  position: relative;
}
.comming form input {
    width: 100%;
    padding: 11px 50px 11px 11px;
    background-color: transparent;
    border: 1px solid #b19777;
    border-radius: 0px;
    color: #fff;
    margin-bottom: 15px;
	outline: none;
}
.comming form button {
    background-color: #b19777;
    padding: 8px 20px;
    border-radius: 0px;
    color: #fff;
    border: 0;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 300;
    outline: none;
}
.comming form button:hover {
  background-color: #323232;
  color: #fff;
	outline: none;
}
/* go home */
.go-back{
	margin-top: 45px;
}
.go-back a {
	color: #fff;
	display: inline-block;
	font-size: 13px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
	letter-spacing: 5px;
}
.go-back a:hover {
	color: #b19777;
}
.go-back a span{
	transition: all .5s;
}
.go-back a span i {
	color: #fff;
	font-size: 14px;
}
.go-back a:hover span{
	padding-right: 15px;
}



/* =======  Overlay Effect Bg image style  ======= */
[data-overlay-dark],
[data-overlay-darkgray],
[data-overlay-light] {
  position: relative;
}
[data-overlay-dark] .container,
[data-overlay-darkgray] .container,
[data-overlay-light] .container {
  position: relative;
  z-index: 2;
}
[data-overlay-dark]:before,
[data-overlay-darkgray]:before,
[data-overlay-light]:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
[data-overlay-dark]:before {
  background: #000;
}
[data-overlay-darkgray]:before {
  background: #272727;
}
[data-overlay-light]:before {
  background: #fff;
}
[data-overlay-dark] h1,
[data-overlay-dark] h2,
[data-overlay-dark] h3,
[data-overlay-dark] h4,
[data-overlay-dark] h5,
[data-overlay-dark] h6,
[data-overlay-dark] span {
  color: #fff;
}
[data-overlay-darkgray] h1,
[data-overlay-darkgray] h2,
[data-overlay-darkgray] h3,
[data-overlay-darkgray] h4,
[data-overlay-darkgray] h5,
[data-overlay-darkgray] h6,
[data-overlay-darkgray] span {
  color: #fff;
}
[data-overlay-light] h1,
[data-overlay-light] h2,
[data-overlay-light] h3,
[data-overlay-light] h4,
[data-overlay-light] h5,
[data-overlay-light] h6,
[data-overlay-light] span {
  color: #999;
}
[data-overlay-dark] p {
  color: #999;
}
[data-overlay-darkgray] p {
  color: #999;
}
[data-overlay-light] p {
  color: #999;
}
[data-overlay-dark="0"]:before,
[data-overlay-darkgray="0"]:before,
[data-overlay-light="0"]:before {
  opacity: 0;
}
[data-overlay-dark="1"]:before,
[data-overlay-darkgray="1"]:before,
[data-overlay-light="1"]:before {
  opacity: 0.1;
}
[data-overlay-dark="2"]:before,
[data-overlay-darkgray="2"]:before,
[data-overlay-light="2"]:before {
  opacity: 0.2;
}
[data-overlay-dark="3"]:before,
[data-overlay-darkgray="3"]:before,
[data-overlay-light="3"]:before {
  opacity: 0.3;
}
[data-overlay-dark="4"]:before,
[data-overlay-darkgray="4"]:before,
[data-overlay-light="4"]:before {
  opacity: 0.4;
}
[data-overlay-dark="5"]:before,
[data-overlay-darkgray="5"]:before,
[data-overlay-light="5"]:before {
  opacity: 0.5;
}
[data-overlay-dark="6"]:before,
[data-overlay-darkgray="6"]:before,
[data-overlay-light="6"]:before {
  opacity: 0.6;
}
[data-overlay-dark="7"]:before,
[data-overlay-darkgray="7"]:before,
[data-overlay-light="7"]:before {
  opacity: 0.7;
}
[data-overlay-dark="8"]:before,
[data-overlay-darkgray="8"]:before,
[data-overlay-light="8"]:before {
  opacity: 0.8;
}
[data-overlay-dark="9"]:before,
[data-overlay-darkgray="9"]:before,
[data-overlay-light="9"]:before {
  opacity: 0.9;
}
[data-overlay-dark="10"]:before,
[data-overlay-darkgray="10"]:before,
[data-overlay-light="10"]:before {
  opacity: 1;
}



/* ======= Responsive style ======= */
@media screen and (max-width: 991px) {
    .bg-fixed {
        background-attachment: scroll !important;
    }
    .navbar .logo {
        text-align: left;
        margin-left: 0px;
    }
    .nav-scroll .logo {
        width: 150px;
    }
    .logo-img {
        margin-bottom: 0px;
    }
    .navbar button {
        margin-right: 15px;
        outline: none !important;
        background: #272727;
    }
    .navbar button:hover {
        background: #272727;
    }
    .navbar .container {
        max-width: 100%;
    }
    .navbar .navbar-collapse {
        max-height: 360px;
        overflow: auto;
        background: #272727;
        text-align: left;
        padding: 15px 30px 30px 15px
    }
    .navbar .nav-link {
        margin: 0px auto !important;
    }
    .navbar .navbar-nav .nav-link {
        color: #999;
    }
    .nav-scroll .navbar-collapse .nav-link {
        color: #999 !important;
    }
    .nav-scroll .navbar-collapse .active {
        color: #b19777 !important;
    }
    .dropdown-menu {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        width: 100%;
        display: none;
    }
    .dropdown-menu .sub-menu {
        position: static;
        margin-top: 15px;
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        width: 100%;
        display: none;
    }
    .dropdown:hover .dropdown-menu,
    .dropdown:hover .mega-menu {
        display: block;
    }
    .dropdown .dropdown-menu:hover .sub-menu {
        display: block;
    }
    .dropdown .mega-menu {
        width: 100%;
        position: static;
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        width: 100%;
        display: none;
    }
    .dropdown .mega-menu .dropdown-menu {
        border: 0;
        margin: 0;
    }
    .dropdown .mega-menu .dropdown-title {
        border-bottom-color: #999;
    }
    .dropdown-menu .dropdown-item,
    .sub-menu .dropdown-item {
        color: #999;
    }
    .header {
        background-attachment: scroll !important;
        background-position: 50% 0% !important;
    }
    .hero-corner,
    .hero-corner2,
    .hero-corner3,
    .hero-corner4 {
        display: none;
    }
    .header .caption h1 {
        font-size: 40px;
    }
}
@media screen and (max-width: 767px) {
    .logo-wrapper .logo h2 {
        display: none;
    }
    .hero .intro h3 {
        font-size: 28px;
    }
    .hero .intro h4 {
        font-size: 20px;
    }
    .header .caption h1 {
        font-size: 30px;
        margin-bottom: 15px;
        letter-spacing: 10px;
        line-height: 1.35em;
    }
    .header .caption p {
        font-size: 15px;
        margin-right: 10px;
    }
    .header .caption .butn-light {
        margin-right: 10px;
    }

    .portfolio .filtering span {
        margin-bottom: 10px;
    }
    .bauen-blog .item .con h5,
    .bauen-blog .item .con h5 a {
        font-size: 20px;
    }
    .bauen-comment-section h3 span {
        margin-left: 0px;
    }
    .main-footer .sub-footer p.right {
        text-align: left;
    }
    .main-footer .abot .social-icon {
        text-align: left;
        margin-bottom: 15px;
    }
    .footer .logo {
        padding: 0;
        width: auto;
        margin: 0px 0;
    }
}
@media screen and (max-width: 480px) {
    .section-head h4 {
        font-size: 30px;
    }
    .footer {
        padding: 60px 0;
    }
    .text-left {
        text-align: center;
    }
    .text-center {
        text-align: center;
    }
    .text-right {
        text-align: center;
    }
}









`;

export default GlobalStyles;
