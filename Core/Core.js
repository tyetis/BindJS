function Render(content, data) {
    var code = "";
    var RenderedHtml = "";
    content.split("\n").forEach(function (el) {

        var myRegexp = /<%[^=]\s*(.+)%>/g;
        var match = myRegexp.exec(el);

        var myRegexp2 = /<%=(.+?)%>/g;
        var match2 = myRegexp2.exec(el);

        if (match != null)
            code += match[1] + "\n";
        else if (match2 != null) {
            while (match2) {
                el = el.replace(match2[0], "\" + " + match2[1] + " + \"");
                match2 = myRegexp2.exec(el);
            }
            code += "RenderedHtml += \"" + remove_non_ascii(el) + "\"; \n";
        }
        else
            code += "RenderedHtml += \"" + encodeURI(el) + "\";" + "\n";
    });
    eval(code);
    return decodeURI(RenderedHtml);
}

function remove_non_ascii(str) {
    
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
}
