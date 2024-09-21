const head = document.head;
const body = document.body;

(function loadCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/hyoung0301/my-static-files/main/style.css';
    head.appendChild(link);
})();

(function setDocumentTitle() {
    const pathSegments = window.location.pathname.split('/');
    const filename = decodeURIComponent(pathSegments.pop() || '');
    const title = filename.split('.').slice(0, -1).join('.') || filename;

    document.title = title;
})();

(function wrapContentWithMain() {
    let bodyHTML = body.innerHTML;

    bodyHTML = '<main>' + bodyHTML;

    const scriptIndex = bodyHTML.indexOf('<script');

    if (scriptIndex === -1) bodyHTML += '</main>';
    else bodyHTML = bodyHTML.slice(0, scriptIndex) + '</main>' + bodyHTML.slice(scriptIndex);

    document.body.innerHTML = bodyHTML;
})();

(function CreateHeader() {
    const header = document.createElement('header');

    header.textContent = "TurboScript";
    body.prepend(header);
})();
