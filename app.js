const fs = require('fs');
let dir = './posts';
let newdir = './build';
let listfilename= 'index.html';
let files=fs.readdirSync(dir);
  let template=`
  <!DOCTYPE html>
  <html>
    <body>
      <ol>
  `
  fs.writeFileSync(`${newdir}/${listfilename}`,template.trim(),'utf8');
  files.forEach((file) => {
    let data = fs.readFileSync(`${dir}/${file}`)
      let newHtml = `
      <!DOCTYPE html>
    <html>
    <body>
      <div>${data}</div>
    </body>
  </html>
  `
  let filename= file.split('.');
  let newfilename=filename[0]+".html";
  
  let indexdata=`<li> <a href="${newfilename}">${filename[0]}</a> </li> `;
  
  fs.appendFileSync(`${newdir}/${listfilename}`,indexdata.trim(),'utf8');
  
  fs.writeFileSync(`${newdir}/${newfilename}`, newHtml.trim(), 'utf8');
    console.log(`${newfilename}`+ ' created');
})
  let indexfooter=`</ol>
  </body>
   </html>`
  fs.appendFileSync(`${newdir}/${listfilename}`,indexfooter.trim(),'utf8');
