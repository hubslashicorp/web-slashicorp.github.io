$('bpoly()').mousedown(function() {
    alert('clicou e segurou');
}).bind('mouseup mouseleave', function() {
    alert('soltou, "descliclou"');
});