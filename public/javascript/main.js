document.addEventListener('DOMContentLoaded', () => {
    let script1 = document.querySelector('#handlebars1').innerHTML;
    let contentDiv = document.querySelector('.mybox2');

    let obj = {
      "name": "<h2>Dan</h2>",
      "date": "<i>2020-12-10</i>",
    };
  
    let templateScript = Handlebars.compile(script1); // returns a function
    let renderedTemplate = templateScript(obj);

    contentDiv.innerHTML = renderedTemplate;
    // document.body.innerHTML = templateScript(obj);
  });