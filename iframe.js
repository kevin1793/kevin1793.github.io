       console.log('hi');
       // Set data to send over here
        var values = {
            "email": "test" + Math.ceil(Math.random() * 100000) + "@veratad.com", // This field is required to identify existing customers.
            "first_name": "Shenol",
            "last_name": "Hoines",
            "dob": "19460901" // This field must match the following format: YYYYMMDD. This field is also required
        };

        // var values = {
        //     "email": "test" + Math.ceil(Math.random() * 100000) + "@veratad.com", // This field is required to identify existing customers.
        //     "first_name": "TEST",
        //     "last_name": "TEST",
        //     "address": "TEST",
        //     "city": "TEST",
        //     "state": "TEST",
        //     "zip": "TEST",
        //     "dob": "19770208" // This field must match the following format: YYYYMMDD. This field is also required
        // };

        // Set Iframe URL here
        var url = 'https://register.veratad.com/vapewilduk/dcamsplus-v2.php';

        console.log(url);

        var veratadPopup = (function() {
            var veratadModal = null,
                veratadIframe = null,
                veratadForm = null,
                iframeActive = false,
                veratadResult = null;

            var buildForm = function() {
                veratadForm = document.createElement("form");
                veratadForm.action = url;
                veratadForm.method = 'post';
                veratadForm.id = 'veratad-form';
                veratadForm.name = 'veratad_form';
                veratadForm.style.cssText = 'display: none;';
                var addParameter = function(parameter, value) {
                    var element1 = document.createElement("input");
                    element1.type = 'hidden';
                    element1.name = parameter;
                    element1.value = value;
                    veratadForm.appendChild(element1);
                };
                for (var k in values) {
                    if (values.hasOwnProperty(k)) {
                        addParameter(k, values[k]);
                    }
                }
                document.body.appendChild(veratadForm);
            };

            var buildIframe = function() {
                veratadIframe = document.createElement("iframe");
                veratadIframe.id = "veratad-iframe";
                veratadIframe.name = "veratad_iframe";
                veratadIframe.frameBorder = 0;
                veratadIframe.style.cssText = "display: none;";
                veratadModal = document.createElement("div");
                veratadModal.id = "veratad-modal";
                veratadModal.style.cssText = "display: none;";
                veratadModal.appendChild(veratadIframe);
                document.body.appendChild(veratadModal);
                var html = '<body><script>window.top.postMessage("iframe-loaded", "*");</script></body>';
                veratadIframe.contentWindow.document.open();
                veratadIframe.contentWindow.document.write(html);
                veratadIframe.contentWindow.document.close();
            };

            var init = function() {
                buildForm();
                buildIframe();
                //setTimeout(triggerIframe, 500);
            };

            var triggerIframe = function() {
                if(iframeActive === true) {
                    document.getElementById('veratad-form').target = 'veratad_iframe';
                    document.getElementById('veratad-modal').style.cssText = "background-color: rgba(0, 0, 0, 0.5); z-index: 999999999; width: 100%; height: 100%; position: fixed; top: 0; left: 0;";
                    document.getElementById('veratad-iframe').style.cssText = "background: #fff; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 30%; max-width: 1100px; min-width: 300px; height: 500px; min-height: 500px; border: 0; border-radius: 6px; outline: 0; margin: auto; padding: 0;";
                } else {
                    document.getElementById('veratad-form').target = '_top';
                }
                document.getElementById('veratad-form').submit();
            };

            var triggerDeniedMsg = function() {
                function addCss(fileName) {

                var head = document.head;
                var link = document.createElement("link");

                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = fileName;

                head.appendChild(link);
                }

                addCss('dcamsplus/css/style.css');
                addCss('dcamsplus/vendor/bootstrap/css/bootstrap.min.css');
                addCss('dcamsplus/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
                addCss('dcamsplus/vendor/select2/select2.min.css');
                addCss('dcamsplus/vendor/select2/select2.css');

                veratadDenied = document.createElement("div");
                veratadDenied.id = "veratad-denied";
                veratadModal.appendChild(veratadDenied);

                veratadDeniedClose = document.createElement('div');
                veratadDeniedClose.id = "close";
                veratadDeniedClose.innerHTML = '<a href=\"#\" onclick=\"window.top.postMessage(\'close-iframe\', \'*\'); return false;\">x close</a>';
                veratadDenied.appendChild(veratadDeniedClose);

                veratadDeniedMsg = document.createElement('div');
                veratadDeniedMsg.id = "denied-msg";
                veratadDeniedMsg.innerHTML = "<span class=\"contact100-form-title\">Pending Review</span><p>We are sorry, your submission is currently under review.</p>";
                veratadDenied.appendChild(veratadDeniedMsg);

                veratadDeniedCloseBtn = document.createElement('div');
                veratadDeniedCloseBtn.id = "container-contact100-form-btn";
                veratadDeniedCloseBtn.innerHTML = '<button href=\"#\" class=\"contact100-form-btn\" onclick=\"window.top.postMessage(\'close-iframe\', \'*\'); return false;\"><span>Close <i class=\'fa fa-times m-l-7\' aria-hidden=\'true\'></i></span></button>';
                veratadDeniedMsg.appendChild(veratadDeniedCloseBtn);

                document.getElementById('veratad-modal').style.cssText = "background-color: rgba(0, 0, 0, 0.5); z-index: 999999999; width: 100%; height: 100%; position: fixed; top: 0; left: 0;";
                document.getElementById('veratad-denied').style.cssText = "background: #fff; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 30%; max-width: 1100px; min-width: 300px; height: 350px; min-height: 350px; border: 0; border-radius: 6px; outline: 0; margin: auto; padding: 0;";
                document.getElementById('close').style.cssText = "float: right; font-size: 1.5rem; font-weight: 700; line-height: 1; color: #000; text-shadow: 0 1px 0 #fff; opacity: .5;"
                document.getElementById('close').getElementsByTagName('a')[0].style.cssText = "color: #000; padding: 15px; font-size: 16px; display: block;"
                document.getElementById('denied-msg').style.cssText = "margin: 50px auto 80px; padding: 5px 20px 5px 20px; width: 90%;"
                document.getElementById('container-contact100-form-btn').style.cssText = "width: 100%; text-align: center; padding-top: 20px;";
            };

            var messageReceived = function(event) {

                console.log(event);

                var removeIframe = function() {
                    veratadIframe.parentElement.removeChild(veratadIframe);
                    veratadModal.parentElement.removeChild(veratadModal);
                    iframeActive = false;
                    init();
                };
                if ('iframe-loaded' == event.data) {
                    iframeActive = true;
                }
                if ("approved" == event.data) {
                    alert('Approved');
                    removeIframe();
                    veratadResult = 'APPROVED';

                }
                if ("denied" == event.data) {
                    removeIframe();
                    veratadResult = 'DENIED';
                    console.log('Denied');
                    alert('Denied');
                }
                if ("close-iframe" == event.data) {
                    removeIframe();
                }
            };

            var returnResult = function() {
                return veratadResult;
            };

            return {
                init: init,
                action: messageReceived,
                open: triggerIframe,
                result: returnResult
            };
        })();

        (function() {
            if(window.addEventListener) {
                window.addEventListener("message", veratadPopup.action, false);
                document.addEventListener("DOMContentLoaded", veratadPopup.init);
            } else if(window.attachEvent) {
                window.attachEvent("onmessage", veratadPopup.action);
                window.attachEvent('onload', veratadPopup.init);
            } else {
                window.onload = veratadPopup.init();
            }
        })();