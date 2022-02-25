$(function () {
    $(".login-tab-r a").click(function () {

        $(this).addClass("checked");
        var ok = ".login-tab-l a";
        $(ok).removeClass("checked");
        $(".qrcode-login").hide();
        $(".login-box").show();

    })
    $(".login-tab-l a").click(function () {

        $(this).addClass("checked");
        var ok = ".login-tab-r a";
        $(ok).removeClass("checked");

        $(".qrcode-login").show();
        $(".login-box").hide();

    })

    $(".qrcode-main").mouseenter(function () {
        $(".qrcode-img").animate({
            left: 0

        }, 300, function () {
            $(".qrcode-hlep").show();
        });

    })
    $(".qrcode-main").mouseleave(function () {
        $(".qrcode-img").animate({
            left: 64
        }, 300, function () {
            $(".qrcode-hlep").hide();
        });

    })

    // $(".itxt").focus(function () {
    //     $(".item-fore1").addClass("item-focus");

    // })
    // $("#nloginpwd").blur(function () {
    //     $(".item-fore1").removeClass("item-focus");

    // })

    // 文本框内容清除
    $(".clear-btn1").click(function () {
        $("#loginname").val('');
        $(".clear-btn1").hide();
        $("#loginname").focus();
    })
    $(".clear-btn2").click(function () {
        $("#nloginpwd").val('');
        $(".clear-btn2").hide();
        $("#nloginpwd").focus();
    })
    // 用户名和密码错误部分
    $(".login-btn").click(function () {
        if ($("#loginname").val() != '' && $("#nloginpwd").val() == '') { $(".ms").text("请输入密码"); }
        else if ($("#loginname").val() == '' && $("#nloginpwd").val() == '') { $(".ms").text("请输入用户名和密码") }
        else if ($("#loginname").val() == '' && $("#nloginpwd").val() != '') { $(".ms").text("请输入用户名") };
        $(".msg-error").show();

    });



    $("#loginname").bind("input propertychange", function () {
        if ($("#loginname").val() == '') { $(".clear-btn1").hide(); }
        else
            $(".clear-btn1").show();
    });
    $("#nloginpwd").bind("input propertychange", function () {
        if ($("#nloginpwd").val() == '') { $(".clear-btn2").hide(); }
        else
            $(".clear-btn2").show();
    });

})
