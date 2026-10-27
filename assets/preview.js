'use strict';

const preview = document.querySelector('iframe[srcdoc]');
if (preview) {
    const source = preview.getAttribute('srcdoc');
    preview.srcdoc = source.replace(
        /<script src=["'][^"']*d3\.min\.js["']><\/script>/gi,
        () => '<script>' + D3_SOURCE.replace(/<\/script/gi, '<\\/script') + '<' + '/script>'
    );
}
