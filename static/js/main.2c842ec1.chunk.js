(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(t,e,c){t.exports={item:"ProductItem_item__wpRD3",price:"ProductItem_price__A_dB1",actions:"ProductItem_actions__2NSNV"}},13:function(t,e,c){t.exports={notification:"Notification_notification__CT-0f",error:"Notification_error__1MkfD",success:"Notification_success__1Uwx1"}},17:function(t,e,c){t.exports={button:"CartButton_button__j2ChZ",badge:"CartButton_badge__1Z_mw"}},22:function(t,e,c){t.exports={card:"Card_card__2Of6S"}},23:function(t,e,c){t.exports={cart:"Cart_cart__3vOFk"}},24:function(t,e,c){t.exports={header:"MainHeader_header__1uOv0"}},25:function(t,e,c){t.exports={products:"Products_products__3K1Wj"}},37:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(9),r=c.n(n),a=c(3),i=c(7),s=Object(i.b)({name:"cart",initialState:{isShoppingCartVisible:!1,notification:null},reducers:{toggleShoppingCart:function(t){t.isShoppingCartVisible=!t.isShoppingCartVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),o=s.actions,u=s.reducer,d=c(6),l=c(11),j=[{id:"e1",title:"Car",price:600,description:"This is a first product - amazing!"},{id:"e2",title:"Machine",price:250,description:"This is a second product - amazing!"},{id:"e3",title:"Bike",price:200,description:"This is a 3rd product - amazing!"}],b=Object(i.b)({name:"cartProducts",initialState:{cartProducts:[],changed:!1},reducers:{addToCart:function(t,e){var c=t.cartProducts.find((function(t){return t.id===e.payload.id}));t.changed=!0,c?(c.quantity++,c.total=c.price*c.quantity):t.cartProducts.push(e.payload)},replaceCartData:function(t,e){t.cartProducts=e.payload.cartProducts},increaseQuantity:function(t,e){t.changed=!0;var c=t.cartProducts.find((function(t){return t.title===e.payload}));c.quantity++,c.total=c.price*c.quantity},decreaseQuantity:function(t,e){t.changed=!0;var c=t.cartProducts.find((function(t){return t.title===e.payload}));c.quantity--,c.total=c.price*c.quantity,0===c.quantity&&(t.cartProducts=t.cartProducts.filter((function(t){return 0!==t.quantity})))}}}),p=b.actions,h=b.reducer,f=Object(i.a)({reducer:{myCart:u,myProducts:h}}),O=(c(37),c(1)),m=c(22),x=c.n(m),_=c(0),g=function(t){return Object(_.jsx)("section",{className:"".concat(x.a.card," ").concat(t.className?t.className:""),children:t.children})},y=c(23),C=c.n(y),v=c(5),N=c.n(v),P=function(t){var e=Object(a.b)(),c=t.item,n=c.title,r=c.quantity,i=c.total,s=c.price;return Object(_.jsxs)("li",{className:N.a.item,children:[Object(_.jsxs)("header",{children:[Object(_.jsx)("h3",{children:n}),Object(_.jsxs)("div",{className:N.a.price,children:["$",i.toFixed(2)," ",Object(_.jsxs)("span",{className:N.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(_.jsxs)("div",{className:N.a.details,children:[Object(_.jsxs)("div",{className:N.a.quantity,children:["x ",Object(_.jsx)("span",{children:r})]}),Object(_.jsxs)("div",{className:N.a.actions,children:[Object(_.jsx)("button",{onClick:function(){e(p.decreaseQuantity(n))},children:"-"}),Object(_.jsx)("button",{onClick:function(){e(p.increaseQuantity(n))},children:"+"})]})]})]})},w=function(t){var e=Object(a.c)((function(t){return t.myCart.isShoppingCartVisible})),c=Object(a.c)((function(t){return t.myProducts.cartProducts})),n=c.map((function(t){return Object(_.jsx)(P,{item:{title:t.title,quantity:t.quantity,total:t.total,price:t.price}},t.id)}));return Object(_.jsx)(O.Fragment,{children:e&&Object(_.jsxs)(g,{className:C.a.cart,children:[Object(_.jsx)("h2",{children:"Your Shopping Cart"}),Object(_.jsxs)("ul",{children:[0===c.length&&Object(_.jsx)("p",{children:"Cart is Empty. Start Shopping...."}),c.length>0&&n]})]})})},S=c(17),k=c.n(S),q=function(t){var e=Object(a.c)((function(t){return t.myProducts.cartProducts})),c=Object(a.b)();return Object(_.jsxs)("button",{onClick:function(){c(o.toggleShoppingCart())},className:k.a.button,children:[Object(_.jsx)("span",{children:"My Cart"}),Object(_.jsx)("span",{className:k.a.badge,children:e.length})]})},F=c(24),I=c.n(F),D=function(t){return Object(_.jsxs)("header",{className:I.a.header,children:[Object(_.jsx)("h1",{children:"ReduxCart"}),Object(_.jsx)("nav",{children:Object(_.jsx)("ul",{children:Object(_.jsx)("li",{children:Object(_.jsx)(q,{})})})})]})},E=function(t){return Object(_.jsxs)(O.Fragment,{children:[Object(_.jsx)(D,{}),Object(_.jsx)("main",{children:t.children})]})},T=c(8),B=c(12),Q=c.n(B),V=function(t){var e=Object(a.b)(),c=t.id,n=t.title,r=t.price,i=t.description;return Object(_.jsx)("li",{className:Q.a.item,children:Object(_.jsxs)(g,{children:[Object(_.jsxs)("header",{children:[Object(_.jsx)("h3",{children:n}),Object(_.jsxs)("div",{className:Q.a.price,children:["$",r.toFixed(2)]})]}),Object(_.jsx)("p",{children:i}),Object(_.jsx)("div",{className:Q.a.actions,children:Object(_.jsx)("button",{onClick:function(){var t=j.find((function(t){return t.id===c})),n=Object(T.a)(Object(T.a)({},t),{},{quantity:1,total:1*t.price});e(p.addToCart(n))},children:"Add to Cart"})})]})})},z=c(25),J=c.n(z),M=function(t){var e=j.map((function(t){return Object(_.jsx)(V,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}));return Object(_.jsxs)("section",{className:J.a.products,children:[Object(_.jsx)("h2",{children:"Buy your favorite products"}),Object(_.jsx)("ul",{children:e})]})},U=c(13),$=c.n(U),A=function(t){var e="";"error"===t.status&&(e=$.a.error),"success"===t.status&&(e=$.a.success);var c="".concat($.a.notification," ").concat(e);return Object(_.jsxs)("section",{className:c,children:[Object(_.jsx)("h2",{children:t.title}),Object(_.jsx)("p",{children:t.message})]})},H=!0;var R=function(){var t=Object(a.c)((function(t){return t.myProducts.cartProducts})),e=Object(a.c)((function(t){return t.myProducts.changed})),c=Object(a.c)((function(t){return t.myCart.notification})),n=Object(a.b)();return Object(O.useEffect)((function(){n(function(){var t=Object(l.a)(Object(d.a)().mark((function t(e){var c,n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(l.a)(Object(d.a)().mark((function t(){var c,n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://cartproducts-d4fbb-default-rtdb.firebaseio.com/carts.json");case 3:if((c=t.sent).ok){t.next=6;break}throw new Error("Couldn't fetch Cart Data Failed");case 6:return t.next=8,c.json();case 8:return n=t.sent,t.abrupt("return",n);case 12:t.prev=12,t.t0=t.catch(0),e(o.showNotification({status:"error",title:"Error!",message:"Fetching Cart Data Failed"}));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),t.next=3,c();case 3:n=t.sent,e(b.actions.replaceCartData({cartProducts:null===n||void 0===n?[]:n,changed:!1}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[n]),Object(O.useEffect)((function(){H?H=!1:e&&n(function(t){return function(e){e(o.showNotification({status:"pending",title:"sending",message:"sending cart data"}));var c=function(){var c=Object(l.a)(Object(d.a)().mark((function c(){return Object(d.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch("https://cartproducts-d4fbb-default-rtdb.firebaseio.com/carts.json",{method:"PUT",body:JSON.stringify(t)});case 3:if(c.sent.ok){c.next=6;break}throw new Error("Sending Cart Data Failed");case 6:e(o.showNotification({status:"success",title:"Success!",message:"Sent Cart Data Successfully"})),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),e(o.showNotification({status:"error",title:"Error!",message:"Sending Cart Data Failed"}));case 12:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(){return c.apply(this,arguments)}}();c()}}(t))}),[t,n,e]),Object(_.jsxs)(O.Fragment,{children:[c&&Object(_.jsx)(A,{status:c.status,title:c.title,message:c.message}),Object(_.jsxs)(E,{children:[Object(_.jsx)(w,{}),Object(_.jsx)(M,{})]})]})};r.a.render(Object(_.jsx)(a.a,{store:f,children:Object(_.jsx)(R,{})}),document.getElementById("root"))},5:function(t,e,c){t.exports={item:"CartItem_item__H5vJw",details:"CartItem_details__3PtuI",quantity:"CartItem_quantity__QnFdu",price:"CartItem_price__3I6os",itemprice:"CartItem_itemprice__3yhmY",actions:"CartItem_actions__2uzDU"}}},[[39,1,2]]]);
//# sourceMappingURL=main.2c842ec1.chunk.js.map