(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"navigation\">\n    <div class=\"nav-content\">\n      <div class=\"nav-text\">\n        <div class=\"nav-left\">\n          <h2>My</h2>\n        </div>\n        <div class=\"nav-right\">\n          <h2>Website</h2>\n        </div>\n      </div>\n      <a class=\"download\" href=\"../assets/docs/John Adam Resume.pdf\" download=\"John_Aucar_Resume\"\n        ><h2>Download Resume</h2></a\n      >\n    </div>\n  </div>\n\n  <div class=\"first-view\">\n    <div class=\"first-view-circle\"></div>\n    <div class=\"first-view-text\">\n      Developer & Engineer\n    </div>\n  </div>\n\n  <div class=\"header\">\n    <div class=\"header-picture\"></div>\n    <div class=\"header-info\">\n      <h2>John Adam Aucar</h2>\n      <p>\n        I am a student at Texas Tech University in Lubbock Texas. I am currently pursuing a\n        bachaelor degree in Mechanical Engineering as well as a minor in Mathematics and Philosophy.\n        Some of my interst include computers and videogames, playing and listening to music, cooking\n        and eating really good food, and sports. Learn more about me here on my website that I coded\n        and find links to my profiles on other social media.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"spacer-pic\"></div>\n  <div class=\"spacer\"></div>\n\n  <div class=\"content\">\n    <h2 id=\"aboutMe\">About Me</h2>\n    <div class=\"content-bar\"></div>\n    <div class=\"content-threes\">\n      <div *ngFor=\"let items of info\" class=\"content-thing2\">\n        <div\n          class=\"content-thing1\"\n          [class.active]=\"activeClass?.title == items.title\"\n          (click)=\"makeActive(items)\"\n        >\n          <div class=\"content-icon\">\n            <fa-icon [icon]=\"items.icon\" size=\"2x\"></fa-icon>\n          </div>\n          <div class=\"content-title\">\n            <h4>{{ items.title }}</h4>\n          </div>\n          <div class=\"content-shortSum\">\n            {{ items.text }}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"active-items\" *ngIf=\"activeClass\">\n      <div class=\"shortSum\">\n        <p>\n          {{ activeClass.text }}\n        </p>\n      </div>\n      <div class=\"picture-class {{ activeClass.title }}\"></div>\n    </div>\n  </div>\n\n  <div class=\"content2\">\n    <div class=\"content2-pic\"></div>\n    <div class=\"content2-box\">\n      <div class=\"content2-title\">\n        <h2>Where in the World</h2>\n      </div>\n    </div>\n  </div>\n  <app-map></app-map>\n\n  <div class=\"footer\">\n    <div class=\"credit\">\n      <h2>{{ credit }}</h2>\n      <p>Last update: {{ formatDate() }}</p>\n    </div>\n    <div class=\"social\">\n      <a href=\"https://www.facebook.com/adam.aucar\" class=\"Facebook\">\n        <fa-icon [icon]=\"faFacebookF\"></fa-icon>\n      </a>\n      <div class=\"Twitter\">\n        <fa-icon [icon]=\"faTwitter\"></fa-icon>\n      </div>\n      <a href=\"https://www.instagram.com/johnaucar/\" class=\"Instagram\">\n        <fa-icon [icon]=\"faInstagram\"></fa-icon>\n      </a>\n      <a href=\"https://www.linkedin.com/in/john-adam-aucar-81402ab4/\" class=\"LinkedIn\">\n        <fa-icon [icon]=\"faLinkedin\"></fa-icon>\n      </a>\n      <div class=\"Reddit\">\n        <fa-icon [icon]=\"faRedditAlien\"></fa-icon>\n      </div>\n      <a href=\"https://github.com/joaucar\" class=\"Github\">\n        <fa-icon [icon]=\"faGithub\"></fa-icon>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  min-width: 1000px; }\n\n.first-view {\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.first-view-circle {\n  background-image: url('dots.jpg');\n  background-size: cover;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  position: absolute; }\n\n.first-view-text {\n  color: white;\n  font-size: 80px;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  text-shadow: 2px 2px black; }\n\n/*Navigation section*/\n\n.navigation {\n  width: 100vw;\n  position: fixed;\n  background-color: #3a3a3a;\n  top: -5px;\n  z-index: 100;\n  border-bottom: 2px solid black; }\n\n.navigation .nav-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 15px 20px; }\n\n.navigation .nav-content .nav-text {\n      display: -webkit-box;\n      display: flex; }\n\n.navigation .nav-content .nav-left {\n      color: white;\n      background-color: blue;\n      border-radius: 25px;\n      height: 48px;\n      width: 48px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center; }\n\n.navigation .nav-content .nav-right {\n      height: 48px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      color: white; }\n\n.navigation .nav-content .download {\n      width: 220px;\n      height: 50px;\n      background-color: blue;\n      color: white;\n      border-radius: 30px;\n      margin-right: 20px;\n      text-decoration: none;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      text-shadow: 3px 2px black; }\n\n.navigation .nav-content .download:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      box-shadow: 0 5px 8px black; }\n\n.navigation .nav-content .download:active {\n      -webkit-transform: translateY(5px);\n              transform: translateY(5px); }\n\n/* Header section*/\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #3a3a3a;\n  height: 80vh;\n  color: white; }\n\n.header-info {\n  border: 5px solid black;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto 50px;\n  width: 37.5%;\n  height: 450px; }\n\n.header-info h2 {\n  margin-bottom: 0px;\n  font-family: fantasy;\n  font-size: 2em;\n  text-shadow: 5px 3px black; }\n\n.header-info p {\n  font-size: 20px;\n  padding: 0px 10px;\n  text-align: justify; }\n\n.header-picture {\n  background-image: url('fountain.JPG');\n  background-size: cover;\n  background-position: center;\n  border-radius: 25px;\n  width: 400px;\n  height: 450px;\n  margin: auto 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n/* Spacer section */\n\n.spacer {\n  height: 100vh;\n  opacity: 1; }\n\n.spacer-pic {\n  background-image: url('mountain.JPG');\n  background-size: cover;\n  z-index: -1;\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n/*Section of Three Things*/\n\n.content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background-color: #3a3a3a;\n  color: white;\n  height: 90vh; }\n\n#aboutMe {\n  font-size: 40px;\n  font-family: fantasy;\n  text-shadow: 5px 3px black; }\n\n.content-bar {\n  height: 2px;\n  width: 33%;\n  background-color: grey;\n  margin-bottom: 20px; }\n\n.content-threes {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin: 20px 0; }\n\n.content-threes .content-thing2 {\n    width: 28%;\n    height: 250px;\n    background-color: lightgray;\n    color: black;\n    border-radius: 10px; }\n\n.content-threes .content-thing2 .content-thing1 {\n      height: 100%;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: start;\n              justify-content: flex-start;\n      border-radius: 10px; }\n\n.content-threes .content-thing2 .content-thing1 .content-icon {\n        color: white;\n        background-color: black;\n        height: 75px;\n        width: 75px;\n        border-radius: 50%;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        margin-top: 20px; }\n\n.content-threes .content-thing2 .content-thing1 .content-title h4 {\n        margin: 15px;\n        font-size: 25px; }\n\n.content-threes .content-thing2 .content-thing1 .content-shortSum {\n        padding: 5px; }\n\n.content-threes .content-thing2 .active,\n    .content-threes .content-thing2 .content-thing1:hover {\n      color: white;\n      background-color: black; }\n\n.content-threes .content-thing2 .active .content-icon,\n      .content-threes .content-thing2 .content-thing1:hover .content-icon {\n        color: black;\n        background-color: white;\n        cursor: pointer; }\n\n.active-items {\n  height: 200px;\n  width: 700px;\n  margin: 25px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.active-items .shortSum {\n    text-align: justify;\n    font-size: 20px;\n    width: 300px; }\n\n.active-items .shortSum p {\n      margin: 0px; }\n\n.active-items .picture-class {\n    height: 200px;\n    width: 300px; }\n\n.active-items .Future {\n    /*Replace with a picture for Future*/\n    background-color: green; }\n\n.active-items .Education {\n    /*Replace with a picture for Education*/\n    background-color: blue; }\n\n.active-items .Hobbies {\n    /*Replace with a picture for Hobbies*/\n    background-color: orange; }\n\n/*Next Section*/\n\n.content2 {\n  height: 500px;\n  background-color: lightgrey;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.content2 .content2-pic {\n    height: 400px;\n    width: 550px;\n    background-image: url('mountain.JPG');\n    background-position: center;\n    background-size: cover;\n    border-radius: 20px; }\n\n.content2 .content2-box {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-right: 200px; }\n\n/* Footer */\n\n.footer {\n  background-color: #3a3a3a;\n  height: 65px;\n  border-top: 2px solid black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.footer .credit {\n    margin-left: 30px;\n    margin-top: 0px;\n    color: white; }\n\n.footer .credit p,\n    .footer .credit h2 {\n      margin: 0; }\n\n.footer .social {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Facebook {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Facebook:hover {\n    background-color: #4267b2; }\n\n.footer .Instagram {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Instagram:hover {\n    background-image: -webkit-gradient(linear, right top, left bottom, from(#7937a9), color-stop(#e90916), to(#f0c900));\n    background-image: linear-gradient(to bottom left, #7937a9, #e90916, #f0c900); }\n\n.footer .LinkedIn {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .LinkedIn:hover {\n    background-color: #0077b5; }\n\n.footer .Reddit {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Reddit:hover {\n    background-color: #ff4500; }\n\n.footer .Twitter {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Twitter:hover {\n    background-color: #1da1f2; }\n\n.footer .Github {\n    font-size: 30px;\n    color: white;\n    height: 48px;\n    width: 48px;\n    background-color: lightgrey;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0 10px; }\n\n.footer .Github:hover {\n    background-color: black; }\n\n.footer fa-icon {\n    margin-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKb2huXFxteWNvZGVcXFdlYnNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlDQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQkFBMEIsRUFBQTs7QUFHNUIscUJBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLDhCQUE4QixFQUFBOztBQU5oQztJQVFJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsa0JBQWtCLEVBQUE7O0FBVnRCO01BWU0sb0JBQWE7TUFBYixhQUFhLEVBQUE7O0FBWm5CO01BZU0sWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTs7QUF0QnpCO01BeUJNLFlBQVk7TUFDWixvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQTdCbEI7TUFnQ00sWUFBWTtN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QUE7O0FBakc3QjtJQW9HSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFBOztBQTdHbEI7SUFnSEksdUJBQXVCLEVBQUE7O0FBaEgzQjtJQW1ISSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuLmZpcnN0LXZpZXcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maXJzdC12aWV3LWNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9waWN0dXJlcy9kb3RzLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZpcnN0LXZpZXctdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcclxufVxyXG5cclxuLypOYXZpZ2F0aW9uIHNlY3Rpb24qL1xyXG4ubmF2aWdhdGlvbiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xyXG4gIHRvcDogLTVweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC5uYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgLm5hdi10ZXh0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5uYXYtbGVmdCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmF2LXJpZ2h0IHtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmRvd25sb2FkIHtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcclxuICAgIH1cclxuICAgIC5kb3dubG9hZDpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggOHB4IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIC5kb3dubG9hZDphY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEhlYWRlciBzZWN0aW9uKi9cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWRlci1pbmZvIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byA1MHB4O1xyXG4gIHdpZHRoOiAzNy41JTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcbi5oZWFkZXItaW5mbyBoMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtc2hhZG93OiA1cHggM3B4IGJsYWNrO1xyXG59XHJcbi5oZWFkZXItaW5mbyBwIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uaGVhZGVyLXBpY3R1cmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGljdHVyZXMvZm91bnRhaW4uSlBHKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG1hcmdpbjogYXV0byA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3BhY2VyIHNlY3Rpb24gKi9cclxuLnNwYWNlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zcGFjZXItcGljIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BpY3R1cmVzL21vdW50YWluLkpQRyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLypTZWN0aW9uIG9mIFRocmVlIFRoaW5ncyovXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcbiNhYm91dE1lIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbiAgdGV4dC1zaGFkb3c6IDVweCAzcHggYmxhY2s7XHJcbn1cclxuLmNvbnRlbnQtYmFyIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtdGhyZWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIC5jb250ZW50LXRoaW5nMiB7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY29udGVudC10aGluZzEge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLmNvbnRlbnQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQtdGl0bGUgaDQge1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQtc2hvcnRTdW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSxcclxuICAgIC5jb250ZW50LXRoaW5nMTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAuY29udGVudC1pY29uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWl0ZW1zIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDI1cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAuc2hvcnRTdW0ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBpY3R1cmUtY2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLkZ1dHVyZSB7XHJcbiAgICAvKlJlcGxhY2Ugd2l0aCBhIHBpY3R1cmUgZm9yIEZ1dHVyZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLkVkdWNhdGlvbiB7XHJcbiAgICAvKlJlcGxhY2Ugd2l0aCBhIHBpY3R1cmUgZm9yIEVkdWNhdGlvbiovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAuSG9iYmllcyB7XHJcbiAgICAvKlJlcGxhY2Ugd2l0aCBhIHBpY3R1cmUgZm9yIEhvYmJpZXMqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxufVxyXG5cclxuLypOZXh0IFNlY3Rpb24qL1xyXG4uY29udGVudDIge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuY29udGVudDItcGljIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BpY3R1cmVzL21vdW50YWluLkpQRyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5jcmVkaXQge1xyXG4gICAgcCxcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgLkZhY2Vib29rIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICAuRmFjZWJvb2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdiMjtcclxuICB9XHJcbiAgLkluc3RhZ3JhbSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgLkluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICM3OTM3YTksICNlOTA5MTYsICNmMGM5MDApO1xyXG4gIH1cclxuICAuTGlua2VkSW4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG4gIC5MaW5rZWRJbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2I1O1xyXG4gIH1cclxuICAuUmVkZGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICAuUmVkZGl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XHJcbiAgfVxyXG4gIC5Ud2l0dGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICAuVHdpdHRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhMWYyO1xyXG4gIH1cclxuICAuR2l0aHViIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICAuR2l0aHViOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBmYS1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/timeline.service */ "./src/app/services/timeline.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(TLService) {
        this.TLService = TLService;
        this.title = 'Website';
        this.credit = '< by JA />';
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"];
        this.faRedditAlien = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRedditAlien"];
        this.faFacebookF = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookF"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGraduationCap"];
        this.faGlasses = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlasses"];
        this.faRocket = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRocket"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.timeStamp = '0';
        this.month = '0';
        this.year = '0';
        this.day = '0';
        this.info = [
            {
                title: 'Education',
                icon: this.faGraduationCap,
                text: 'Here you can find my educational credintials as well as my work experience and other knowledge that I have collected in my past.'
            },
            {
                title: 'Hobbies',
                icon: this.faGlasses,
                text: ' Here you can find more about what I do in my free time including sports, hobbies, passions and what I am doing right now.'
            },
            {
                title: 'Future',
                icon: this.faRocket,
                text: 'Here you can find where I hope to go with my life and what I hope to accomplish with my time \
         as well as my predictions on the direction the world is heading.'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TLService.getInfo()
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this.response = res;
            _this.timeStamp = _this.response[0].commit.author.date;
        });
        console.log(this.response);
    };
    AppComponent.prototype.formatDate = function () {
        if (this.timeStamp.length > 1) {
            this.month = this.timeStamp.slice(5, 7);
            this.year = this.timeStamp.slice(0, 4);
            this.day = this.timeStamp.slice(8, 10);
        }
        switch (this.month) {
            case '01':
                this.month = 'Jan';
                break;
            case '02':
                this.month = 'Feb';
                break;
            case '03':
                this.month = 'Mar';
                break;
            case '04':
                this.month = 'Apr';
                break;
            case '05':
                this.month = 'May';
                break;
            case '06':
                this.month = 'Jun';
                break;
            case '07':
                this.month = 'Jul';
                break;
            case '08':
                this.month = 'Aug';
                break;
            case '09':
                this.month = 'Sep';
                break;
            case '10':
                this.month = 'Oct';
                break;
            case '11':
                this.month = 'Nov';
                break;
            case '12':
                this.month = 'Dec';
                break;
            default:
                break;
        }
        var date = this.month + ' ' + this.day + ', ' + this.year;
        return date;
    };
    AppComponent.prototype.makeActive = function (selection) {
        this.activeClass = selection;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_timeline_service__WEBPACK_IMPORTED_MODULE_4__["TimelineService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Map\">\n  <img [src]=\"baseUrl\" />\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  width: 100vw; }\n\nimg {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcSm9oblxcbXljb2RlXFxXZWJzaXRlL3NyY1xcYXBwXFxtYXBcXG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");



var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.apiKey = _config__WEBPACK_IMPORTED_MODULE_2__["config"].APIkey;
        this.markers = '';
        this.pins = [
            'Tyler,TX',
            'Lubbock,TX',
            'Chicago,IL',
            'Cape+Town,ZA',
            'Seville,ES',
            'Paris,FR',
            'Omaha+Beach,FR',
            'Santiago+de+Compostela,ES'
            // { address: 'Tyler,TX', lat: 33.577863, lng: -101.855166 },
            // { address: 'Lubbock,TX', lat: 33.577863, lng: -101.855166 }
        ];
        this.baseUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&' +
            'size=500x350&scale=2&markers=color:blue%7Csize:tiny%7C' +
            this.pins.join('%7C') +
            '&key=' +
            this.apiKey;
    }
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/timeline.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/timeline.service.ts ***!
  \**********************************************/
/*! exports provided: TimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TimelineService = /** @class */ (function () {
    function TimelineService(http) {
        this.http = http;
        this.repoURL = 'https://api.github.com/repos/joaucar/Website/commits';
    }
    TimelineService.prototype.getInfo = function () {
        return this.http.get(this.repoURL, httpOptions);
    };
    TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimelineService);
    return TimelineService;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    APIkey: 'AIzaSyBveMA8VF4EDI0FdN3r6k6WyY9pqQZr9dY'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\John\mycode\Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map