const title = document.getElementById('title');

title.addEventListener("click", ()=>{
    if (document.getElementsByTagName('ul').length != 1){
        let ul = document.createElement('ul')
        document.body.append(ul);
    }
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = `${Math.round(Math.random()*100)}`;
    ul.append(li);

    
})