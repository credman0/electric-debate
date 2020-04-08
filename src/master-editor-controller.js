MasterEditorController = {togetherJSActive:true}

MasterEditorController.generateTogetherJSSettings = function (subwindow) {
    subwindow.TogetherJSConfig_findRoom = "my_site_com_users";
    subwindow.TogetherJSConfig_hubBase = "https://outstanding-internal-allosaurus.glitch.me/";
    subwindow.TogetherJSConfig_dontShowClicks = true;
    subwindow.TogetherJSConfig_toolName = "Collaboration";
    subwindow.TogetherJSConfig_disableWebRTC = true;
    subwindow.TogetherJSConfig_autoStart = this.togetherJSActive;
    subwindow.TogetherJSConfig_suppressJoinConfirmation = true;
    subwindow.TogetherJSConfig_suppressInvite = true;
    subwindow.TogetherJSConfig_getUserName = "colin";
}

MasterEditorController.toggleTogetherJSActive = function (subwindow) {
    subwindow.TogetherJS(null);
}
$( document ).ready(function() {
    $("#collaboration").click(function() {
        MasterEditorController.togetherJSActive = !MasterEditorController.togetherJSActive;
        MasterEditorController.toggleTogetherJSActive(document.getElementById('currentEditorPane').contentWindow);
    });
});
