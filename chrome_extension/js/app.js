chrome.extension.sendRequest({}, function(response) {
    $("body").live('DOMNodeInserted', function (e) {
        var chatWindowSelectors = "div.pt:visible"
        var chatWindow = $("#canvas_frame").contents().find(chatWindowSelectors);
        var chatifyWindow = $("#canvas_frame").contents().find('#chatify');
        if (chatWindow.length == 1 && chatifyWindow.length == 0) {            
            /** 
             * Dummy buddies
             * 
             * Needs to fetch Contact groups and Buddies using Google Contacts API 
             */
            chatWindow.parent().append(
                 "<div id='chatify'><table cellpadding='0' class='cf vH' id=':ig' tabindex='0' role='listbox' style='width:172px;'>"
                +"    <colgroup><col class='vA'><col class='vw'><col id=':if' class='vo vp'></colgroup>"
                +"    <tbody>"
                +"        <tr style='cursor:pointer'>"
                +"            <td align='center' style='border-bottom:1px solid #666666;padding-bottom:3px;color:#666666;'>▼</td>"
                +"            <td class='vr' style='border-bottom:1px solid #666666;padding-bottom:3px;'><span class='HHshnc' style='font-weight:bold;color:#666666;'>Coworkers</span></td>"
                +"        </tr>"
                +"        <tr class='vI'>"
                +"            <td style='padding-top:3px;'><img class='vt c6 BUw1sf' id=':h7' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':h5' class='vr' colspan='2' style='padding-top:3px;'><span id=':h6' class='HHshnc '>abhijeetpotadar06</span><span id=':h2' style='display:none' class='vu'>&nbsp; Invited</span></td>"
                +"        </tr>"
                +"        <tr id=':h4' class='vm '>"
                +"            <td></td>"
                +"            <td colspan='2' class='vn'><span id=':h3' class='vG'>'Friendship without self interest is one of the rare and beautiful things in life.'</span></td>"
                +"        </tr>"
                +"        <tr class='vI'>"
                +"            <td><img class='vt c6 BUw1sf' id=':gy' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':gw' class='vr' colspan='2'><span id=':gx' class='HHshnc '>abhishek.amberkar@gmail.com</span></td>"
                +"        </tr>"
                +"    </tbody>"
                +"    <tbody>"
                +"        <tr style='cursor:pointer'>"
                +"            <td align='center' style='border-bottom:1px solid #666666;padding-bottom:3px;padding-top:5px;color:#666666;'>►</td>"
                +"            <td class='vr' style='border-bottom:1px solid #666666;padding-bottom:3px;padding-top:5px;'><span class='HHshnc' style='font-weight:bold;color:#666666;'>Classmates</span></td>"
                +"        </tr>"
                +"        <tr class='vI' style='display:none'>"
                +"            <td><img class='vt c6 BUw1sf' id=':gy' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':gw' class='vr' colspan='2'><span id=':gx' class='HHshnc '>Rob Spectre</span></td>"
                +"        </tr>"
                +"        <tr class='vI' style='display:none'>"
                +"            <td><img class='vt c6 BUw1sf' id=':gy' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':gw' class='vr' colspan='2'><span id=':gx' class='HHshnc '>Rob strong</span></td>"
                +"        </tr>"
                +"    </tbody>"
                +"    <tbody>"
                +"        <tr style='cursor:pointer'>"
                +"            <td align='center' style='border-bottom:1px solid #666666;padding-bottom:3px;padding-top:5px;color:#666666;'>►</td>"
                +"            <td class='vr' style='border-bottom:1px solid #666666;padding-bottom:3px;padding-top:5px;'><span class='HHshnc' style='font-weight:bold;color:#666666;'>Relatives</span></td>"
                +"        </tr>"
                +"        <tr class='vI' style='display:none'>"
                +"            <td><img class='vt c6 BUw1sf' id=':gy' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':gw' class='vr' colspan='2'><span id=':gx' class='HHshnc '>Amar Gharat</span></td>"
                +"        </tr>"
                +"        <tr class='vI' style='display:none'>"
                +"            <td><img class='vt c6 BUw1sf' id=':gy' src='images/cleardot.gif' alt='Available'></td>"
                +"            <td id=':gw' class='vr' colspan='2'><span id=':gx' class='HHshnc '>Prerna Gharat</span></td>"
                +"        </tr>"
                +"    </tbody>"
                +"</table></div>"
            );
            var chatifyWindow = $("#canvas_frame").contents().find('#chatify');
        }

        chatifyWindow.find('table > tbody').each (function () {
            $(this).click(function () {
                $(this).find('tr:not(:first)').toggle();
                if ($(this).find('tr > td:first').html() == '▼') {
                    $(this).find('tr > td:first').html('►');
                } else {
                    $(this).find('tr > td:first').html('▼');
                }
            });
        });
    });

    /* This hides the existing chat buddies */
    var css = "";
    css += "div.pt > div:nth-child(4) > div:nth-child(1) > table > tbody:nth-child(n+3) { display:none; }\n";
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
});


