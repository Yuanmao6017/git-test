$(function () {


    // 问题1；txt包含在input里面却不受input的影响

    //上部效果





    // 手机电话部分
    $("#form-phone").click(function () {

        $("#form-phone").focus();
        $("txt").hide();
        var num = $(".form-item .field").val();


        if (num == "") {
            $(".from-phone-error").removeClass("num1")
            $(".from-phone-error").text("验证完成后，你可以使用该手机登录或找回密码")
        }
        else {
            $(".form-item .i-status").hide()

        }

    })

    $("txt").click(function () {
        $("#form-phone").focus();
        $("txt").hide();
        var num = $(".form-item .field").val();
        if (num == "") {
            $(".from-phone-error").removeClass("num1")
            $(".from-phone-error").text("验证完成后，你可以使用该手机登录或找回密码")
        }

    })
    // $("#form-phone").focus(function () {
    //     $("txt").hide();
    // })
    $("#form-phone").focus(function () {
        var num = $(".form-item .field").val();
        if (num != "") {
            $("txt").hide();
        }
        $(".clear-btn1").hide();

    })
    // 清除按钮部分
    $(".clear-btn1").click(function () {

        $(".form-item .field").val("");
        $("#form-phone").focus();
        $(".from-phone-error").removeClass("num1")
        $(".from-phone-error").text("验证完成后，你可以使用该手机登录或找回密码")


    })
    var phoneright;
    // 焦点离开
    $(".item-input-wrap").blur(function () {
        $(".clear-btn1").hide()

    })

    $("#form-phone").blur(function () {

        $(".from-phone-error").text("")

        var num = $(".form-item .field").val();
        if (num == "") {
            $("txt").show();

        }

        else if (num.length == 11 && !isNaN(num)) {
            $(".clear-btn1").hide()
            $(".form-item .i-status").show(function () {

                phoneright = 1;
            })

        }

        else {
            $(".from-phone-error").show()
            $(".from-phone-error").text("格式错误")
            $(".from-phone-error").addClass("num1")

        }

    })

    // 中国0086

    $("#select-country").click(function () {
        $(".arrow").toggleClass("down");
        if ($("#country_code_layer").is(':hidden')) { $("#country_code_layer").show(); }
        else {
            $("#country_code_layer").hide();

        }
    })
    $(document).click(function () {
        // $(".clear-btn1").hide()



        $("#country_code_layer").hide();
        if ($("#country_code_layer").is(':hidden')) { $(".arrow").removeClass("down"); }
    })
    $("#select-country").click(function () {
        return false;
    })
    // $("document").click(function () {
    //     $(".arrow").toggleClass("down");
    //     $("#country_code_layer").hide();
    // })
    // 阻止冒泡
    $("#country_code_layer").click(function () {
        return false;
    })
    $("#country_code_layer").click(function () {
        $("#country_code_layer").show();
    })


    //让容物不跟随主体，分离出来
    $(".item-input-wrap").click(function () {
        return false;
    })

    // 下一步按钮部分

    var xuexiao1;
    $("#step1-next").click(function () {

        var num = $(".form-item .field").val();
        if (num == "") {
            $(".from-phone-error").text("请输入手机号")
            $(".from-phone-error").addClass("num1")
        }
        else if (phoneright && xuexiao1) {
            //绿勾消失
            $(".form-item .i-status").hide();
            //------------------------------
            $(".pro-line1").addClass("person-cur-line")
            $(".pro-step2 .step-index").addClass("step-cur")
            // .step-desc-cur  正确的文字的类名
            $(".pro-step2 .step-desc").addClass("step-desc-cur")

            $(".cur-step .step-index").addClass("cur-arrow")
            $(".cur-step .step-index").removeClass("step-index")
            $(".cur-step .cur-arrow").text("")
            //交换部分
            $(".reg-form").hide();
            $("#step2-wrap").show();
        }
        else alert("亏你想的出来")
    })


    //让勾消失的键盘事件
    $("#form-phone").keydown(function (event) {
        $(".clear-btn1").show()
        var num = $(".form-item .field").val();
        if (num.length == 1) {
            $(".from-phone-error").removeClass("num1")
            $(".from-phone-error").text("验证完成后，你可以使用该手机登录或找回密码")
            $(".clear-btn1").hide();
        }
        if (event.keyCode === 8) {
            $(".form-item .i-status").hide()

        }


        else {
            $(".clear-btn1").show()
        }
    })
    $(".form-item-getcode").click(function () {

        var xuexiao = prompt("你来自哪个学校")
        if (xuexiao == "重庆邮电大学") {
            alert("恭喜你验证通过")
            xuexiao1 = 1;

        }
        else alert("焯，你输的这么彻底!!")

    })
    //填写信息部分
    $("#form-account").focus(function () {
        $(".input-tip1 span").prepend("<i class='i-def'></i>支持中文、英文、数字、“-”、“_”的组合，4-20个字符")
    })
    $("#form-account").blur(function () {
        $(".input-tip1 span").empty("<i class='i-def'></i>支持中文、英文、数字、“-”、“_”的组合，4-20个字符")
    })
    $("#form-pwd").focus(function () {
        $(".input-tip2 span").empty()
        $(".input-tip2 span").prepend("<i class='i-def'></i>建议使用字母、数字和符号两种及以上的组合，8-20个字符")
    })
    $("#form-pwd").blur(function () {
        $(".input-tip2 span").empty()
        var pwd = $("#form-pwd").val()
        $(".form-item capslock-tip").hide()
        if (pwd.length > 0) {

            $(".input-tip2 span").prepend("<i class='i-error'></i>密码长度只能在8-20个字符之间")
            $(".input-tip2 span").addClass("error")
        }


    })
    $("#form-equalTopwd").focus(function () {
        $(".input-tip3 span").prepend("<i class='i-def'></i>请再次输入密码")
    })
    $("#form-equalTopwd").blur(function () {
        $(".input-tip3 span").empty()
    })
    $("#form-email").focus(function () {
        $(".input-tip4 span").prepend("<i class='i-def'></i>验证完成后，你可以使用该邮箱登录")
    })
    $("#form-email").blur(function () {
        $(".input-tip4 span").empty()
    })
    var onoff = 1
    $("#form-pwd").keydown(function (e) {
        $(".input-tip2 span").empty()
        $(".input-tip2 span").prepend("<i class='i-error'></i>请将密码设置为8-20个字符，并且由字母、数字和符号两种及以上组合")
        $(".input-tip2 span").addClass("error")


        if (e.which == 20 || e.keyCode == 20) {
            //console.log("小写"); //按一下大写，再按一下小写
            if (onoff == 1) {
                $("#pwd").show()
                onoff = 0
            } else {
                $("#pwd").hide()
                onoff = 1
            }
        }

    })
    // 删除按钮部分



})
重庆邮电大学
{/* <i  class='i-error' ></i > */ }
