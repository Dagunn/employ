$(document).ready(function(){$(".form__select").on("click",".form__select-head",function(){$(this).hasClass("open")?($(this).removeClass("open"),$(this).next().fadeOut()):($(".form__select-head").removeClass("open"),$(".form__select-list").fadeOut(),$(this).addClass("open"),$(this).next().fadeIn())}),$(".form__select").on("click",".form__select-item",function(){$(".form__select-head").removeClass("open"),$(this).parent().fadeOut(),$(this).parent().prev().text($(this).text()),$(this).parent().prev().prev().val($(this).text())}),$(document).click(function(e){$(e.target).closest(".form__select").length||($(".form__select-head").removeClass("open"),$(".form__select-list").fadeOut())});let e=document.getElementById("range"),t=document.getElementById("range-value");t.innerHTML=e.value,e.oninput=function(){t.innerHTML=this.value},$("#order-form").on("submit",function(e){let t=!0;$(".error").hide(),$(".form__input").removeClass("invalid");""===$('.form__select input[type="hidden"]').val()&&(t=!1,$(".form__select-head").addClass("invalid"),$("#select-error").show());let s=(e,s,r)=>{let l=e.val().trim();s.test(l)&&""!==l||(t=!1,e.addClass("invalid"),$(r).show())};s($("#e-mail"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"#email-error"),s($("#name"),/^.+$/,"#name-error"),t||e.preventDefault()}),$(".form__input").on("input",function(){let e=$(this),t=e.val().trim(),s="email"===e.attr("type");(s?/^[^\s@]+@[^\s@]+\.[^\s@]+$/:/^.+$/).test(t)?(e.addClass("valid"),s?$("#email-error").hide():$("#name-error").hide()):(e.removeClass("valid"),s?$("#email-error").show():$("#name-error").show())}),$(".form__select-item").on("click",function(){let e=$(this).text();$('.form__select input[type="hidden"]').val(e),$(".form__select-head").text(e).removeClass("invalid"),$("#select-error").hide()}),$('.form__choose input[type="file"]').on("change",function(){let e=$(this).val().split("\\").pop();e?$(this).next("span").text(e):$(this).next("span").text("Прикрепите файл")})});