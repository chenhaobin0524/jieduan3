"use strict";var express=require("express"),router=express.Router(),_require=require("../db/db.js"),find=_require.find,insert=_require.insert,update=_require.update,del=_require.del;router.post("/login",function(n,r){var t,s,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r.append("Access-Control-Allow-Origin","*"),t=n.body,s=t.username,o=t.password,console.log(n.body),e.next=5,regeneratorRuntime.awrap(find("login",{username:s}).then(function(e){1<=e.length?e[0].password==o?r.send("0"):r.send("1"):r.send("2")}));case 5:case"end":return e.stop()}})}),router.get("/login",function(n,r){var t,s,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r.append("Access-Control-Allow-Origin","*"),t=n.query,s=t.username,o=t.password,e.next=4,regeneratorRuntime.awrap(find("login",{username:s}).then(function(e){1<=e.length?e[0].password==o?r.send("0"):r.send("1"):r.send("2")}));case 4:case"end":return e.stop()}})}),router.get("/newpassword",function(n,r){var t,s,o,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r.append("Access-Control-Allow-Origin","*"),t=n.query,s=t.username,o=t.password,a=t.newPassword,console.log(s),e.next=5,regeneratorRuntime.awrap(find("login",{username:s,password:o}).then(function(e){1<=e.length?update("login",{username:s},{password:a}).then(function(e){console.log(e),1==e.result.ok?r.send("0"):r.send("1")}):r.send("2")}));case 5:case"end":return e.stop()}})}),router.get("/userlist",function(e,n){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n.append("Access-Control-Allow-Origin","*"),e.next=3,regeneratorRuntime.awrap(find("login"));case 3:r=e.sent,console.log(r),n.send(r);case 6:case"end":return e.stop()}})}),router.get("/yonghu",function(e,n){var r,t,s,o,a,i,u,d;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n.append("Access-Control-Allow-Origin","*"),e.next=3,regeneratorRuntime.awrap(find("login",{address:"北京"}));case 3:return r=e.sent,e.next=6,regeneratorRuntime.awrap(find("login",{address:"广州"}));case 6:return t=e.sent,e.next=9,regeneratorRuntime.awrap(find("login",{address:"黑龙江"}));case 9:return s=e.sent,e.next=12,regeneratorRuntime.awrap(find("login",{address:"南宁"}));case 12:return o=e.sent,e.next=15,regeneratorRuntime.awrap(find("login",{address:"深圳"}));case 15:return a=e.sent,e.next=18,regeneratorRuntime.awrap(find("login",{address:"成都"}));case 18:return i=e.sent,e.next=21,regeneratorRuntime.awrap(find("login",{address:"上海"}));case 21:u=e.sent,d={bj:r.length,gz:t.length,hlj:s.length,nn:o.length,sz:a.length,cd:i.length,sh:u.length},n.send(d);case 24:case"end":return e.stop()}})}),module.exports=router;