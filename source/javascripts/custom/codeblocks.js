$( document ).ready(function() {
    tabindexifyCodeBlocks();
});

function tabindexifyCodeBlocks() {
    var codeblock_pres = $("pre.sourceCode");
    codeblock_pres.each(function() {
        var codeblock_pre = $(this);
        // set tabindex attribute
        codeblock_pre.attr("tabindex", "0");
    });
}
