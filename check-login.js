// 校验登录状态，未登录则强制跳转到同目录下的 login.html
if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "login.html";
}
