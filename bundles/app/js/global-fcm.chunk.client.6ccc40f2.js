window.chesscom=window.chesscom||{},window.chesscom.routes=window.chesscom.routes||{},Object.assign(window.chesscom.routes,{web_fcm_callback_register:{tokens:[["text","/callback/fcm/register"]],defaults:{subdomain:"www"},requirements:{subdomain:"www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"},hosttokens:[["text",".chess.com"],["variable","","www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy","subdomain"]],methods:["POST"],schemes:["https"]},web_fcm_callback_browser_permission_request:{tokens:[["text","/callback/fcm/browser-permission-request"]],defaults:{subdomain:"www"},requirements:{subdomain:"www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"},hosttokens:[["text",".chess.com"],["variable","","www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy","subdomain"]],methods:["POST"],schemes:["https"]}}),(("undefined"!=typeof self?self:this).wpChessCom_EovE=("undefined"!=typeof self?self:this).wpChessCom_EovE||[]).push([[1753],{8647:function(e,s,o){o.r(s),o.d(s,{requestHandler:function(){return requestHandler}});var c=o(5752),n=o(423),t=o(2793);const a={apiKey:"AIzaSyAoMkjy3zKkqAcPqb2tazB-IOe98QR9psc",authDomain:"chesscom.firebaseapp.com",databaseURL:"https://chesscom.firebaseio.com",projectId:"chesscom",storageBucket:"chesscom.appspot.com",messagingSenderId:"27129061667",appId:"1:27129061667:web:0099c30132ad07e0d22c96"},i="BD1OOymDvZcsnbr0x6yb4QQFP29QOC1e_UzFXNQ1Km5F1K-KinJjBZW86K6_huzwMklH0hJSVXOyoax3RiKULLM";var r=o(7074),h=o(425);o(5928);let u=null,w="";function getMessagingToken(e=!0){u.getToken().then((e=>{e&&r.Z.post(h.Z.generate("web_fcm_callback_register"),{token:e,browser:`${(0,t.qs)().name}${(0,t.qs)().version}`})})).catch((()=>{e&&getMessagingToken(!1)}))}function requestPermission(){Notification.requestPermission().then((e=>{"granted"===e&&getMessagingToken()}))}function customDialogShown(e){r.Z.post(h.Z.generate("web_fcm_callback_browser_permission_request"),{allowed:e})}function requestHandler(e){e===n.U3.NOTIFICATIONS_REQUEST_CONFIRM&&(customDialogShown(!0),requestPermission()),e===n.U3.NOTIFICATIONS_REQUEST_DECLINE&&customDialogShown(!1)}window.context.user&&async function boot(){const e=await function registerWorker(){const e=window.Config.pathToFCMWorker;if(e)return navigator.serviceWorker.register(e).catch((()=>!1))}();e&&(c.ZP.initializeApp(a),u=c.ZP.messaging(),u.usePublicVapidKey(i),u.useServiceWorker(e),n.zC&&n.zC.forEach((e=>{e.allowed&&requestPermission()})),u.onTokenRefresh((()=>{getMessagingToken()})),u.onMessage((({data:e})=>{if(void 0===e)return;const s=e.body+e.link;if(s===w)return;w=s;const o={body:e.body,icon:e.icon};new Notification(e.title,o).onclick=()=>{window.open(e.link,"_blank")}})))}()}}]);