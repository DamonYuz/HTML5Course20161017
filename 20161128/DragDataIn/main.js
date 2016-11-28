/**
 * Created by plter on 2016/11/28.
 */

(function () {



    function tryToReadText(dt) {
        if (dt.types.indexOf("text/plain") > -1) {
            var textContent = dt.getData("text/plain");
            area.html(textContent);
        }
    }

    area.on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();
        var self = this;

        tryToReadText(e.originalEvent.dataTransfer);
    });


})();