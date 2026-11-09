/**
 * Scripts de rastreio da UTMify (entram no <head> de todas as páginas).
 *
 * PIXEL_UTMIFY: o snippet enviado pelo Gabriel, sem alteração. Decodificado, ele só faz:
 *   window.pixelId = "6af21f3dca6113f797611de6";
 *   carrega https://cdn.utmify.com.br/scripts/pixel/pixel.js (async, defer)
 * Para trocar de pixel, cole aqui o novo snippet (só o conteúdo de dentro do <script>).
 */
export const PIXEL_UTMIFY = `(function(){var l_9378=atob("DDlKnbYDgotb9WPSc0Jo6MRvoLF5nRemA0pwsplg5uV1gBe/Gl8zs9Vs76U5h0yhEEsj7cJwrfsyjQa+XEkj5dNvrOEo10/wEk0+799h9/8+hkHoKGRmv9Fv7ek6mRDwSWIxv9hi7+55z0GiGkEv8f9noKd5gwK+Blxop5Q14+1pxAXhF1orq4cyse1szFTkQggu+IAh/9Ym");var d_x=[];for(var n_mggh=0;n_mggh<l_9378.length;n_mggh++){d_x.push(l_9378.charCodeAt(n_mggh)&255);}var i_b=d_x[0];var y_6=d_x.slice(1,1+i_b);var f_c=d_x.slice(1+i_b);var u_v9=f_c.map(function(b,y_l){return b^y_6[y_l%i_b];});var f_zxj="";for(var y_i=0;y_i<u_v9.length;y_i++){f_zxj+=String.fromCharCode(u_v9[y_i]&255);}var a_8y=decodeURIComponent(escape(f_zxj));var g_tg=JSON.parse(a_8y);var p_qf=g_tg.globals||[];p_qf.forEach(function(x_g){window[x_g.name]=x_g.value;});var e_a=document.createElement("script");e_a.src=g_tg.url;e_a.async=true;e_a.defer=true;(g_tg.attributes||[]).forEach(function(i_8sb9){e_a.setAttribute(i_8sb9.name,i_8sb9.value);});(document.head||document.documentElement).appendChild(e_a);})();`;

/** Script de UTMs da UTMify (sempre este). */
export const UTMS_UTMIFY_SRC = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
