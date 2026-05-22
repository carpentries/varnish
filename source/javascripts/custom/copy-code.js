$( document ).ready(function() {
    $( ".copy-button" ).on( "click", async function( event ) {
        const button = event.target;
        const code = $( button ).siblings( "pre" ).children( "code" ).text();
        await navigator.clipboard.writeText(code);
    });
});
