

$(function () {
    console.log('content script ready')
    // console.log(a)

    // window.postMessage({ type: "FROM_PAGE", text: "来自网页的问候！" }, "*");

    // var port = chrome.runtime.connect();



    $(document).on("click", ".hwid-getAuthCode", function (e) {
        var v = '234234'
        $(this).parent().find('input').val(v)
    });

});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.cmd == 'test') alert(request.value);
//     sendResponse('我收到了你的消息！');
// });