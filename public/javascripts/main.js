"use strict";var _Message=require("./message.html"),_Navbar=require("./navbar.html"),_Pulse=require("./pulse.html"),_Beat=require("./beat.html");$(function(){var e=new _Message.Message,a=new _Beat.Beat,p=new _Navbar.Navbar,r=new _Pulse.Pulse;$("#app").append(p.el),$("#app").append(r.el),$("#app").append(e.el),$("#pulse-1").append(a.el)});